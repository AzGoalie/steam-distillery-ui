import { gql, useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

interface App {
  appid: number;
  name: string;
  categories: string[];
}

interface OwnedApps {
  steamid: string;
  apps: App[];
}

const APPS_QUERY = gql`
  query apps($steamids: [ID!]!) {
    getOwnedApps(steamids: $steamids) {
      steamid
      apps {
        appid
        name
        categories
      }
    }
  }
`;

const multiplayerCategories = [
  'Multi-player',
  'Cross-Platform Multiplayer',
  'Online Co-op',
  'MMO',
  'Online PvP',
];

const frequency = (
  accu: { [key: string]: { freq: number; app: App } },
  currentValue: App
) => {
  if (accu[currentValue.appid]) {
    accu[currentValue.appid].freq++;
  } else {
    accu[currentValue.appid] = { freq: 1, app: currentValue };
  }
  return accu;
};

const multiplayerPredicate = (app: App): boolean => {
  return app.categories?.some((c) => multiplayerCategories.includes(c));
};

const useApps = () => {
  const [getApps, { loading, error, data }] = useLazyQuery<{
    getOwnedApps: OwnedApps[];
  }>(APPS_QUERY);
  const [apps, setApps] = useState<App[]>([]);

  useEffect(() => {
    if (data) {
      if (data.getOwnedApps.length > 1) {
        const allApps = data.getOwnedApps.flatMap(({ apps }) => apps);
        const freq = allApps.reduce(frequency, {});
        const sharedApps = Object.keys(freq)
          .filter((appid) => freq[appid].freq > 1)
          .map((appid) => freq[appid].app)
          .filter(multiplayerPredicate);

        setApps(sharedApps);
      } else {
        const multiplayerApps =
          data.getOwnedApps[0].apps.filter(multiplayerPredicate);
        setApps(multiplayerApps);
      }
    }
  }, [data]);

  return { getApps, apps, loading, error };
};

export default useApps;

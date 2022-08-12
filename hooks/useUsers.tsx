import { gql, useQuery } from "@apollo/client";

export interface App {
  appid: number;
  name: string;
  categories: string[];
}

export interface User {
  steamid: string;
  name: string;
  ownedApps: App[];
}

const USERS_QUERY = gql`
  query users($steamids: [ID!]!) {
    users(steamids: $steamids) {
      steamid
      name
      ownedApps {
        appid
        name
        categories
      }
    }
  }
`;

const useUsers = (steamids: string[]) => {
  const { loading, error, data } = useQuery<{
    users: User[];
  }>(USERS_QUERY, { variables: { steamids } });
  const users = data?.users ?? [];

  return { users, loading, error };
};

export default useUsers;

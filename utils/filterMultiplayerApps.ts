import { App, User } from "../hooks/useUsers";

const multiplayerCategories = [
  "Multi-player",
  "Cross-Platform Multiplayer",
  "Online Co-op",
  "MMO",
  "Online PvP",
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

const filterMultiplayerApps = (users: User[]) => {
  const multiplayerApps = Object.entries(
    users.flatMap((user) => user.ownedApps).reduce(frequency, {})
  )
    .filter(([_, { freq }]) => freq === users.length)
    .map(([_, { app }]) => app)
    .filter(multiplayerPredicate);

  return multiplayerApps;
};

export default filterMultiplayerApps;

import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

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

const useUsers = () => {
  const [getUsersQuery, { loading, error, data }] = useLazyQuery<{
    users: User[];
  }>(USERS_QUERY);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  const getUsers = (steamids: string[]) => {
    getUsersQuery({ variables: { steamids } });
  };

  return { getUsers, users, loading, error };
};

export default useUsers;

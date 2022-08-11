import { User } from "../hooks/useUsers";

interface UserListProps {
  users: User[];
  removeUser: (user: User) => void;
}

interface UserListItemProps {
  user: User;
  onRemove: () => void;
}

const UserListItem = ({ user, onRemove }: UserListItemProps) => (
  <li className="flex sm:max-w-xs">
    <div className="block w-full rounded-tl-lg rounded-bl-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
      {user.name}
    </div>
    <button
      className="rounded-tr-lg rounded-br-lg bg-indigo-700 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-500 sm:w-auto"
      onClick={onRemove}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </li>
);

const UserList = ({ users, removeUser }: UserListProps) => {
  return (
    <div>
      {users?.length > 0 && (
        <h2 className="mb-3 flex items-center gap-3 p-1 text-base font-normal dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Steam Users
        </h2>
      )}

      <ul className="mx-auto grid gap-4 sm:grid-cols-3 md:grid-cols-4">
        {users.map((user) => (
          <UserListItem
            key={user.steamid}
            user={user}
            onRemove={() => removeUser(user)}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;

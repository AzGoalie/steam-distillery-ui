interface SteamidListProps {
  steamids: string[];
  removeSteamid: (steamid: string) => void;
}

interface SteamidListItemProps {
  steamid: string;
  onRemove: () => void;
}

const SteamidListItem = ({ steamid, onRemove }: SteamidListItemProps) => (
  <li className="flex">
    <div className="block w-full rounded-tl-lg rounded-bl-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
      {steamid}
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

const SteamidList = ({ steamids, removeSteamid }: SteamidListProps) => {
  return (
    <>
      <h2 className="mb-2 text-xl font-bold dark:text-white">Steam IDs</h2>
      <ul className="mb-4 space-y-4">
        {steamids.map((id, idx) => (
          <SteamidListItem
            key={id + idx}
            steamid={id}
            onRemove={() => removeSteamid(id)}
          />
        ))}
      </ul>
    </>
  );
};

export default SteamidList;

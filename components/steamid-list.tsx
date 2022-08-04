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
    <div className="w-full rounded-tl-md rounded-bl-md bg-gray-100 p-4">
      {steamid}
    </div>
    <button
      className="rounded-tr-md rounded-br-md border-0 bg-indigo-500 px-2 text-center text-lg text-white hover:bg-indigo-600 focus:outline-none"
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
      <h2 className="my-4 text-xl font-normal text-gray-900 sm:text-2xl">
        Steam IDs
      </h2>
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

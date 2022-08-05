interface GameCardProps {
  game: { appid: number; name: string; categories: string[] };
}

const GameCard = ({ game }: GameCardProps) => (
  <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
      {game.name}
    </h5>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
      <pre>TODO: Add description</pre>
    </p>
    <a
      href={`https://store.steampowered.com/app/${game.appid}`}
      className="inline-flex items-center text-indigo-600 hover:underline dark:text-white"
      target="blank"
    >
      Steam Page
      <svg
        className="ml-2 h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
      </svg>
    </a>
  </div>
);
export default GameCard;

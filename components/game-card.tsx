interface GameCardProps {
  game: { appid: number; name: string; categories: string[] };
}

const GameCard = ({ game }: GameCardProps) => (
  <div className="p-4">
    <div className="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row">
      <div className="flex-grow">
        <h2 className="mb-3 text-lg font-medium text-gray-900">{game.name}</h2>

        <a
          className="mt-3 inline-flex items-center text-indigo-500"
          href={`https://store.steampowered.com/app/${game.appid}`}
          target="blank"
        >
          Steam Page
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
);
export default GameCard;

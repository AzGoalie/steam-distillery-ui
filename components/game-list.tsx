import GameCard from './game-card';
import Spinner from './spinner';

interface GameListProps {
  games: any[];
  loading: boolean;
}

const GameList = ({ games, loading }: GameListProps) => {
  const Content = () => {
    return loading ? (
      <div className="flex items-center justify-center p-12 sm:p-4">
        <Spinner />
      </div>
    ) : (
      <ul className="flex flex-wrap justify-center xl:justify-evenly">
        {games?.map((g) => (
          <li key={g.appid} className="max-w-md">
            <GameCard game={g} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full">
      <h2 className="my-4 text-xl font-normal text-gray-900 sm:text-center sm:text-2xl">
        Games
      </h2>
      <Content />
    </div>
  );
};

export default GameList;

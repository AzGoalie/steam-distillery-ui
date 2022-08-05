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
      <ul className="mx-auto grid w-fit gap-8 md:grid-cols-2 xl:grid-cols-3">
        {games?.map((g) => (
          <li key={g.appid} className="max-w-sm">
            <GameCard game={g} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {games?.length > 0 && (
        <h2 className="mb-4 text-xl font-bold dark:text-white sm:text-center">
          Games
        </h2>
      )}
      <Content />
    </div>
  );
};

export default GameList;

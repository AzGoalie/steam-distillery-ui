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
      <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {games?.map((g) => (
          <li key={g.appid} className="">
            <GameCard game={g} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full">
      <h2 className="mb-2 text-xl font-bold sm:text-center">Games</h2>
      <Content />
    </div>
  );
};

export default GameList;

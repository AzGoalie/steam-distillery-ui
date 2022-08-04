import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ErrorMessage from '../components/error-message';
import Footer from '../components/footer';
import GameList from '../components/game-list';
import SteamidInput from '../components/steamid-input';
import SteamidList from '../components/steamid-list';
import useApps from '../hooks/useApps';

const Home: NextPage = () => {
  const { getApps, apps, loading, error } = useApps();
  const [steamids, setSteamids] = useState<string[]>([]);

  const addSteamid = (steamid: string) => {
    if (!steamids.includes(steamid)) {
      setSteamids([...steamids, steamid]);
    }
  };

  const removeSteamid = (steamid: string) =>
    setSteamids(steamids.filter((id) => id !== steamid));

  const handleFindGames = () => {
    getApps({ variables: { steamids } });
  };

  return (
    <div className="flex h-screen flex-col justify-between gap-4">
      <Head>
        <title>Steam Distillery</title>
        <meta name="description" content="Searching Steam, distiled" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto mt-12 w-full max-w-screen-2xl p-4">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Steam Distillery
        </h1>

        <p className="mb-8 text-center text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
          Find multiplayer games that you share between friends! Enter a{' '}
          <a
            href="https://steamid.io/"
            className="text-indigo-600 underline"
            target="blank"
          >
            SteamID
          </a>{' '}
          to begin.
        </p>

        <div className="pb-8">
          <SteamidInput addSteamid={addSteamid} />
        </div>

        {error && <ErrorMessage message={error.message} />}

        <div className="flex flex-col gap-8 sm:flex-row sm:p-8">
          <div className="sm:w-64 sm:shrink-0">
            <SteamidList steamids={steamids} removeSteamid={removeSteamid} />

            <button
              type="button"
              onClick={handleFindGames}
              disabled={steamids?.length === 0}
              className="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-indigo-300"
            >
              Find Games!
            </button>
          </div>

          <GameList games={apps} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

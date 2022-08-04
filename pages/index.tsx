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

  const removeSteamid = (steamid: string) => setSteamids(steamids.filter((id) => id !== steamid));

  const handleFindGames = () => {
    getApps({ variables: { steamids } });
  };

  return (
    <div className="flex flex-col justify-between h-screen gap-4">
      <Head>
        <title>Steam Distillery</title>
        <meta name="description" content="Searching Steam, distiled" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full p-4 mx-auto mt-12 max-w-screen-2xl">
        <h1 className="mb-4 text-3xl font-medium text-center text-gray-900 sm:text-4xl">Steam Distillery</h1>

        <p className="mb-8 text-base leading-relaxed text-center">
          Find multiplayer games that you share between friends! Enter a{' '}
          <a href="https://steamid.io/" className="text-indigo-500 underline" target="blank">
            SteamID
          </a>{' '}
          to begin.
        </p>

        <SteamidInput addSteamid={addSteamid} />

        {error && <ErrorMessage message={error.message} />}

        <div className="flex flex-col sm:flex-row sm:gap-8 sm:p-8">
          <div className="sm:w-64 sm:shrink-0">
            <SteamidList steamids={steamids} removeSteamid={removeSteamid} />

            <button
              type="button"
              onClick={handleFindGames}
              disabled={steamids?.length === 0}
              className="w-full px-6 py-2 text-lg text-center text-white bg-indigo-500 border-0 rounded hover:bg-indigo-600 focus:outline-none disabled:bg-indigo-300"
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

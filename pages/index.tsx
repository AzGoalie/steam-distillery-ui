import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import DarkmodeToggle from '../components/darkmode-toggle';
import ErrorMessage from '../components/error-message';
import Footer from '../components/footer';
import GameList from '../components/game-list';
import SteamidInput from '../components/steamid-input';
import SteamidList from '../components/steamid-list';
import useApps from '../hooks/useApps';

const Home: NextPage = () => {
  const { getApps, apps, loading, error } = useApps();
  const [steamids, setSteamids] = useState<string[]>([]);

  useEffect(() => {
    if (steamids?.length > 0) {
      getApps({ variables: { steamids } });
    }
  }, [steamids]);

  const addSteamid = (steamid: string) => {
    if (!steamids.includes(steamid)) {
      setSteamids([...steamids, steamid]);
    }
  };

  const removeSteamid = (steamid: string) =>
    setSteamids(steamids.filter((id) => id !== steamid));

  return (
    <div className="flex min-h-screen flex-col justify-between gap-4 dark:bg-gray-900">
      <Head>
        <title>Steam Distillery</title>
        <meta name="description" content="Searching Steam, distiled" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto p-4">
        <div className="container flex justify-end ">
          <DarkmodeToggle />
        </div>

        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Steam Distillery
        </h1>

        <p className="mb-8 text-center text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Find multiplayer games that you share between friends! Enter a{' '}
          <a
            href="https://steamid.io/"
            className="text-indigo-600 underline dark:text-white"
            target="blank"
          >
            SteamID
          </a>{' '}
          to begin.
        </p>

        <div className="flex flex-col gap-8">
          <SteamidInput addSteamid={addSteamid} />

          {error && <ErrorMessage message={error.message} />}

          <SteamidList steamids={steamids} removeSteamid={removeSteamid} />
          <GameList games={apps} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

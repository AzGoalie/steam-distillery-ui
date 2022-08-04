import React, { ChangeEvent, useState } from 'react';

interface SteamidInputProps {
  addSteamid: (steamid: string) => void;
}

const SteamidInput = ({ addSteamid }: SteamidInputProps) => {
  const [steamidInput, setSteamidInput] = useState('');

  const handleSubmit = () => {
    if (steamidInput?.length > 0) {
      addSteamid(steamidInput);
      setSteamidInput('');
    }
  };

  return (
    <div className="flex flex-col justify-center max-w-sm gap-4 mx-auto sm:max-w-xl sm:flex-row sm:items-end">
      <div className="grow">
        <label htmlFor="steamid" className="text-sm leading-7 text-gray-600">
          Steam ID
        </label>
        <input
          type="text"
          id="steamid"
          name="steamid"
          value={steamidInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSteamidInput(e.target.value)}
          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="px-6 py-2 text-lg text-center text-white bg-indigo-500 border-0 rounded hover:bg-indigo-600 focus:outline-none"
      >
        Add Steam ID
      </button>
    </div>
  );
};

export default SteamidInput;

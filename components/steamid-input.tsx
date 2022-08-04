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
    <div className="mx-auto flex max-w-sm flex-col justify-center gap-4 sm:max-w-xl sm:flex-row sm:items-end">
      <div className="grow">
        <label htmlFor="steamid" className="text-sm leading-7 text-gray-600">
          Steam ID
        </label>
        <input
          type="text"
          id="steamid"
          name="steamid"
          value={steamidInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSteamidInput(e.target.value)
          }
          className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="rounded border-0 bg-indigo-500 py-2 px-6 text-center text-lg text-white hover:bg-indigo-600 focus:outline-none"
      >
        Add Steam ID
      </button>
    </div>
  );
};

export default SteamidInput;

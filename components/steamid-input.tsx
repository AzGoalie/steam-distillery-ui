import { useState } from "react";
import Button from "./button";

interface SteamidInputProps {
  addSteamid: (steamid: string) => void;
}

const SteamidInput = ({ addSteamid }: SteamidInputProps) => {
  const [steamidInput, setSteamidInput] = useState("");

  const handleSubmit = () => {
    if (steamidInput?.length > 0) {
      addSteamid(steamidInput);
      setSteamidInput("");
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-4 sm:max-w-xl sm:flex-row sm:items-end">
      <div className="grow">
        <label
          htmlFor="steamid"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Steam ID
        </label>
        <input
          type="text"
          id="steamid"
          placeholder="12345678901234567"
          value={steamidInput}
          onChange={(e) => setSteamidInput(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:autofill:selection:bg-gray-700 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
        />
      </div>
      <Button onClick={handleSubmit}>Add Steam ID</Button>
    </div>
  );
};

export default SteamidInput;

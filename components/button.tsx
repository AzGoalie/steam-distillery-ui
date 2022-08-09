import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick = () => {},
  fullWidth = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${
        fullWidth ? "w-full" : ""
      } rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-500 disabled:dark:border disabled:dark:border-gray-600 disabled:dark:bg-gray-800 disabled:dark:text-gray-400`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;

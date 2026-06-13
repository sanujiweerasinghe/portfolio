import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 transition-all duration-300 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 ${className}`}
    >
      <FiSun className={`absolute h-4 w-4 transition-all duration-300 ${theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
      <FiMoon className={`absolute h-4 w-4 transition-all duration-300 ${theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`} />
    </button>
  );
}

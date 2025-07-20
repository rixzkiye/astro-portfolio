import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { getTheme, setTheme, type Theme } from '../utils/theme';

export default function ThemeToggle() {
  const [theme, setCurrentTheme] = useState<Theme>('light');

  useEffect(() => {
    setCurrentTheme(getTheme());
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-border dark:hover:bg-dark-border transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-light-text dark:text-dark-text" />
      ) : (
        <Sun className="w-5 h-5 text-light-text dark:text-dark-text" />
      )}
    </button>
  );
}

import React, { useEffect, useState } from "react";
import { initTheme, toggleTheme } from "../lib/theme";

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path d="M12 4V2M12 22v-2M4.93 4.93L3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2m20 0h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    initTheme();
    setTheme(document.documentElement.dataset.theme);
  }, []);

  const handleToggle = () => {
    const next = toggleTheme();
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={handleToggle}
      className="inline-flex items-center justify-center rounded-full h-9 w-9 text-text bg-surface hover:bg-surface2 shadow-sm border border-neutral-200"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}



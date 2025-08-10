// Theme initialization and persistence logic

const STORAGE_KEY = "theme";

export function detectInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch (_) {}

  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  // Sync a class for libraries/components that rely on dark class
  root.classList.toggle("dark", theme === "dark");
}

export function initTheme() {
  const initial = detectInitialTheme();
  applyTheme(initial);
  try {
    localStorage.setItem(STORAGE_KEY, initial);
  } catch (_) {}
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch (_) {}
  return next;
}

export function subscribeSystemPreference() {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") return; // user choice wins
    } catch (_) {}
    applyTheme(media.matches ? "dark" : "light");
  };
  if (media.addEventListener) media.addEventListener("change", handler);
  else if (media.addListener) media.addListener(handler);
  return () => {
    if (media.removeEventListener) media.removeEventListener("change", handler);
    else if (media.removeListener) media.removeListener(handler);
  };
}

export function subscribeThemeStorage() {
  const handler = (e) => {
    if (e.key === STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
      applyTheme(e.newValue);
    }
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}



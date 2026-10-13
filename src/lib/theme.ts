export type Theme = 'light' | 'dark';

// Same key as the inline script in index.html that applies the theme before
// the first paint.
const STORAGE_KEY = 'theme';

export const getTheme = (): Theme =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

export const setTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private mode); the theme still applies now.
  }
};

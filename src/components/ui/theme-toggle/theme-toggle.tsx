import { getTheme, setTheme } from '@/lib/theme';
import styles from './theme-toggle.module.scss';

type ThemeToggleProps = {
  className?: string;
};

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
  </svg>
);

/**
 * Both icons are rendered and CSS shows the one matching `data-theme`, so the
 * prerendered HTML is right for either theme without reading it in React.
 * Moon in the light theme (switch to dark), sun in the dark one.
 */
export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      className={`${styles.themeToggle} ${className}`}
      aria-label="Сменить тему"
      title="Сменить тему"
      onClick={() => setTheme(getTheme() === 'dark' ? 'light' : 'dark')}
    >
      <span className={styles.themeToggle__toDark}>
        <MoonIcon />
      </span>
      <span className={styles.themeToggle__toLight}>
        <SunIcon />
      </span>
    </button>
  );
};

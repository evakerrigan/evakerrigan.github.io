import { Button } from '@/components/ui/button';
import styles from './not-found.module.scss';

export const NotFoundRoute = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__container}>
        <h1 className={styles.notFound__title}>404</h1>
        <h2 className={styles.notFound__subtitle}>Страница не найдена</h2>
        <p className={styles.notFound__description}>
          Такой страницы нет. Резюме — на главной.
        </p>

        <Button as="a" href="/" className={styles.notFound__link}>
          На главную
        </Button>
      </div>
    </div>
  );
};

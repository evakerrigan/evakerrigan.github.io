import { Cv } from '@/features/cv/components/cv';
import type { Lang } from '@/features/cv/i18n';

type HomeRouteProps = {
  lang: Lang;
};

export const HomeRoute = ({ lang }: HomeRouteProps) => {
  return <Cv lang={lang} />;
};

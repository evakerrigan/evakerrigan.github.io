import type { Lang } from '../i18n';
import { en } from './en';
import { ru } from './ru';
import type { CvContent } from './types';

export type * from './types';

export const content: Record<Lang, CvContent> = { ru, en };

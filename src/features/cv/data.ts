import avatar from '@/assets/images/avatar.jpg';
import nbcom from '@/assets/images/nbcom.jpg';
import paykongAdmin from '@/assets/images/paykong-admin.jpg';
import paykongAgent from '@/assets/images/paykong-agent.jpg';
import paykongPay from '@/assets/images/paykong-pay.jpg';

export type Link = {
  label: string;
  url: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  url: string;
};

export type Job = {
  period: string;
  company: string;
  companyUrl?: string;
  note?: string;
  // A pause between jobs: shown as a quiet grey line, not as a company.
  isBreak?: boolean;
  links?: Link[];
  points?: string[];
  text?: string;
  stack?: string[];
  screenshots?: Screenshot[];
};

export type Project = {
  name: string;
  url: string;
  text: string;
  stack: string[];
};

export type Education = {
  school: string;
  course: string;
};

const PAYKONG_ARCHIVE_URL =
  'https://web.archive.org/web/20240326010322/https://paykong.io/ru/';

export const profile = {
  name: 'Ксения Любасова',
  role: 'frontend developer — react / typescript',
  photo: avatar,
  about:
    'В веб-разработке с 2014 года, последние годы — e-commerce и финтех на React, Next.js и TypeScript. Дизайнерское образование; свои проекты веду от макета до деплоя.',
};

export const contacts: (Link & { type: string })[] = [
  {
    type: 'email',
    label: 'evakerrigan@gmail.com',
    url: 'mailto:evakerrigan@gmail.com',
  },
  { type: 'telegram', label: '@EvaKerrigan', url: 'https://t.me/EvaKerrigan' },
  {
    type: 'github',
    label: 'evakerrigan',
    url: 'https://github.com/evakerrigan',
  },
  {
    type: 'linkedin',
    label: 'evakerrigan',
    url: 'https://www.linkedin.com/in/evakerrigan',
  },
  {
    type: 'hh.ru',
    label: 'резюме',
    url: 'https://spb.hh.ru/resume/786e614aff0484b8820039ed1f463169587a70',
  },
];

export const jobs: Job[] = [
  {
    period: '2025 — 2026',
    company: 'Nbcompany',
    note: 'e-commerce',
    links: [
      { label: 'iPort', url: 'https://www.iport.ru' },
      { label: 'Samsung', url: 'https://www.samsungstore.ru' },
      { label: 'Huawei', url: 'https://www.h-stores.ru' },
      { label: 'Xiaomi', url: 'https://www.micenter.ru' },
    ],
    points: [
      '140+ задач за 7 месяцев — 23,5% коммитов команды.',
      'Своя UI-библиотека из 20+ компонентов вместо Ant Design.',
      'Trade-in модуль с нуля, интеграция с Civimart.',
      'Микроразметка Schema.org на всех страницах.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'RTK Query'],
    screenshots: [
      {
        src: nbcom,
        alt: 'Samsung Store',
        caption: 'samsungstore.ru',
        url: 'https://www.samsungstore.ru',
      },
    ],
  },
  {
    period: '2023 — 2025',
    company: 'Paykong',
    note: 'платёжная система',
    links: [{ label: 'paykong.io в архиве', url: PAYKONG_ARCHIVE_URL }],
    points: [
      'Админ-панель: миграция Ant Design v3 → v5.',
      'Общий модуль шапки и фильтров для 15 страниц.',
      'SWR, тёмная тема, адаптив.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'SWR'],
    screenshots: [
      {
        src: paykongAdmin,
        alt: 'Paykong, админ-панель',
        caption: 'admin panel',
        url: PAYKONG_ARCHIVE_URL,
      },
      {
        src: paykongAgent,
        alt: 'Paykong, панель агентов',
        caption: 'agent panel',
        url: PAYKONG_ARCHIVE_URL,
      },
      {
        src: paykongPay,
        alt: 'Paykong, клиентское приложение',
        caption: 'payment app',
        url: PAYKONG_ARCHIVE_URL,
      },
    ],
  },
  {
    period: '2022',
    company: 'Happy Fans',
    companyUrl: 'https://github.com/happyfans',
    note: 'стриминговый сервис',
    text: 'Компоненты, рефакторинг легаси, Webpack.',
  },
  {
    period: '2019 — 2021',
    company: 'декрет',
    isBreak: true,
  },
  {
    period: '2015 — 2019',
    company: 'ВТБ',
    companyUrl: 'https://www.roseltorg.ru/',
    note: 'электронные торги',
    text: 'Корпоративные сайты и email-рассылки.',
  },
  {
    period: '2014 — 2015',
    company: 'ЗАО Астропол',
    companyUrl:
      'https://web.archive.org/web/20130518192035/http://astropol.ru/',
    text: 'Дизайн и вёрстка сайтов с нуля на CMS WordPress, OpenCart и MODX.',
  },
];

export const projects: Project[] = [
  {
    name: 'TaskCoin',
    url: 'https://taskcoin.app/',
    text: 'Семейные задачи с оплатой за выполнение. Fullstack, PWA.',
    stack: ['react', 'express', 'postgres'],
  },
  {
    name: 'Lifeboard',
    url: 'https://lifeboard.today:9443/',
    text: 'Панель дня с ИИ-помощником.',
    stack: ['react', 'express', 'llm api'],
  },
  {
    name: 'Easy Multiply',
    url: 'https://easymultiply.com/',
    text: 'Тренажёр таблицы умножения.',
    stack: ['typescript'],
  },
];

export const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Redux Toolkit',
  'RTK Query',
  'React Query',
  'Zustand',
  'SWR',
  'react-hook-form',
  'Ant Design',
  'Tailwind CSS',
  'CSS Modules',
  'SCSS',
  'Vite',
  'Webpack',
  'Module Federation',
  'Jest',
  'Node.js',
  'Express',
  'NestJS',
  'Prisma',
  'PostgreSQL',
  'Docker',
  'LLM API',
  'Figma',
];

export const education: Education[] = [
  { school: 'КемГУ', course: 'физическая информатика, высшее' },
  { school: 'РГТЭУ', course: 'веб-дизайн' },
  { school: 'RS School (EPAM)', course: 'Frontend-разработчик' },
  { school: 'RS School (EPAM)', course: 'Backend-разработчик' },
];

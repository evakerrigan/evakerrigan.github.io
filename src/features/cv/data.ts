import avatar from '@/assets/images/avatar.jpg';
import nbcomHuawei from '@/assets/images/nbcom-huawei.jpg';
import nbcomIport from '@/assets/images/nbcom-iport.jpg';
import nbcomSamsung from '@/assets/images/nbcom-samsung.jpg';
import paykongAdmin from '@/assets/images/paykong-admin.jpg';
import paykongAgent from '@/assets/images/paykong-agent.jpg';
import paykongPay from '@/assets/images/paykong-pay.jpg';

export type Link = {
  label: string;
  url: string;
  // Kept in the data but shown as plain text, not as a link.
  inactive?: boolean;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  url: string;
};

export type Job = {
  period: string;
  position?: string;
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

export type SkillGroup = {
  group: string;
  items: string[];
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
    'Frontend-разработчик: 7+ лет в веб-разработке, из них 3+ года на React, Next.js и TypeScript. Делаю e-commerce, финтех-админки и продуктовые интерфейсы. Дизайнерское образование; свои fullstack проекты веду от макета до деплоя.',
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
    position: 'Frontend Developer',
    company: 'NBCOM GROUP',
    companyUrl: 'https://nbcomgroup.ru/',
    note: 'e-commerce',
    links: [
      { label: 'iPort', url: 'https://www.iport.ru' },
      { label: 'Samsung', url: 'https://www.samsungstore.ru' },
      { label: 'Huawei', url: 'https://www.h-stores.ru' },
      { label: 'Xiaomi', url: 'https://www.micenter.ru', inactive: true },
    ],
    points: [
      '4 интернет-магазина на Next.js; за 7 месяцев 140+ задач — 23,5% коммитов команды.',
      'Рефакторинг: миграция с Ant Design на свою UI-библиотеку из 20+ компонентов, внедрение react-hook-form.',
      'Trade-in модуль с нуля: интеграция с Civimart по REST API, оценка устройств, автоприменение скидки.',
      'Библиотека валидации и масок форм (email, телефон) — 10+ форм в 3 проектах: checkout, профиль, подписка.',
      'Каталог уценённых товаров, предзаказ новинок, промо-страница с таймером.',
      'SEO: микроразметка Schema.org / JSON-LD (Breadcrumbs, Product) на всех страницах.',
      'Мобильный UX: sticky-корзина, адаптивные карточки и меню; исправила сортировку и фильтрацию каталога.',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'react-hook-form',
      'CSS Modules',
      'REST API',
      'JSON-LD',
      'Schema.org',
    ],
    screenshots: [
      {
        src: nbcomIport,
        alt: 'iPort',
        caption: 'iport.ru',
        url: 'https://www.iport.ru',
      },
      {
        src: nbcomSamsung,
        alt: 'Samsung Store',
        caption: 'samsungstore.ru',
        url: 'https://www.samsungstore.ru',
      },
      {
        src: nbcomHuawei,
        alt: 'Huawei Store',
        caption: 'h-stores.ru',
        url: 'https://www.h-stores.ru',
      },
    ],
  },
  {
    period: '2023 — 2025',
    position: 'Frontend Developer',
    company: 'Paykong',
    note: 'финтех, платёжная система',
    links: [{ label: 'paykong.io в архиве', url: PAYKONG_ARCHIVE_URL }],
    points: [
      'Админ-панель для руководства: аналитика и мониторинг транзакций, бизнес-процессы.',
      'Миграция Ant Design v3 → v5; общий модуль шапки и фильтров для 15 страниц — меньше техдолга.',
      'Загрузка данных на SWR: кэширование, автообновление, обработка ошибок.',
      'Редизайн интерфейса, адаптивная вёрстка, тёмная тема.',
      'Панель агентов: пополнение депозита, выбор кошелька, QR-код для оплаты, статус и таймер.',
      'Клиентское приложение оплаты на Next.js: новые платёжные методы.',
      'Участие в решениях по архитектуре; работа с дизайнером и QA.',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux',
      'SWR',
      'Ant Design',
      'Chakra UI',
      'Tailwind CSS',
      'CSS Modules',
    ],
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
    position: 'Frontend Developer',
    company: 'Happy Fans',
    companyUrl: 'https://github.com/happyfans',
    note: 'стриминговый сервис',
    points: [
      'Интерфейсы на React: личные страницы пользователей, галерея фотографий, чаты.',
      'Новые компоненты; рефакторинг легаси, вынос повторяющегося кода в переиспользуемые компоненты.',
      'Адаптация сторонних библиотек, настройка Webpack.',
    ],
    stack: ['React', 'Redux', 'Webpack'],
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
    text: 'Страницы корпоративного сайта, вёрстка email-рассылок.',
    stack: ['HTML', 'CSS', 'email-вёрстка'],
  },
  {
    period: '2014 — 2015',
    company: 'ЗАО Астропол',
    companyUrl:
      'https://web.archive.org/web/20130518192035/http://astropol.ru/',
    note: 'разработка веб-сайтов',
    text: 'Дизайн и вёрстка сайтов с нуля на CMS WordPress, OpenCart и MODX.',
    stack: ['WordPress', 'OpenCart', 'MODX', 'HTML', 'CSS'],
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

export const skills: SkillGroup[] = [
  { group: 'core', items: ['TypeScript', 'JavaScript', 'React', 'Next.js'] },
  {
    group: 'state & data',
    items: [
      'Redux Toolkit',
      'RTK Query',
      'React Query',
      'Zustand',
      'SWR',
      'REST API',
    ],
  },
  {
    group: 'ui',
    items: [
      'Ant Design',
      'Chakra UI',
      'Tailwind CSS',
      'CSS Modules',
      'SCSS',
      'react-hook-form',
      'адаптивная вёрстка',
    ],
  },
  {
    group: 'tooling',
    items: [
      'Vite',
      'Webpack',
      'Module Federation',
      'Docker',
      'Jest',
      'Vitest',
      'Git',
    ],
  },
  {
    group: 'backend',
    items: ['Node.js', 'Express', 'NestJS', 'Prisma', 'PostgreSQL'],
  },
  {
    group: 'ai',
    items: ['Claude Code', 'Cursor', 'LLM API', 'промпт-инжиниринг'],
  },
  { group: 'design', items: ['Figma', 'Photoshop', 'Pixel Perfect'] },
];

export const education: Education[] = [
  { school: 'КемГУ', course: 'физическая информатика, высшее' },
  { school: 'РГТЭУ', course: 'веб-дизайн' },
  { school: 'RS School (EPAM)', course: 'Frontend-разработчик' },
  { school: 'RS School (EPAM)', course: 'Backend-разработчик' },
];

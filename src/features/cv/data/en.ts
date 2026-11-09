import {
  avatar,
  HH_RESUME_URL,
  nbcomHuawei,
  nbcomIport,
  nbcomSamsung,
  PAYKONG_ARCHIVE_URL,
  paykongAdmin,
  paykongAgent,
  paykongPay,
} from './shared';
import type { CvContent } from './types';

export const en: CvContent = {
  meta: {
    title: 'Kseniia Liubasova — Frontend Developer',
    description:
      'Kseniia Liubasova — Frontend Developer (React, TypeScript). Experience, projects, skills and contacts.',
    jobTitle: 'Frontend Developer',
  },

  ui: {
    experience: '01 / Experience',
    projects: '02 / Projects',
    skills: '03 / Skills',
    education: '04 / Education',
    themeToggle: 'Toggle theme',
  },

  profile: {
    name: 'Kseniia Liubasova',
    role: 'frontend developer',
    roleStack: 'react / typescript',
    photo: avatar,
    about:
      'Frontend developer with 7+ years in web development, including 3+ years with React, Next.js and TypeScript. I build e-commerce, fintech admin panels and product interfaces. Background in design; I take my own fullstack projects from mockup to deployment.',
  },

  contacts: [
    {
      type: 'email',
      label: 'evakerrigan@gmail.com',
      url: 'mailto:evakerrigan@gmail.com',
    },
    {
      type: 'telegram',
      label: '@EvaKerrigan',
      url: 'https://t.me/EvaKerrigan',
    },
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
    { type: 'hh.ru', label: 'resume (ru)', url: HH_RESUME_URL },
  ],

  jobs: [
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
        "4 online stores on Next.js; 140+ tasks in 7 months — 23.5% of the team's commits.",
        'Refactoring: migrated from Ant Design to an in-house UI library of 20+ components, introduced react-hook-form.',
        'Trade-in module from scratch: Civimart REST API integration, device valuation, automatic discount.',
        'Form validation and input mask library (email, phone) — 10+ forms across 3 projects: checkout, profile, subscription.',
        'Marked-down products catalog, pre-orders for new releases, promo page with a countdown timer.',
        'SEO: Schema.org / JSON-LD structured data (Breadcrumbs, Product) on all pages.',
        'Mobile UX: sticky cart, responsive product cards and menus; fixed catalog sorting and filtering.',
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
      note: 'fintech, payment system',
      links: [{ label: 'paykong.io (archived)', url: PAYKONG_ARCHIVE_URL }],
      points: [
        'Admin panel for management: transaction analytics and monitoring, business processes.',
        'Ant Design v3 → v5 migration; shared header and filters module for 15 pages — less tech debt.',
        'Data fetching with SWR: caching, auto-revalidation, error handling.',
        'Interface redesign, responsive layout, dark theme.',
        'Agent panel: deposit top-up, wallet selection, payment QR code, status and timer.',
        'Customer payment app on Next.js: new payment methods.',
        'Took part in architecture decisions; worked closely with the designer and QA.',
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
          alt: 'Paykong admin panel',
          caption: 'admin panel',
          url: PAYKONG_ARCHIVE_URL,
        },
        {
          src: paykongAgent,
          alt: 'Paykong agent panel',
          caption: 'agent panel',
          url: PAYKONG_ARCHIVE_URL,
        },
        {
          src: paykongPay,
          alt: 'Paykong payment app',
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
      note: 'streaming service',
      points: [
        'React interfaces: user profile pages, photo gallery, chats.',
        'New components; legacy refactoring, extracting repeated code into reusable components.',
        'Adapted third-party libraries, configured Webpack.',
      ],
      stack: ['React', 'Redux', 'Webpack'],
    },
    {
      period: '2019 — 2021',
      company: 'parental leave',
      isBreak: true,
    },
    {
      period: '2015 — 2019',
      company: 'VTB',
      companyUrl: 'https://www.roseltorg.ru/',
      note: 'e-procurement platform',
      text: 'Corporate website pages, HTML email templates.',
      stack: ['HTML', 'CSS', 'HTML email'],
    },
    {
      period: '2014 — 2015',
      company: 'Astropol',
      companyUrl:
        'https://web.archive.org/web/20130518192035/http://astropol.ru/',
      note: 'website development',
      text: 'Designed and built websites from scratch on WordPress, OpenCart and MODX.',
      stack: ['WordPress', 'OpenCart', 'MODX', 'HTML', 'CSS'],
    },
  ],

  projects: [
    {
      name: 'TaskCoin',
      url: 'https://taskcoin.app/',
      text: 'Family chores with rewards for completed tasks. Fullstack, PWA.',
      stack: ['react', 'express', 'postgres'],
    },
    {
      name: 'Lifeboard',
      url: 'https://lifeboard.today:9443/',
      text: 'Daily dashboard with an AI assistant.',
      stack: ['react', 'express', 'llm api'],
    },
    {
      name: 'Easy Multiply',
      url: 'https://easymultiply.com/',
      text: 'Multiplication table trainer.',
      stack: ['typescript'],
    },
  ],

  skills: [
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
        'responsive layout',
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
      items: ['Claude Code', 'Cursor', 'LLM API', 'prompt engineering'],
    },
    { group: 'design', items: ['Figma', 'Photoshop', 'Pixel Perfect'] },
  ],

  education: [
    {
      school: 'Kemerovo State University',
      course: 'Physical Informatics, higher education',
    },
    {
      school: 'Russian State University of Trade and Economics',
      course: 'Web Design',
    },
    { school: 'RS School (EPAM)', course: 'Frontend Developer' },
    { school: 'RS School (EPAM)', course: 'Backend Developer' },
  ],
};

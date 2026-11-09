import { content } from './data';
import { LANG_PATH, LANGS, type Lang } from './i18n';

export const SITE_URL = 'https://evakerrigan.github.io/';

export const pageUrl = (lang: Lang) => new URL(LANG_PATH[lang], SITE_URL).href;

/**
 * schema.org Person markup: lets search engines and resume parsers read the
 * CV as structured data (name, role, skills, links) without parsing layout.
 */
export const buildPersonJsonLd = (lang: Lang) => {
  const { meta, profile, contacts, skills, jobs, education } = content[lang];

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: meta.jobTitle,
    description: profile.about,
    url: pageUrl(lang),
    image: new URL(profile.photo, SITE_URL).href,
    email: contacts.find((contact) => contact.type === 'email')?.label,
    sameAs: contacts
      .filter((contact) => contact.url.startsWith('http'))
      .map((contact) => contact.url),
    knowsAbout: [
      ...new Set([
        ...skills.flatMap((group) => group.items),
        ...jobs.flatMap((job) => job.stack ?? []),
      ]),
    ],
    alumniOf: [...new Set(education.map((item) => item.school))].map(
      (school) => ({ '@type': 'EducationalOrganization', name: school })
    ),
  };
};

/**
 * Canonical URL plus hreflang alternates, so search engines treat the two
 * pages as translations of one CV rather than duplicates.
 */
export const buildLangLinks = (lang: Lang) =>
  [
    `<link rel="canonical" href="${pageUrl(lang)}" />`,
    ...LANGS.map(
      (alt) =>
        `<link rel="alternate" hreflang="${alt}" href="${pageUrl(alt)}" />`
    ),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl('ru')}" />`,
  ].join('\n    ');

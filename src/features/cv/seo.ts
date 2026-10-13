import { contacts, education, jobs, profile, skills } from './data';

export const SITE_URL = 'https://evakerrigan.github.io/';

/**
 * schema.org Person markup: lets search engines and resume parsers read the
 * CV as structured data (name, role, skills, links) without parsing layout.
 */
export const buildPersonJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'Frontend-разработчик',
  description: profile.about,
  url: SITE_URL,
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
});

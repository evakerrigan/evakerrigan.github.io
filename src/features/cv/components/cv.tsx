import { Fragment, useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { content, type Job } from '../data';
import { LANG_PATH, LANG_SWITCH_TITLE, otherLang, type Lang } from '../i18n';
import styles from './cv.module.scss';

type ExternalLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

// Web links open in a new tab so the CV stays open; mailto/tel stay as is.
const ExternalLink = ({ href, className, children }: ExternalLinkProps) => {
  const isWeb = href.startsWith('http');

  return (
    <a
      href={href}
      className={className}
      target={isWeb ? '_blank' : undefined}
      rel={isWeb ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

const JobItem = ({ job }: { job: Job }) => (
  <article className={styles.cv__job}>
    <div className={styles.cv__meta}>
      <p className={styles.cv__period}>{job.period}</p>
      {job.position && <p className={styles.cv__position}>{job.position}</p>}
    </div>
    <div className={styles.cv__jobBody}>
      {job.isBreak ? (
        <p className={styles.cv__break}>{job.company}</p>
      ) : (
        <h3 className={styles.cv__jobTitle}>
          {job.companyUrl ? (
            <ExternalLink href={job.companyUrl}>{job.company}</ExternalLink>
          ) : (
            job.company
          )}
          {job.note && (
            <span className={styles.cv__jobNote}>
              {' '}
              · {job.note}
              {job.links && ' · '}
              {job.links?.map((link, index) => (
                <Fragment key={link.url}>
                  {index > 0 && ', '}
                  {link.inactive ? (
                    link.label
                  ) : (
                    <ExternalLink href={link.url}>{link.label}</ExternalLink>
                  )}
                </Fragment>
              ))}
            </span>
          )}
        </h3>
      )}

      {job.points && (
        <ul className={styles.cv__points}>
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {job.text && <p className={styles.cv__text}>{job.text}</p>}
      {job.stack && <p className={styles.cv__stack}>{job.stack.join(' · ')}</p>}

      {job.screenshots && (
        <div className={styles.cv__shots}>
          {job.screenshots.map((shot) => (
            <figure key={shot.src} className={styles.cv__shot}>
              <ExternalLink href={shot.url} className={styles.cv__shotLink}>
                <img
                  className={styles.cv__shotImage}
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                />
              </ExternalLink>
              <figcaption className={styles.cv__shotCaption}>
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  </article>
);

type CvProps = {
  lang: Lang;
};

export const Cv = ({ lang }: CvProps) => {
  const { meta, ui, profile, contacts, jobs, projects, skills, education } =
    content[lang];
  const switchTo = otherLang(lang);

  // The prerendered HTML already has these right; this keeps them in sync
  // after switching the language in the browser without a page reload.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description);
  }, [lang, meta]);

  return (
    <div className={styles.cv}>
      <div className={styles.cv__controls}>
        <Link
          to={LANG_PATH[switchTo]}
          className={styles.cv__lang}
          hrefLang={switchTo}
          lang={switchTo}
          aria-label={LANG_SWITCH_TITLE[switchTo]}
          title={LANG_SWITCH_TITLE[switchTo]}
        >
          {switchTo.toUpperCase()}
        </Link>
        <ThemeToggle label={ui.themeToggle} />
      </div>
      <header className={styles.cv__header}>
        <img
          className={styles.cv__photo}
          src={profile.photo}
          alt={profile.name}
        />
        <div className={styles.cv__heading}>
          <p className={styles.cv__role}>
            {profile.role}
            <span className={styles.cv__roleStack}> — {profile.roleStack}</span>
          </p>
          {/* First name above, last name below. The space stays in the
              text, so copying and bots still get "First Last". */}
          <h1 className={styles.cv__name}>
            {profile.name.split(' ').map((part, index) => (
              <Fragment key={part}>
                {index > 0 && ' '}
                <span className={styles.cv__namePart}>{part}</span>
              </Fragment>
            ))}
          </h1>
        </div>
        <dl className={styles.cv__contacts}>
          {contacts.map((contact) => (
            <Fragment key={contact.type}>
              <dt>{contact.type}</dt>
              <dd>
                <ExternalLink href={contact.url}>{contact.label}</ExternalLink>
              </dd>
            </Fragment>
          ))}
        </dl>
      </header>

      <section className={styles.cv__about}>
        <p>{profile.about}</p>
      </section>

      <section className={styles.cv__section}>
        <h2 className={styles.cv__sectionTitle}>{ui.experience}</h2>
        <div>
          {jobs.map((job) => (
            <JobItem key={job.company} job={job} />
          ))}
        </div>
      </section>

      <section className={styles.cv__section}>
        <h2 className={styles.cv__sectionTitle}>{ui.projects}</h2>
        <div className={styles.cv__projects}>
          {projects.map((project) => (
            <article key={project.name} className={styles.cv__project}>
              <h3 className={styles.cv__projectTitle}>
                <ExternalLink href={project.url}>{project.name}</ExternalLink>
              </h3>
              <p className={styles.cv__projectText}>{project.text}</p>
              <p className={styles.cv__projectStack}>
                {project.stack.join(' · ')}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cv__section}>
        <h2 className={styles.cv__sectionTitle}>{ui.skills}</h2>
        <div className={styles.cv__skillGroups}>
          {skills.map(({ group, items }) => (
            <div key={group} className={styles.cv__skillGroup}>
              <h3 className={styles.cv__skillLabel}>{group}</h3>
              <ul className={styles.cv__skills}>
                {items.map((skill) => (
                  <li key={skill} className={styles.cv__skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cv__section}>
        <h2 className={styles.cv__sectionTitle}>{ui.education}</h2>
        <ul className={styles.cv__education}>
          {education.map((item) => (
            <li key={`${item.school} ${item.course}`}>
              <strong>{item.school}</strong> — {item.course}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

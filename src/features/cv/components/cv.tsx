import { Fragment, type ReactNode } from 'react';
import {
  contacts,
  education,
  jobs,
  profile,
  projects,
  skills,
  type Job,
} from '../data';
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

export const Cv = () => {
  return (
    <div className={styles.cv}>
      <header className={styles.cv__header}>
        <img
          className={styles.cv__photo}
          src={profile.photo}
          alt={profile.name}
        />
        <div className={styles.cv__heading}>
          <p className={styles.cv__role}>{profile.role}</p>
          <h1 className={styles.cv__name}>{profile.name}</h1>
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
        <h2 className={styles.cv__sectionTitle}>01 / Опыт</h2>
        <div>
          {jobs.map((job) => (
            <JobItem key={job.company} job={job} />
          ))}
        </div>
      </section>

      <section className={styles.cv__section}>
        <h2 className={styles.cv__sectionTitle}>02 / Проекты</h2>
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
        <h2 className={styles.cv__sectionTitle}>03 / Навыки</h2>
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
        <h2 className={styles.cv__sectionTitle}>04 / Образование</h2>
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

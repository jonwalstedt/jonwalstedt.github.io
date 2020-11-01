import React, { ReactNode } from 'react';
import styles from './AlternateSection.module.css';

interface AlternateSectionProps {
  children: ReactNode;
  title: string;
  id?: string;
  role?: string;
  duration?: string;
  location?: string;
  url?: string;
}

const AlternateSection = ({
  children,
  title,
  id,
  role,
  duration,
  location,
  url,
}: AlternateSectionProps): JSX.Element => {
  const durationAndLocation =
    duration && location ? `${location} ${duration}` : undefined;
  const showMeta = role || durationAndLocation || url;

  return (
    <section className={styles.alternateSection} id={id}>
      <h2>{title}</h2>
      {showMeta && (
        <div className={styles.meta}>
          {role && (
            <>
              <small>{role}</small>
              <br />
            </>
          )}
          {durationAndLocation && (
            <>
              <small>{durationAndLocation}</small>
              <br />
            </>
          )}
          {url && (
            <>
              <small>
                <a href={url} target="_blank" rel="noreferrer">
                  {url}
                </a>
              </small>
              <br />
            </>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default AlternateSection;

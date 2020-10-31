import Link from 'next/link';
import React from 'react';
import { ICONS } from './icons';
import styles from './MainMenu.module.css';

export interface MainMenuItem {
  title: string;
  rootSegment: string;
  isActive: boolean;
}

interface MainMenuProps {
  pages: MainMenuItem[];
}

const MainMenu = ({ pages }: MainMenuProps): JSX.Element => {
  return (
    <nav className={styles.mainMenu}>
      <ul className={styles.list}>
        {pages.map((page) => (
          <li key={page.title} className={styles.listItem}>
            <Link href={`/${page.rootSegment}`}>
              <a className={page.isActive ? styles.activeLink : styles.link}>
                <span className={styles.icon}>
                  {ICONS[page.rootSegment || 'me']}
                </span>
                {page.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;

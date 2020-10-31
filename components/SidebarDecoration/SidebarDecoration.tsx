import React from 'react';
import { ICONS } from '../MainMenu/icons';
import styles from './SidebarDecoration.module.css';

const IMAGE_WIDTH = 260;

interface SidebarDecorationProps {
  pages: {
    index: number;
    isActive: boolean;
    rootSegment: string;
  }[];
}

const SidebarDecoration = ({ pages }: SidebarDecorationProps): JSX.Element => {
  const item = pages.find((image) => image.isActive);
  const offset = item ? item.index * IMAGE_WIDTH : 0;

  const listStyle = {
    transform: `translateX(-${offset}px)`,
  };

  return (
    <div className={styles.sidebarDecoration}>
      <ul className={styles.list} style={listStyle}>
        {pages.map((page) => (
          <li key={`decoration-${page.rootSegment}`} className={styles.item}>
            <div className={styles.icon}>{ICONS[page.rootSegment || 'me']}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarDecoration;

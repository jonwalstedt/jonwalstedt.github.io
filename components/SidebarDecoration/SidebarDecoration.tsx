import React from 'react';
import Image from 'next/image';
import styles from './SidebarDecoration.module.css';

const IMAGE_WIDTH = 260;

interface SidebarDecorationProps {
  pages: {
    index: number;
    isActive: boolean;
    sidebarIcon: string;
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
        {pages.map(({ sidebarIcon }) => (
          <li key={sidebarIcon} className={styles.item}>
            <Image src={sidebarIcon} width={IMAGE_WIDTH} height={IMAGE_WIDTH} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarDecoration;

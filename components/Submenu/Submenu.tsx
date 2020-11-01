import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import Portal from '../Portal/Portal';
import styles from './Submenu.module.css';

interface SubmenuItemProps {
  name: string;
  to: string;
}

export const SubmenuItem = ({ name, to }: SubmenuItemProps): JSX.Element => {
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <li className={styles.submenuItem}>
      <Link href={to}>
        <a className={isActive ? styles.linkActive : styles.link}>{name}</a>
      </Link>
    </li>
  );
};

interface SubmenuProps {
  children: ReactNode;
}

const Submenu = ({ children }: SubmenuProps): JSX.Element => {
  return (
    <Portal selector="#submenu">
      <ul className={styles.submenu}>{children}</ul>
    </Portal>
  );
};

export default Submenu;

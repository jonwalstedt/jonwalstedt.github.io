import Link from 'next/link';
import React, { ReactNode } from 'react';
import Portal from '../Portal/Portal';

interface SubmenuItemProps {
  name: string;
  to: string;
}

export const SubmenuItem = ({ name, to }: SubmenuItemProps): JSX.Element => {
  return (
    <li>
      <Link href={to}>
        <a>{name}</a>
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
      <ul>{children}</ul>
    </Portal>
  );
};

export default Submenu;

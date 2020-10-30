import Link from 'next/link';
import React from 'react';

export interface MainMenuItem {
  title: string;
  rootSegment: string;
}

interface MainMenuProps {
  pages: MainMenuItem[];
}

const MainMenu = ({ pages }: MainMenuProps): JSX.Element => {
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page.title}>
            <Link href={`/${page.rootSegment}`}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;

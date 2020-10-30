import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Submenu, { SubmenuItem } from '../Submenu/Submenu';

interface Props {
  children?: ReactNode;
  title?: string;
  submenuItems?: SubmenuItem[];
}

const Layout = ({
  children,
  title = 'This is the default title',
  submenuItems = [],
}: Props): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Me</a>
            </Link>
          </li>
          <li>
            <Link href="/labs">
              <a>Labs</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/cv">
              <a>CV</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      {submenuItems.length > 0 && <Submenu items={submenuItems} />}
      <section>{children}</section>
    </main>
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;

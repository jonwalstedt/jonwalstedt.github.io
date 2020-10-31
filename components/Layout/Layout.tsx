import React, { ReactNode } from 'react';
import Head from 'next/head';
import SidebarDecoration from '../SidebarDecoration/SidebarDecoration';
import { PAGES, PAGE_TITLE_SUFFIX } from '../pagesMeta';
import { useRouter } from 'next/dist/client/router';
import MainMenu from '../MainMenu/MainMenu';
import styles from './Layout.module.css';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  const router = useRouter();

  const pages = PAGES.map(({ rootSegment, ...props }, index) => {
    const pattern = router.pathname === '/' ? `^\/$` : `^${router.pathname}`;
    const matches = `/${rootSegment}`.match(new RegExp(pattern, 'gi'));

    return {
      index,
      isActive: !!matches,
      rootSegment,
      ...props,
    };
  });

  const activePage = pages.find((p) => p.isActive);
  const title = activePage
    ? `${activePage.title}${PAGE_TITLE_SUFFIX}`
    : '404 Page could not be found';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="http://fonts.googleapis.com/css?family=Titillium+Web:600"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Lato:100,300,400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <header>
        <div id="banner" />
        <MainMenu pages={pages} />
      </header>
      <main className={styles.main}>
        <section className={styles.sidebar}>
          <SidebarDecoration pages={pages} />
          <div id="submenu" />
        </section>
        <section className={styles.pageContent}>{children}</section>
      </main>
      <footer>
        <hr />
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
      {/* Dont forget analytics */}
    </div>
  );
};

export default Layout;

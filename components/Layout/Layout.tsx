import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import SidebarDecoration from '../SidebarDecoration/SidebarDecoration';
import { PAGES, PAGE_TITLE_SUFFIX } from '../pagesMeta';
import { useRouter } from 'next/dist/client/router';
import MainMenu from '../MainMenu/MainMenu';
import styles from './Layout.module.css';
import Hamburger from '../Hamburger/Hamburger';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  const router = useRouter();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const handleSubmenuToggleClick = useCallback(() => {
    setIsSubmenuOpen(!isSubmenuOpen);
  }, [isSubmenuOpen]);

  const pages = PAGES.map(({ rootSegment, ...props }, index) => {
    const pattern = rootSegment === '' ? `^\/$` : `^\/${rootSegment}`;
    const matches = router.pathname.match(new RegExp(pattern, 'gi'));

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

  useEffect(() => {
    setIsSubmenuOpen(false);
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Titillium+Web:600"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div className={styles.contentWrapper}>
        <header>
          <div id="banner" />
          <MainMenu pages={pages} />
        </header>
        <main className={isSubmenuOpen ? styles.mainSubmenuOpen : styles.main}>
          <section className={styles.sidebar}>
            <SidebarDecoration pages={pages} />
            <div id="submenu" />
          </section>
          <section className={styles.pageContent}>
            <Hamburger
              onClick={handleSubmenuToggleClick}
              isActive={isSubmenuOpen}
              className={styles.toggleSubmenu}
            />
            {children}
          </section>
        </main>
        {/* Dont forget analytics */}
      </div>
    </div>
  );
};

export default Layout;

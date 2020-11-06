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
    <>
      <Head>
        <title>{title}</title>
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I'm front end developer and problem solver with a big passion for anything related to the web."
        />
        <meta
          name="keywords"
          content="Jon Wålstedt, Senior developer, JavaScript, Typescript, CSS, Front-end, React"
        />
        <meta name="author" content="Jon Wålstedt" />
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
    </>
  );
};

export default Layout;

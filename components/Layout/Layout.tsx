import React, { ReactNode, useCallback } from 'react';
import Head from 'next/head';
import SidebarDecoration from '../SidebarDecoration/SidebarDecoration';
import { PAGES, PAGE_TITLE_SUFFIX } from '../pagesMeta';
import { useRouter } from 'next/dist/client/router';
import MainMenu from '../MainMenu/MainMenu';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  const router = useRouter();

  const pages = PAGES.map(({ rootSegment, ...props }, index) => {
    const matches = `/${rootSegment}`.match(
      new RegExp('^' + router.pathname, 'gi')
    );

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
      </Head>
      <header>
        <div id="banner" />
        <MainMenu pages={pages} />
      </header>
      <main>
        <section>
          <SidebarDecoration pages={pages} />
          <div id="submenu" />
        </section>
        <section>{children}</section>
      </main>
      <footer>
        <hr />
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;

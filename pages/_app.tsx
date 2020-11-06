import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import type { AppProps /*, AppContext */ } from 'next/app';
import * as gtag from '../utils/gtag';
import '../styles/variables.css';
import '../styles/globals.css';
import { useRouter } from 'next/dist/client/router';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

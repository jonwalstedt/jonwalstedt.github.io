import React from 'react';
import Layout from '../components/Layout/Layout';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/variables.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

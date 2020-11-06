import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  DocumentInitialProps,
  NextScript,
} from 'next/document';
import React from 'react';

import { GA_TRACKING_ID } from '../utils/gtag';

type InitialProps = DocumentInitialProps & { isProduction: boolean };

class MyDocument extends Document<InitialProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<InitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';
    return { ...initialProps, isProduction };
  }

  render(): JSX.Element {
    const { isProduction } = this.props;
    return (
      <Html lang="en">
        <Head>
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

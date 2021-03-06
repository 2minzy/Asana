import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Render the app and get the context of the page with collected side effects
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    // render styled components
    const sheet = new ServerStyleSheet();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          sheet.collectStyles(sheets.collect(<App {...props} />)),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
        sheet.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

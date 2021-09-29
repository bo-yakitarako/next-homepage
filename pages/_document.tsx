import Document, { Html, Head, Main, NextScript } from 'next/document';

// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <main
            id="main"
            className="relative w-full h-screen font-mincho text-gray-50 bg-gray-900"
          >
            <Main />
          </main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="language" content="English" />
        <meta name="author" content="Tony David" />
      </Head>
      <body>
        <div id="modalportal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

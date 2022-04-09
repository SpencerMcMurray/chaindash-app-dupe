import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title data-testid="title">ChainDash</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/40343adb7c.js" crossOrigin="anonymous" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
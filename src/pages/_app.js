import Theme from '../styles/theme';
import Head from 'next/head'
import '../styles/style.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>June Liang - React developer</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

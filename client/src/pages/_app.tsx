import { AppProps } from 'next/app';
import Head from 'next/head';

// Page components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Common
import Container from '../common/Container';
import GlobalStyles from '../components/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

import { AppProps } from 'next/app';

import './styles.css';

// Page components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Common
import Container from '../common/Container';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>

      <Footer />
    </>
  );
}

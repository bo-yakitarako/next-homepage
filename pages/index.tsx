import type { NextPage } from 'next';
import Head from 'next/head';
import { FadeIn } from '../components/FadeIn';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bo-yakitarako</title>
        <meta name="description" content="bo-yakitarakoのホームページ" />
      </Head>
      <FadeIn>
        <header className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl sm:text-6xl whitespace-nowrap -translate-y-1">
            bo-yakitarako
          </h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-center whitespace-nowrap -translate-y-1">
            Programming & Golf
          </p>
        </header>
      </FadeIn>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

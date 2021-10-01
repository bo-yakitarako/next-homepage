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
        <header className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-4xl sm:text-6xl">bo-yakitarako</h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-center">
            Programming & Golf
          </p>
        </header>
      </FadeIn>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

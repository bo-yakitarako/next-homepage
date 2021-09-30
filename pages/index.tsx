import type { NextPage } from 'next';
import Head from 'next/head';
import { FadeIn } from '../components/FadeIn';
import { Particles } from '../components/Paricles';

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0">
      <Particles />
      <Head>
        <title>bo-yakitarako</title>
        <meta name="description" content="bo-yakitarakoのホームページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <FadeIn>
          <header className="flex absolute flex-col justify-center items-center w-full h-full">
            <h1 className="text-4xl sm:text-6xl">bo-yakitarako</h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg">
              Programming & Golf
            </p>
          </header>
        </FadeIn>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

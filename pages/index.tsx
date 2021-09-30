import type { NextPage } from 'next';
import Head from 'next/head';
import { FadeIn } from '../components/FadeIn';
import { Particles } from '../components/Paricles';
import { SideMenu } from '../components/sideMenu/SideMenu';

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
        <SideMenu />
        <FadeIn>
          <header className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl sm:text-6xl">bo-yakitarako</h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-center">
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

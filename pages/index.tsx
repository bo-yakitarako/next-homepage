import type { NextPage } from 'next';
import Head from 'next/head';
import { Particles } from '../components/Paricles';

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0">
      <Head>
        <title>bo-yakitarako</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main" className="relative w-full h-screen bg-gray-900">
        <Particles />
        <header className="flex absolute justify-center items-center w-full h-full">
          <h1 className="text-5xl text-gray-50">bo-yakitarako</h1>
        </header>
      </main>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

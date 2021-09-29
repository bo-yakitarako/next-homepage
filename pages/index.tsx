import type { NextPage } from 'next';
import Head from 'next/head';
import { Particles } from '../components/Paricles';

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id="main"
        className="box-border relative w-full h-screen bg-gray-900"
      >
        <Particles />
        <span className="text-gray-100">おほー</span>
      </main>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

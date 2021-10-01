import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Particles } from '../components/Paricles';
import { SideMenu } from '../components/sideMenu/SideMenu';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative w-full h-screen font-mincho text-gray-50 bg-gray-900">
      <Particles />
      <SideMenu />
      <main className="overflow-y-scroll fixed z-10 w-full h-screen scrollbar-hide">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;

import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { DrawerProvider } from '../components/DrawerProvider';
import { Particles } from '../components/Paricles';
import { SideMenu } from '../components/sideMenu/SideMenu';

function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerProvider>
      <div className="relative w-full h-screen font-mincho text-gray-50 bg-gray-900">
        <Particles />
        <nav className="hidden sm:block fixed p-3 w-[fit-content] h-screen">
          <SideMenu />
        </nav>
        <main className="h-screen">
          <Component {...pageProps} />
        </main>
      </div>
    </DrawerProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;

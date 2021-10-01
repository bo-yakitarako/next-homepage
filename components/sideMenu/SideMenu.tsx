import { Page, SideMenuItem } from './SideMenuItem';

const products: Page[] = [
  { title: '迷路ゲーム', path: '/products/maze' },
  { title: '迷路生成', path: '/products/maze_maker' },
  { title: 'Skull King 計算機', path: '/products/skullking' },
];

const SideMenu: React.FC = () => {
  return (
    <nav className="hidden sm:block fixed top-3 left-3 z-20 w-60 bg-transparent">
      <ul className="flex overflow-y-scroll relative flex-col w-full max-h-screen list-none">
        <SideMenuItem href="/about">About</SideMenuItem>
        <SideMenuItem href="/golf">Golf</SideMenuItem>
        <SideMenuItem>Sparebeat</SideMenuItem>
        <SideMenuItem contents={products}>Products</SideMenuItem>
      </ul>
    </nav>
  );
};

export { SideMenu };

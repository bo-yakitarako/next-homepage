import { Page, SideMenuItem } from './SideMenuItem';

const sparebeatProducts: Page[] = [
  { title: 'Map Editor', path: '/sparebeat/map_editor' },
  { title: 'Rate System', path: '/sparebeat/rate_system' },
  { title: '段位認定', path: '/sparebeat/sgc' },
  { title: 'スコアタbot', path: '/sparebeat/score_attack' },
];

const products: Page[] = [
  { title: '迷路ゲーム', path: '/products/maze' },
  { title: '迷路生成', path: '/products/maze_maker' },
  { title: 'Skull Kingは神ゲー', path: '/products/skullking' },
];

const SideMenu: React.FC = () => {
  return (
    <nav className="hidden sm:block fixed p-3 w-[fit-content] h-screen bg-transparent">
      <ul className="flex overflow-y-auto relative flex-col h-full max-h-full list-none">
        <SideMenuItem href="/about">About</SideMenuItem>
        <SideMenuItem href="/golf">Golf</SideMenuItem>
        <SideMenuItem contents={sparebeatProducts}>Sparebeat</SideMenuItem>
        <SideMenuItem contents={products}>Products</SideMenuItem>
      </ul>
    </nav>
  );
};

export { SideMenu };

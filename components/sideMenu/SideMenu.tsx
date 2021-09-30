import { SideMenuItem } from './SideMenuItem';

const SideMenu: React.FC = () => {
  return (
    <nav className="hidden sm:block fixed top-3 left-3 w-60 bg-transparent">
      <ul className="flex overflow-y-scroll relative flex-col w-full max-h-screen list-none">
        <SideMenuItem>About</SideMenuItem>
        <SideMenuItem>Golf</SideMenuItem>
        <SideMenuItem>Sparebeat</SideMenuItem>
        <SideMenuItem>Product</SideMenuItem>
      </ul>
    </nav>
  );
};

export { SideMenu };

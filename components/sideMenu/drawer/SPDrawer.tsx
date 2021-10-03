import { MenuButton } from './MenuButton';

const SPDrawer: React.FC = () => {
  return (
    <nav className="block sm:hidden">
      <MenuButton />
    </nav>
  );
};

export { SPDrawer };

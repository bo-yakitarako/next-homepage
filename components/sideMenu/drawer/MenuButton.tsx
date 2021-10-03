import { useDrawer } from '../../../modules/hooks/useDrawer';
import { MenuButtonLine } from './MenuButtonLine';

const MenuButton: React.FC = () => {
  const { toggleOpen } = useDrawer();
  return (
    <button
      className="flex fixed top-3 left-3 z-50 flex-col justify-center items-center w-14 h-14 hover:cursor-pointer"
      onClick={toggleOpen}
    >
      <MenuButtonLine position="top" />
      <MenuButtonLine />
      <MenuButtonLine position="bottom" />
    </button>
  );
};

export { MenuButton };

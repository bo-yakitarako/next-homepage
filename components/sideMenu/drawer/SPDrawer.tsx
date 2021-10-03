import { useDrawer } from '../../../modules/hooks/useDrawer';
import { SideMenu } from '../SideMenu';
import { MenuButton } from './MenuButton';

const SPDrawer: React.FC = () => {
  const { open, toggleOpen } = useDrawer();
  return (
    <nav className="block sm:hidden">
      <MenuButton />
      <div
        className={`fixed z-10 w-full h-screen bg-gray-900 transition-opacity duration-500 ${
          open ? 'opacity-70' : 'opacity-0 invisible'
        }`}
        onClick={toggleOpen}
      />
      <div
        className={`fixed z-20 w-60 h-screen bg-gray-800 transition-all duration-500 ${
          open ? 'left-0' : '-left-full'
        }`}
      >
        <div className="pt-20 pb-4 h-full max-h-full">
          <div className="box-content h-full border-t-2">
            <SideMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { SPDrawer };

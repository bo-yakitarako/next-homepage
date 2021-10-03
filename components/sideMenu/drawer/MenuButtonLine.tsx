import { useDrawer } from '../../../modules/hooks/useDrawer';

type Props = {
  position?: 'top' | 'bottom';
};

const basicStyle =
  'absolute w-10 h-0.5 bg-gray-50 rounded-sm transition-all duration-700';

const MenuButtonLine: React.FC<Props> = ({ position }) => {
  const { open } = useDrawer();
  if (open) {
    switch (position) {
      case 'top':
        return <span className={`${basicStyle} rotate-45`} />;
      case 'bottom':
        return <span className={`${basicStyle} -rotate-45`} />;
      default:
        return <span className={`${basicStyle} opacity-0`} />;
    }
  }
  switch (position) {
    case 'top':
      return <span className={`${basicStyle} -translate-y-3.5`} />;
    case 'bottom':
      return <span className={`${basicStyle} translate-y-3.5`} />;
    default:
      return <span className={basicStyle} />;
  }
};

export { MenuButtonLine };

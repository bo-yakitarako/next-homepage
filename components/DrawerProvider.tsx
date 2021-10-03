import { useCallback, useState } from 'react';
import { DrawerContext } from '../modules/hooks/useDrawer';

const DrawerProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const value = { open, toggleOpen };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export { DrawerProvider };

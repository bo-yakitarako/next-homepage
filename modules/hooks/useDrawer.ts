import { createContext, useContext } from 'react';

const initialContext = {
  open: false,
  toggleOpen: () => {
    /* todo nothing */
  },
};
export const DrawerContext = createContext(initialContext);

export const useDrawer = () => useContext(DrawerContext);

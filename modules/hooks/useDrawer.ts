import { createContext, useContext } from 'react';

const initialContext = {
  open: false,
  toggleOpen: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  closeDrawer: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};
export const DrawerContext = createContext(initialContext);

export const useDrawer = () => useContext(DrawerContext);

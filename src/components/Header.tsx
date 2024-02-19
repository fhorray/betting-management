import { NavLink } from 'react-router-dom';

import {
  Menubar,
  // MenubarContent,
  // MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  // MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

const Header = () => {
  return (
    <>
      <Menubar className="text-white flex gap-5 justify-center p-5 bg-white text-gray-800">
        <MenubarMenu>
          <MenubarTrigger className="p-2">
            <NavLink to={'/'}>Home</NavLink>
          </MenubarTrigger>
          <MenubarSeparator />
          <MenubarTrigger className="p-2">
            <NavLink to={'/banca'}>Ban</NavLink>
          </MenubarTrigger>
          <MenubarSeparator />
          <MenubarTrigger className="p-2">
            <NavLink to={'/strat'}>Strat</NavLink>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default Header;

import { Logo, MenuItems, NavIcons } from "./index";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-white z-20 font-primary flex justify-between items-center px-10 py-5 uppercase text-sm shadow-md w-full">
      <Logo />
      <MenuItems />
      <NavIcons />
    </nav>
  );
};

export default Navbar;

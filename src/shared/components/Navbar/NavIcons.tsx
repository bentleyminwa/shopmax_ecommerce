import { NavLink } from "react-router-dom";
import { appData } from "../../../assets/data/data";
import { HamburgerComponent } from "./index";

const NavIcons = () => {
  const { menuIcons } = appData;

  return (
    <ul className="flex justify-center items-center gap-4 text-gray-700">
      {menuIcons.map((menuIcon) => (
        <li key={menuIcon.name} className="text-2xl">
          <NavLink to={menuIcon.path}>{menuIcon.icon}</NavLink>
        </li>
      ))}
      <li>
        <HamburgerComponent />
      </li>
    </ul>
  );
};

export default NavIcons;

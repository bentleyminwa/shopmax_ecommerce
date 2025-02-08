import { NavLink } from "react-router-dom";
import { appData } from "../../../assets/data/data";

const MenuItems = () => {
  const { menuItems } = appData;

  return (
    <ul className="hidden md:flex gap-5 lg:gap-10 text-xs text-jet font-semibold">
      {menuItems.map((item) => (
        <li>
          <NavLink to={item.path} className="tracking-widest">
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

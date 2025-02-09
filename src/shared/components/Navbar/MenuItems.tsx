import { NavLink } from "react-router-dom";
import { appData } from "../../../assets/data/data";

const MenuItems = () => {
  const { menuItems } = appData;

  return (
    <ul className="hidden md:flex gap-5 lg:gap-10 text-xs text-jet font-semibold">
      {menuItems.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `tracking-widest pb-1 hover:border-b-2 ${
                isActive ? "border-b-2" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

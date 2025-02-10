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
              `tracking-widest pb-2 hover:scale-110 transition duration-200 ease-in-out flex items-center gap-2  ${
                isActive ? "border-b-2" : ""
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

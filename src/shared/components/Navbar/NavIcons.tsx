import { NavLink } from "react-router-dom";
import { appData } from "../../../assets/data/data";
import { useCart } from "../../hooks/useCart";
import { HamburgerComponent } from "./index";

const NavIcons = () => {
  const { menuIcons } = appData;
  const { cart } = useCart();

  return (
    <div className="flex justify-center items-center gap-4">
      <ul className="flex justify-center items-center gap-4 text-gray-700">
        {menuIcons.map((menuIcon, index) => (
          <li
            key={menuIcon.name}
            className={`text-2xl ${index === 1 ? "relative" : ""}`}
          >
            <NavLink to={menuIcon.path}>{menuIcon.icon}</NavLink>
            {index === 1 ? (
              <span className="absolute -top-4 -right-3 bg-red-500 text-white w-6 h-6 flex justify-center items-center text-xs rounded-full font-bold">
                {cart.length}
              </span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <HamburgerComponent />
    </div>
  );
};

export default NavIcons;

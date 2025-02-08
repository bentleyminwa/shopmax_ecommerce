import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { appData } from "../../../assets/data/data";

const HamburgerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { menuItems } = appData;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="md:hidden">
      <Hamburger size={26} onToggle={toggleMenu} toggled={isOpen} />
      <div>
        {isOpen && (
          <div className="absolute top-full right-0 mt-3 rounded-lg overflow-hidden shadow-lg p-10 text z-10 bg-white">
            <ul className="flex flex-col gap-5 text-xs text-jet font-semibold tracking-wider">
              {menuItems.map((item) => (
                <li>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerComponent;

import className from "classnames";

import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  const btnClasses = className(
    rest.className,
    "bg-black text-white py-2 px-3 uppercase text-xs tracking-wide cursor-pointer w-fit hover:scale-105 transition duration-300 ease-in-out"
  );

  return (
    <button {...rest} className={btnClasses}>
      {children}
    </button>
  );
};

export default Button;

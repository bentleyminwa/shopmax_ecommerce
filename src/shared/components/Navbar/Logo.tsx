import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="border-2 border-secondary p-3 font-semibold tracking-widest">
          Shopmax
        </h1>
      </Link>
    </div>
  );
};

export default Logo;

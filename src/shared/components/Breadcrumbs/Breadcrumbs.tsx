import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentPath = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentPath += `/${crumb}`;

      return (
        <div key={crumb} className="flex">
          <Link to={currentPath}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="w-10/12 mx-auto text-xl font-bold uppercase flex items-center gap-2">
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;

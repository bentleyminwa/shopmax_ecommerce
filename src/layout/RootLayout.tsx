import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/components";

const RootLayout = () => {
  return (
    <main className="relative w-full">
      <nav className="fixed top-0 left-0 bg-white z-20 font-primary flex justify-between items-center px-10 py-5 uppercase text-sm shadow-md w-full">
        <Navbar />
      </nav>

      <section className="font-primary pt-24">
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../shared/components";
import Breadcrumbs from "../shared/components/Breadcrumbs/Breadcrumbs";

const RootLayout = () => {
  return (
    <main className="relative w-full">
      <Navbar />
      <Breadcrumbs />
      <section className="font-primary pt-24">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};

export default RootLayout;

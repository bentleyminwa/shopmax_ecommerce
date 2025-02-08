import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../shared/components";

const RootLayout = () => {
  return (
    <main className="relative w-full">
      <Navbar />
      <section className="font-primary pt-24 min-h-screen">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};

export default RootLayout;

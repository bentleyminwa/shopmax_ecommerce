import About from "./components/About";
import ContactInfo from "./components/ContactInfo";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <About />
      <ContactInfo />
    </footer>
  );
};

export default Footer;

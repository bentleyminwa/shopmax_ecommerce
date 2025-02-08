import { Link } from "react-router-dom";
import { appData } from "../../../../assets/data/data";

const About = () => {
  const { socials } = appData;

  return (
    <div className="space-y-8">
      <h2 className="border-2 border-secondary p-2 text-sm font-semibold tracking-widest w-fit uppercase">
        shopmax
      </h2>
      <p className="text-sm tracking-wide leading-6 text-gray-200">
        ShopMax is a seamless and user-friendly e-commerce platform designed to
        make online shopping effortless and enjoyable. We offer a wide range of
        high-quality products across various categories, ensuring that customers
        find everything they need in one place.
      </p>
      <ul className="flex items-center gap-5 text-2xl">
        {socials.map((social) => (
          <li key={social.url}>
            <Link to={social.url} target="blank">
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;

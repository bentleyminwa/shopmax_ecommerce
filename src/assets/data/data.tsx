import {
  FaCartShopping,
  FaCircleUser,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { clothes, electronics, jewelery, test1, test2, test3 } from "../images";

export const appData = {
  menuItems: [
    {
      id: "1",
      path: "/",
      name: "Home",
    },
    {
      id: "2",
      path: "shop",
      name: "Shop",
    },
  ],
  menuIcons: [
    {
      path: "login",
      icon: <FaCircleUser />,
      name: "Login",
    },
    {
      path: "cart",
      icon: <FaCartShopping />,
      name: "Contact",
    },
  ],
  featuredCategories: [
    {
      title: "Electronics Sale",
      description: "up to 50% sale for all electronics",
      image: electronics,
    },
    {
      title: "Jewelery Sale",
      description: "up to 30% sale for all jewelery",
      image: jewelery,
    },
    {
      title: "Clothes Sale",
      description: "up to 70% sale for all clothes",
      image: clothes,
    },
  ],
  testimonials: [
    {
      name: "Maggie Rhee",
      message: "This store has amazing products! Highly recommend.",
      image: test1,
    },
    {
      name: "Rick Grimes",
      message: "Fantastic quality and fast delivery. Will shop again!",
      image: test2,
    },
    {
      name: "Judith Grimes",
      message:
        "Superb customer service and great pricing! Best in the business.",
      image: test3,
    },
  ],
  socials: [
    {
      url: "https://www.facebook.com/",
      icon: <FaFacebook />,
    },
    {
      url: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      url: "https://www.linkedin.com/",
      icon: <FaLinkedin />,
    },
    {
      url: "https://www.x.com/",
      icon: <FaXTwitter />,
    },
  ],
  contactInfos: [
    {
      title: "Find Us",
      content: "Nairobi, Kenya",
      icon: <FaLocationDot />,
    },
    {
      title: "Call Us",
      content: "+254 712 345 678",
      icon: <FaPhone />,
    },
    {
      title: "Mail Us",
      content: "shopmax@gmail.com",
      icon: <FaEnvelope />,
    },
  ],
};

import {
  FaCartShopping,
  FaEnvelope,
  FaFacebook,
  FaHouse,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaStore,
  FaUser,
  FaXTwitter,
} from "react-icons/fa6";
import { clothes, daryl, electronics, jewelery, negan, rick } from "../images";

export const appData = {
  menuItems: [
    {
      id: "1",
      path: "/",
      name: "Home",
      icon: <FaHouse />,
    },
    {
      id: "2",
      path: "shop",
      name: "Shop",
      icon: <FaStore />,
    },
  ],
  menuIcons: [
    {
      path: "profile",
      icon: <FaUser />,
      name: "Profile",
    },
    {
      path: "cart",
      icon: <FaCartShopping />,
      name: "Cart",
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
      name: "Rick Grimes",
      message:
        "This store has amazing products! Highly recommend. My son Carl recommends it too.",
      image: rick,
    },
    {
      name: "Daryl Dixon",
      message:
        "Fantastic quality and fast delivery. Me and Carol always visit their stores.",
      image: daryl,
    },
    {
      name: "Negan Smith",
      message:
        "Superb customer service and great pricing! They are our saviours. Made shopping easy.",
      image: negan,
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

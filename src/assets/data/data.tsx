import { FaCartShopping, FaCircleUser } from "react-icons/fa6";
import { clothes, electronics, jewelery, test1, test2, test3 } from "../images";

export const appData = {
  menuItems: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "shop",
      name: "Shop",
    },
    {
      path: "contact",
      name: "Contact",
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
};

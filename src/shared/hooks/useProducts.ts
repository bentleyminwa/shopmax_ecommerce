import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atom, useAtom } from "jotai";
import { Product } from "../types/types";

async function fetchProducts(): Promise<Product[]> {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}

const categoryAtom = atom("all");

export const useProducts = () => {
  const [category, setCategory] = useAtom(categoryAtom);

  const { data: products, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const filteredProducts =
    category === "all"
      ? products
      : products?.filter((product) => product.category === category);

  const randomizeProducts = (products: Product[] | undefined) => {
    if (!products) return [];
    return products.sort(() => Math.random() - 0.5);
  };

  const homeProducts = randomizeProducts(filteredProducts).slice(0, 4);

  return {
    filteredProducts,
    homeProducts,
    category,
    setCategory,
    isPending,
  };
};

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

  return {
    filteredProducts,
    category,
    setCategory,
    isPending,
  };
};

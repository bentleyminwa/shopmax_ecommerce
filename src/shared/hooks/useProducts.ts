import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Product } from "../types/types";

async function fetchProducts(): Promise<Product[]> {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}

export const useProducts = () => {
  const [category, setCategory] = useState("all");

  const { data: products } = useQuery({
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
  };
};

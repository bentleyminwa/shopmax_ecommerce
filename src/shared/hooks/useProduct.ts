import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../types/types";

const fetchProduct = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

export const useProduct = () => {
  const { id } = useParams<{ id: string }>();

  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id!),
  });

  return {
    product,
  };
};

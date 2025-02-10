import { useProducts } from "../../hooks/useProducts";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const { filteredProducts: products } = useProducts();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;

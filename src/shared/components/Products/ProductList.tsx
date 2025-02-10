import { motion } from "motion/react";
import { useProducts } from "../../hooks/useProducts";
import { containerVariants } from "../../motion/motion";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { filteredProducts: products } = useProducts();

  return (
    <>
      <motion.div
        variants={containerVariants}
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
      >
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </motion.div>
    </>
  );
};

export default ProductList;

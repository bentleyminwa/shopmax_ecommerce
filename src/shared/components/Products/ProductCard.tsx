import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../types/types";

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-lg w-full flex flex-col p-4 space-y-5 transform hover:scale-105 transition duration-300 ease-in-out">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[200px] mx-auto object-contain"
        />
      </Link>
      <h2 className="text-sm font-semibold">{product.title}</h2>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-gray-500">$ {product.price}</p>
        <button
          onClick={() => addToCart({ ...product, quantity: 1 })}
          className="bg-black text-white py-2 px-3 uppercase text-xs tracking-wide cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

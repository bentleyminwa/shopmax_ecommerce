import { useEffect } from "react";
import { SearchComponent } from "../../shared/components";
import { useCart } from "../../shared/hooks/useCart";
import { useProduct } from "../../shared/hooks/useProduct";

const ProductDetails = () => {
  const { product } = useProduct();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full pb-10">
      <SearchComponent />
      <section className="w-11/12 md:w-10/12 lg:3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 bg-gray-200">
        <div className="w-full flex justify-center items-center">
          <img
            src={product?.image}
            alt=""
            className="w-[400px] h-[400px] rounded-xl"
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-2">{product?.title}</h2>
          <h3 className="uppercase text-sm font-semibold text-gray-500 tracking-wider mb-5">
            {product?.category}
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mb-10">
            $ {product?.price}
          </h4>
          <p className="text-sm tracking-wide leading-6 text-gray-800 mb-10">
            {product?.description}
          </p>
          <button
            onClick={() =>
              product?.id && addToCart({ ...product, quantity: 1 })
            }
            className="bg-black text-white p-3 uppercase tracking-wider cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;

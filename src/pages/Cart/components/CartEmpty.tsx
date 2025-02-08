import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../../assets/images";

const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <section className="w-3/4 mx-auto rounded-lg my-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={emptyCart} alt="" className="max-h-[200px]" />
        <div className="border border-gray-200 shadow-lg p-6 space-y-3 text-center">
          <h2 className="text-lg font-semibold">
            Your Cart is a Little Empty!
          </h2>
          <p className="text-sm tracking-wide leading-6 text-gray-700">
            Start adding your favorite items from our store and enjoy a great
            shopping experience. ✨🛒
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="border p-2 text-xs tracking-wider uppercase font-semibold bg-black text-white"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartEmpty;

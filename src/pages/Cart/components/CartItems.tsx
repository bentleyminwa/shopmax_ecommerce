import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { useCart } from "../../../shared/hooks/useCart";

const CartItems = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="my-10 flex flex-col gap-5">
      {cart.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 gap-5 border border-gray-300 rounded-lg shadow-xs p-5 place-items-center"
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[100px] max-w-[100px]"
          />
          <h2 className="text-sm text-gray-600 font-semibold">{item.title}</h2>
          <p className="font-bold text-sm text-gray-600">$ {item.price}</p>
          <div className="border border-gray-300 flex justify-center items-center p-2">
            <button className="">
              <FaMinus />
            </button>
            <span className="px-3">{item.quantity}</span>
            <button>
              <FaPlus />
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <span className="text-xl text-red-400">
              <FaRegTrashCan />
            </span>
            <span className="text-sm font-semibold text-gray-600">Remove</span>
          </button>
        </div>
      ))}
    </section>
  );
};

export default CartItems;

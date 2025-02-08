import { SearchComponent } from "../../shared/components";
import { useCart } from "../../shared/hooks/useCart";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0)
    return <p className="text-center text-xl mt-6">Your cart is empty.</p>;

  return (
    <main className="">
      <SearchComponent />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Shopping Cart</h1>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1 px-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-green-600">
                ${item.price} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={clearCart}
          className="mt-4 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-900"
        >
          Clear Cart
        </button>
      </div>
    </main>
  );
};

export default Cart;

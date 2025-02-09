import { useCart } from "../../../shared/hooks/useCart";

const CartSummary = () => {
  const { cart } = useCart();

  function calculateTotal() {
    let total = 0;
    cart.map((item) => {
      const subTotal = item.price * item.quantity;
      total += subTotal;
    });
    return total;
  }

  const result = calculateTotal();

  return (
    <div className="border border-gray-300 rounded-lg w-fit p-5">
      <p className="border-b border-gray-300 pb-4 mb-4 text-sm text-gray-700 font-semibold ">
        Total: <span>$ {result.toFixed(2)}</span>
      </p>
      <button className="bg-black text-white p-2 text-sm font-semibold uppercase">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSummary;

import { useEffect } from "react";
import { SearchComponent } from "../../shared/components";
import { useCart } from "../../shared/hooks/useCart";
import CartEmpty from "./components/CartEmpty";
import CartItems from "./components/CartItems";

const Cart = () => {
  const { cart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-10/12 mx-auto">
      <SearchComponent />
      <div className="">
        <h1 className="text-4xl font-bold">Cart</h1>
        <h3 className="text-sm font-semibold text-gray-500">/ Cart</h3>
      </div>
      {cart.length === 0 ? <CartEmpty /> : <CartItems />}
    </main>
  );
};

export default Cart;

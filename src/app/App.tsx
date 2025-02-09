import { RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";
import { AuthProvider } from "../shared/context/AuthContext";
import { CartProvider } from "../shared/context/CartContext";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

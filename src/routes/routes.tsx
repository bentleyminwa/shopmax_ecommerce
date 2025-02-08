import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { Cart, Home, Login, ProductDetails, Shop } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import {
  Cart,
  Custom404Page,
  Home,
  ProductDetails,
  Profile,
  Shop,
} from "../pages";
import ErrorComponent from "../shared/components/Error/ErrorComponent";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="product/:id"
        element={<ProductDetails />}
        errorElement={<ErrorComponent />}
      />
      <Route path="profile" element={<Profile />} />

      <Route path="*" element={<Custom404Page />} />
    </Route>
  )
);

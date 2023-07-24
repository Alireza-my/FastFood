import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  { path: "/cart", element: <Cart /> },
  { path: "/order", element: <CreateOrder /> },
  { path: "/order/:prderId", element: <Order /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
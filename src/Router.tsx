import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout, PageLoader } from "./components";
const Home = React.lazy(() => import("./pages/Home"));
const ProductList = React.lazy(() => import("./pages/products/List"));
const ProductSingle = React.lazy(
  () => import("./pages/products/ProductSingle")
);
const CartPage = React.lazy(() => import("./pages/cart/CartPage"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <ProductList />
          </React.Suspense>
        ),
      },
      {
        path: "/products/:productID",
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <ProductSingle />
          </React.Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <CartPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;

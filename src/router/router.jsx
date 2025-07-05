import { createBrowserRouter } from "react-router-dom";  
import RootLayout from "../components/routerLayout";
import App from "../pages/App";
import Cart from "../pages/cart";
import Details from "../pages/details";
import NotFoundPage from "../pages/not-found-page";
import About from "../pages/about";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,         
        element: <App />,
      },
      {
        path: "cart",          
        element: <Cart />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "about",
        element: <About />,
      },  
      {
        path: "*",               // Catch-all route for undefined paths
        element: <NotFoundPage />,
      },
    ],
  },
]);

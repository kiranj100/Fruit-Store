import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Favourite from "./components/Favourate/Favourite.jsx";
import All from "./components/Home/All.jsx";
import Cart from "./components/Shopping Cart/Cart.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<All />} />
      <Route path="favourite" element={<Favourite />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

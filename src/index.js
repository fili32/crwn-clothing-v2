import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartItemsProvider } from "./contexts/cart-items.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartItemsProvider>
            <App />
          </CartItemsProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

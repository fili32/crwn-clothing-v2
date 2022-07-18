import { useState, createContext } from "react";
import data from "../shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

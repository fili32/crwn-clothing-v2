import { useState, createContext } from "react";

export const CartItemsContext = createContext({
  cartItems: [],
  isOpen: false,
  setCartItems: () => null,
  setIsOpen: () => false,
});

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const addItemInCart = (product) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? setCartItems([{ ...cartItem, quantity: cartItem.quantity + 1 }])
          : null
      );
    } else {
      return setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeItemOfCart = (product, cartItems, setCartItems) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingCartItem) {
      return cartItems.map((cartItem, index) =>
        cartItem.id === product.id
          ? cartItem.quantity > 1
            ? setCartItems([{ ...cartItem, quantity: cartItem.quantity - 1 }])
            : setCartItems(cartItems.splice(index, 1))
          : null
      );
    }
  };
  const value = {
    cartItems,
    setCartItems,
    isOpen,
    setIsOpen,
    addItemInCart,
    removeItemOfCart,
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
};

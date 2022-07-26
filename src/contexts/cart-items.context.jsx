import { useState, createContext, useEffect } from "react";

const addItem = (product, cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...product, quantity: 1 }];
};
const deleteItem = (product, cartItems) => {
  if (product.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartItemsContext = createContext({
  cartItems: [],
  isOpen: false,
  setIsOpen: () => {},
  addItemInCart: () => {},
  removeItemOfCart: () => {},
  numberOfItems: 0,
  totalIs: 0,
});

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalIs, setTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (totalIs, cartItem) => totalIs + cartItem.quantity * cartItem.price,
      0
    );
    setTotal(total);
  }, [cartItems]);

  useEffect(() => {
    const getSum = (numberOfItems, item) => numberOfItems + item.quantity;
    const newNumberOfItems = cartItems.reduce(getSum, 0);
    setNumberOfItems(newNumberOfItems);
  }, [cartItems]);

  const addItemInCart = (product) => {
    setCartItems(addItem(product, cartItems));
  };
  const deleteItemOfCart = (product) => {
    setCartItems(deleteItem(product, cartItems));
  };
  const removeItemOfCart = (product) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setCartItems(newCartItems);
  };

  const value = {
    cartItems,
    setCartItems,
    isOpen,
    setIsOpen,
    addItemInCart,
    removeItemOfCart,
    deleteItemOfCart,
    numberOfItems,
    totalIs,
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
};

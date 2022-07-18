import { useContext, useState, useEffect } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartItemsContext } from "../../contexts/cart-items.context";

const CartIcon = () => {
  const { isOpen, setIsOpen, cartItems } = useContext(CartItemsContext);
  const toggleCart = () => setIsOpen(!isOpen);
  const [numberOfItems, setNumberOfItems] = useState(0);
  useEffect(() => {
    const getSum = (numberOfItems, item) => numberOfItems + item.quantity;
    const items = cartItems.reduce(getSum, 0);
    setNumberOfItems(items);
  }, [cartItems]);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{numberOfItems}</span>
    </div>
  );
};

export default CartIcon;

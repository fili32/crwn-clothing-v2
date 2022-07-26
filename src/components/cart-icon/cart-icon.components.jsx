import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartItemsContext } from "../../contexts/cart-items.context";

const CartIcon = () => {
  const { isOpen, setIsOpen, numberOfItems } = useContext(CartItemsContext);
  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{numberOfItems}</span>
    </div>
  );
};

export default CartIcon;

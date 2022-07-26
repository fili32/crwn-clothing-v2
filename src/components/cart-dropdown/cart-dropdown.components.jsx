import { useContext } from "react";
import { CartItemsContext } from "../../contexts/cart-items.context";

import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.components";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartItemsContext);
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button buttonType="google-sign-in" onClick={() => navigate("/checkout")}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;

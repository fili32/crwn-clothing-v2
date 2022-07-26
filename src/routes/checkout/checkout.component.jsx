import { useContext } from "react";
import { CartItemsContext } from "../../contexts/cart-items.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalIs } = useContext(CartItemsContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </tbody>
      </table>
      <span className="total">Total: ${totalIs}</span>
    </div>
  );
};

export default Checkout;

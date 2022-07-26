import { useContext } from "react";
import { CartItemsContext } from "../../contexts/cart-items.context";

import { FormClose, FormPrevious, FormNext } from "grommet-icons";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemOfCart, deleteItemOfCart, addItemInCart } =
    useContext(CartItemsContext);
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <tr>
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td className="quantity-container">
        <FormPrevious
          color="black"
          onClick={() => deleteItemOfCart(cartItem)}
        />
        <span className="quantity">{quantity}</span>
        <FormNext color="black" onClick={() => addItemInCart(cartItem)} />
      </td>
      <td>{quantity * price}</td>
      <td
        className="close-icon-container"
        onClick={() => removeItemOfCart(cartItem)}
      >
        <FormClose color="black" />
      </td>
    </tr>
  );
};

export default CheckoutItem;

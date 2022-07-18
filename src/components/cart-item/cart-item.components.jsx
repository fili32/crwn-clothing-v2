import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img className="item-image" src={imageUrl} alt={name} />
      <span className="item-description">
        <div className="item-name">{name}</div>
        <div className="item-price">
          {quantity} x ${price}
        </div>
      </span>
    </div>
  );
};

export default CartItem;

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img className="item-image" src={imageUrl} alt={name} />
      <div className="item-description">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import "./MiniCart.css";

const MiniCart = ({ cartItems }) => {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="mini-cart-container">
      <h3 className="mini-cart-title">Mini Cart ({totalQuantity} Items)</h3>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">No items in the cart.</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item.id + item.size} className="cart-item">
              <div className="cart-item-content">
                <div className="cart-item-image-container">
                  <img
                    src={item.imageURL}
                    alt={item.title}
                    className="cart-item-image"
                  />
                </div>
                <div className="cart-item-text">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <p className="cart-item-details">
                    Size: {item.size} &nbsp;|&nbsp; Price: ${item.price}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MiniCart;

import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({
  productData,
  selectedSize,
  onSizeSelect,
  onAddToCart,
}) => {
  if (!productData) return null;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(productData.price);

  const sizes = productData.sizeOptions;

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img
          src={productData.imageURL}
          alt={productData.title}
          className="product-image"
        />
      </div>
      <div className="product-info-container">
        <h2 className="product-title">{productData.title}</h2>
        <p className="product-description">{productData.description}</p>
        <p>Size *</p>
        <div className="size-options">
          {sizes.map((size) => (
            <button
              key={size.id}
              className={`size-button ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => onSizeSelect(size)}
            >
              {size.label}
            </button>
          ))}
        </div>
        <p className="product-price">
          Price: <span className="price-value">{formattedPrice}</span>
        </p>
        <button className="add-to-cart-button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

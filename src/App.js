import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./components/ProductDetails";
import MiniCart from "./components/MiniCart";
import "./App.css";

function App() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
      );
      setProductData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    if (productData) {
      const product = productData;

      if (product) {
        const existingItem = cartItems.find(
          (item) => item.id === product.id && item.size === selectedSize.label
        );
        if (existingItem) {
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.id === existingItem.id && item.size === existingItem.size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
        } else {
          setCartItems((prevItems) => [
            ...prevItems,
            { ...product, size: selectedSize.label, quantity: 1 },
          ]);
        }
      }
    }
  };

  return (
    <div className="app">
      <h1 className="header">
        <div className="cart-button-container">
          <button
            className="cart-button"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            My Cart ({cartItems.length} items){" "}
          </button>{" "}
        </div>
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {isShown && (
            <MiniCart className="cart-container" cartItems={cartItems} />
          )}
          <ProductDetails
            productData={productData}
            selectedSize={selectedSize}
            onSizeSelect={handleSizeSelect}
            onAddToCart={handleAddToCart}
          />
        </div>
      )}
    </div>
  );
}

export default App;

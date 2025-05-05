import React from "react";
import "./ProductsStyles.css";

function DiscountedProducts() {
  // Sample discounted products data
  const discountedProducts = [
    {
      id: 1,
      name: "Coffee Maker Deluxe",
      originalPrice: "149.99",
      salePrice: "99.99",
      discount: "33%",
      description: "Programmable coffee maker with built-in grinder",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      originalPrice: "79.99",
      salePrice: "49.99",
      discount: "38%",
      description: "Portable waterproof speaker with 20-hour battery life",
    },
    {
      id: 3,
      name: "Robot Vacuum",
      originalPrice: "299.99",
      salePrice: "199.99",
      discount: "33%",
      description: "Smart robot vacuum with mapping technology and app control",
    },
  ];

  return (
    <div className="product-category">
      <div className="category-header">
        <h3>🏷️ On Sale</h3>
        <p>Limited-time deals and special offers</p>
      </div>

      <div className="product-grid">
        {discountedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-badge sale">-{product.discount}</div>
            <div className="product-image placeholder"></div>
            <div className="product-details">
              <h4>{product.name}</h4>
              <div className="price-container">
                <p className="product-price-original">
                  {product.originalPrice}
                </p>
                <p className="product-price-sale">{product.salePrice}</p>
              </div>
              <p className="product-description">{product.description}</p>
              <button className="product-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscountedProducts;

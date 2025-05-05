import React from "react";
import "./ProductsStyles.css";

function FeaturedProducts() {
  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "129.99",
      description: "High-quality wireless headphones with noise cancellation",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: "249.99",
      description: "Advanced smartwatch with health monitoring features",
    },
    {
      id: 3,
      name: "Ultra HD Camera",
      price: "399.99",
      description: "Professional-grade camera with 4K video recording",
    },
  ];

  return (
    <div className="product-category">
      <div className="category-header">
        <h3>✨ Featured Products</h3>
        <p>Our most popular and highly-rated items</p>
      </div>

      <div className="product-grid">
        {featuredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-badge">Featured</div>
            <div className="product-image placeholder"></div>
            <div className="product-details">
              <h4>{product.name}</h4>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="product-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;

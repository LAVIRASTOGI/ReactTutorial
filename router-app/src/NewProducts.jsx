import React from "react";
import "./ProductsStyles.css";

function NewProducts() {
  // Sample new products data
  const newProducts = [
    {
      id: 1,
      name: "Air Purifier Plus",
      price: "199.99",
      description:
        "Next-generation air purifier with HEPA filter and silent operation",
      dateAdded: "2 days ago",
    },
    {
      id: 2,
      name: "Smart Home Hub",
      price: "149.99",
      description:
        "Central hub for all your smart home devices with voice control",
      dateAdded: "5 days ago",
    },
    {
      id: 3,
      name: "Fitness Tracker 5",
      price: "89.99",
      description:
        "Track your workouts, sleep, and health metrics with precision",
      dateAdded: "1 week ago",
    },
    {
      id: 4,
      name: "Wireless Earbuds Pro",
      price: "119.99",
      description:
        "Crystal clear audio with active noise cancellation and long battery life",
      dateAdded: "2 weeks ago",
    },
  ];

  return (
    <div className="product-category">
      <div className="category-header">
        <h3>🆕 New Arrivals</h3>
        <p>The latest additions to our inventory</p>
      </div>

      <div className="product-grid">
        {newProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-badge new">New</div>
            <div className="product-image placeholder"></div>
            <div className="product-details">
              <h4>{product.name}</h4>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-date">Added: {product.dateAdded}</p>
              <button className="product-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProducts;

import React from "react";
import { Link } from "react-router-dom";
import "./ProductsStyles.css";

function ProductIndex() {
  const categories = [
    {
      id: "featured",
      title: "Featured Products",
      description: "Our most popular and highly-rated items",
      icon: "✨",
      path: "/products/featured",
    },
    {
      id: "new",
      title: "New Arrivals",
      description: "The latest additions to our inventory",
      icon: "🆕",
      path: "/products/new",
    },
    {
      id: "discounted",
      title: "On Sale",
      description: "Limited-time deals and special offers",
      icon: "🏷️",
      path: "/products/discounted",
    },
  ];

  return (
    <div className="product-category">
      <div className="category-header">
        <h3>Browse Our Categories</h3>
        <p>Select a category to explore our products</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link to={category.path} key={category.id} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <h4>{category.title}</h4>
            <p>{category.description}</p>
            <div className="category-action">Browse {category.title} →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductIndex;

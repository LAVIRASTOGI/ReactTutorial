import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ProductsStyles.css";

function Products() {
  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Our Products</h2>
        <p>Discover our wide range of high-quality products</p>
      </div>

      <div className="products-nav">
        {/* /products/featured */}
        <Link to="featured" className="product-nav-item">
          <div className="product-nav-icon">✨</div>
          <span>Featured</span>
        </Link>

        <Link to="new" className="product-nav-item">
          <div className="product-nav-icon">🆕</div>
          <span>New Arrivals</span>
        </Link>

        <Link to="discounted" className="product-nav-item">
          <div className="product-nav-icon">🏷️</div>
          <span>On Sale</span>
        </Link>
      </div>

      <div className="products-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;

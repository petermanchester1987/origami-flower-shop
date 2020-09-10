import React from "react";
import "./App.css";
import data from "./data.js";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header>
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>

          <a href="index.html">Origami Flower Shop</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <aside className="sidebar">
        <h3 className="sidebar-menu-title">Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Small Bouquets</a>
          </li>

          <li>
            <a href="index.html">Large Bouquets</a>
          </li>

          <li>
            <a href="index.html">Buttonholes</a>
          </li>

          <li>
            <a href="index.html">Wedding Bouquets</a>
          </li>

          <li>
            <a href="index.html">Table Decoration</a>
          </li>

          <li>
            <a href="index.html">Art</a>
          </li>
        </ul>
      </aside>

      <main>
        <div className="content">
          <ul className="products">
            {data.products.map((product) => (
              <li>
                <div className="product">
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                  <div className="product-name">
                    <a href="product.html">{product.name}</a>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">£{product.price}</div>
                  <div className="product-rating">
                    {product.rating} Stars ({product.numReviews} Reviews)
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
}

export default App;

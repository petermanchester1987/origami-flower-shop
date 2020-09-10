import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import HomeScreen from "./Screens/HomeScreen.js";
import ProductScreen from "./Screens/ProductScreen.js";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>

            <Link to="/">Origami Flower Shop</Link>
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
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer>All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

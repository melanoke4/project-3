import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const CoursesSection = (props) => {
  console.log(props);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: "HTML5",
      cost: "$35.00",
      image: "./images/html.png",
    },
    { name: "CSS3", cost: "$45.00", image: "./images/css.png" },
    { name: "JavaScript", cost: "$55.00", image: "./images/java.png" },
  ]);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <h1 className="display-3 text-center">Front End Courses</h1>
      <div className="container">
        <div className="row">
          {products.map((product, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card mb-3">
                <div className="product" key={idx}>
                  <img
                    src={product.image}
                    alt={product.image}
                    className="card-img-top"
                    id="html"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <button
                      onClick={() => addToCart(product)}
                      className="learn"
                    >
                      <span>Add to Cart</span>
                    </button>
                    <h6 className="card-subtitle text-muted mb-2">
                      {product.cost}
                    </h6>
                    <ul className="card-text">
                      <li>Learn Web Development Essentials</li>
                      <li>Build Websites from Scratch</li>
                      <li>Lifetime Access</li>
                      <li>Downloadable Resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div>
      <div className="header">
        <Link to="/cart" className="cart-button">
          Go to Cart ({cart.length})
        </Link>
        <button
          onClick={() => navigateTo(PAGE_PRODUCTS)}
          className="cart-button"
        >
          Back to Courses
        </button>
      </div>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
};

export default CoursesSection;

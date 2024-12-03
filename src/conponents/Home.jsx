import React from 'react';
import './Home.css';

export const Home = ({ products }) => {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Static Product Cards */}
        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/71GLMJ7TQiL._SL1500_.jpg"
              alt="Static Product 1"
              className="product-img"
            />
            <h4 className="mt-3">Static Product 1</h4>
            <p>This is a short description for static product 1.</p>
            <p><strong>$49.99</strong></p>
            <button className="btn-custom">Add to Cart</button>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/610VHpcICiL._SL1200_.jpg"
              alt="Static Product 2"
              className="product-img"
            />
            <h4 className="mt-3">Static Product 2</h4>
            <p>This is a short description for static product 2.</p>
            <p><strong>$89.99</strong></p>
            <button className="btn-custom">Add to Cart</button>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61oCISLE+PL._SL1500_.jpg"
              alt="Static Product 3"
              className="product-img"
            />
            <h4 className="mt-3">Static Product 3</h4>
            <p>This is a short description for static product 3.</p>
            <p><strong>$79.99</strong></p>
            <button className="btn-custom">Add to Cart</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/611AaVzaCQL._SL1300_.jpg"
              alt="Static Product 3"
              className="product-img"
            />
            <h4 className="mt-3">Static Product 3</h4>
            <p>This is a short description for static product 3.</p>
            <p><strong>$79.99</strong></p>
            <button className="btn-custom">Add to Cart</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61eA9PkZ07L._SL1500_.jpg"
              alt="Static Product 3"
              className="product-img"
            />
            <h4 className="mt-3">Static Product 3</h4>
            <p>This is a short description for static product 3.</p>
            <p><strong>$79.99</strong></p>
            <button className="btn-custom">Add to Cart</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61XO4bORHUL._SL1500_.jpg"
              alt="Static Product 3"
              className="product-img"
            />
            <h4 className="mt-3">Static Product 3</h4>
            <p>This is a short description for static product 3.</p>
            <p><strong>$79.99</strong></p>
            <button className="btn-custom">Add to Cart</button>
          </div>
        </div>

        {/* Dynamically Rendered Product Cards */}
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                <h4 className="mt-3">{product.name}</h4>
                <p>{product.description}</p>
                <p><strong>${product.price}</strong></p>
                <button className="btn-custom">Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};




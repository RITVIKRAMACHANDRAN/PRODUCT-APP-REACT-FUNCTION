import React, { useState, useEffect } from 'react';
import Product from './Product';
import './styles.css'; // Import the CSS file at the top of your components


function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    // Simulate fetching data from an API or your data source
    // Replace this with your actual data fetching logic
    const mockData = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 19.99,
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 29.99,
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        price: 39.99,
      },
      // Add more products here
    ];
  
    // Simulate an API request delay (remove this in a real application)
    setTimeout(() => {
      setProducts(mockData);
    }, 1000);
  }, []);
  

  const addToCart = (productId) => {
    const updatedCart = { ...cart };
    updatedCart[productId] = (updatedCart[productId] || 0) + 1;
    setCart(updatedCart);
  };

  return (
    <div className="product-list">
      <h1>Product Listing</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          quantity={cart[product.id] || 0}
          addToCart={() => addToCart(product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;

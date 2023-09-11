import React, { useState, useEffect } from 'react';
import Product from './Product'; // Correct relative import path

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or any data source
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

  return (
    <div className="product-list">
      <h1>Product Listing</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

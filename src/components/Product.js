import React from 'react';

function Product({ product, quantity, addToCart }) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;

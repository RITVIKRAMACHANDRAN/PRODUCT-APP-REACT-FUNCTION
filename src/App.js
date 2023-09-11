import React from 'react';
import './App.css'; // You can import your CSS or styling here
import ProductList from './components/ProductList'; // Import the ProductList component

function App() {
  return (
    <div className="App">
      {/* Render the ProductList component */}
      <ProductList />
    </div>
  );
}

export default App;

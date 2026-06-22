import React, { useState } from 'react';
import ProductList from './ProductList'; // Assuming your product component is named ProductList
import './App.css'; // Optional: for styling the landing page

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleStartClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Your one-stop destination for beautiful, handpicked indoor and outdoor plants.</p>
            <button className="get-started-btn" onClick={handleStartClick}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;


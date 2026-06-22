import React, { useState } from 'react';
import './ProductList.css';

function ProductList() {
    // State to keep track of added items (e.g., { 'Snake Plant': true })
    const [addedToCart, setAddedToCart] = useState({});
    const [cartCount, setCartCount] = useState(0);

    // Mock plant data with multiple categories and unique items
    const categories = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", price: "$15", image: "https://unsplash.com" },
                { name: "Spider Plant", price: "$12", image: "https://unsplash.com" }
            ]
        },
        {
            category: "Aromatic Plants",
            plants: [
                { name: "Lavender", price: "$18", image: "https://unsplash.com" },
                { name: "Jasmine", price: "$20", image: "https://unsplash.com" }
            ]
        },
        {
            category: "Low Maintenance",
            plants: [
                { name: "Aloe Vera", price: "$10", image: "https://unsplash.com" },
                { name: "Cast Iron Plant", price: "$25", image: "https://unsplash.com" }
            ]
        }
    ];

    // Handle add to cart click event
    const handleAddToCart = (plantName) => {
        setAddedToCart((prevState) => ({
            ...prevState,
            [plantName]: true
        }));
        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <div className="product-list-container">
            {/* Navigation Bar Header Element */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <h2>Paradise Nursery</h2>
                </div>
                <div className="navbar-links">
                    <a href="#plants" className="nav-item">Plants</a>
                    <a href="#cart" className="nav-item cart-icon">
                        🛒 <span className="cart-badge">{cartCount}</span>
                    </a>
                </div>
            </nav>

            {/* Plants Categories and Grid System */}
            <div className="plants-display" id="plants">
                {categories.map((cat, index) => (
                    <div key={index} className="category-section">
                        <h2 className="category-title">{cat.category}</h2>
                        <div className="product-grid">
                            {cat.plants.map((plant, pIndex) => (
                                <div key={pIndex} className="product-card">
                                    <img src={plant.image} alt={plant.name} className="product-image" />
                                    <h3>{plant.name}</h3>
                                    <p className="product-price">{plant.price}</p>
                                    <button 
                                        className={`add-to-cart-btn ${addedToCart[] ? 'disabled' : ''}`}
                                        onClick={() => handleAddToCart(plant.name)}
                                        disabled={addedToCart[plant.name]}
                                    >
                                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;


import React from 'react';
import './CartItem.css';

function CartItem({ cartItems, setCartItems, onContinueShopping }) {
    
    // Calculates the total cost of all items in the cart
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = parseFloat(item.price.replace('$', ''));
            return total + (itemPrice * item.quantity);
        }, 0);
    };

    // Increments item quantity by 1
    const handleIncrement = (itemToIncrement) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.name === itemToIncrement.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrements item quantity by 1 (removes completely if quantity drops below 1)
    const handleDecrement = (itemToDecrement) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.name === itemToDecrement.name) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            }).filter(item => item.quantity > 0)
        );
    };

    // Completely deletes a plant type from the cart
    const handleRemove = (itemToRemove) => {
        setCartItems(prevItems => prevItems.filter(item => item.name !== itemToRemove.name));
    };

    // Mock checkout confirmation handler
    const handleCheckout = () => {
        alert("Thank you for your purchase! Checkout functionality coming soon.");
    };

    return (
        <div className="cart-container">
            {/* Total Cart Amount Display */}
            <h2 className="total-amount-header">
                Total Cart Amount: ${calculateTotalAmount().toFixed(2)}
            </h2>

            {/* List of individual plant items */}
            <div className="cart-items-list">
                {cartItems.map((item, index) => (
                    <div className="cart-item-card" key={index}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <h3 className="cart-item-name">{item.name}</h3>
                            <p className="cart-item-price">Unit Price: {item.price}</p>
                            
                            {/* Quantity Controls */}
                            <div className="cart-item-quantity-controls">
                                <button 
                                    className="quantity-btn decrement" 
                                    onClick={() => handleDecrement(item)}
                                >
                                    -
                                </button>
                                <span className="item-quantity-value">{item.quantity}</span>
                                <button 
                                    className="quantity-btn increment" 
                                    onClick={() => handleIncrement(item)}
                                >
                                    +
                                </button>
                            </div>
                            
                            {/* Remove Action Button */}
                            <button className="remove-item-btn" onClick={() => handleRemove(item)}>
                                Delete Item
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Actions */}
            <div className="cart-actions">
                <button className="continue-shopping-btn" onClick={onContinueShopping}>
                    Continue Shopping
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default CartItem;

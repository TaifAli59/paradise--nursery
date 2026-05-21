import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Thank you for shopping at Paradise Nursery.');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">🌿 Paradise Nursery</span>
        <div className="navbar-links">
          <button onClick={onContinueShopping}>Home</button>
          <button onClick={onContinueShopping}>Plants</button>
          <button className="cart-icon-btn">
            🛒
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </nav>

      <div className="cart-page">
        <h1>🛒 Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty 🌱</p>
            <button className="continue-btn" onClick={onContinueShopping}>
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="cart-item-controls">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>
                  <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                    {item.quantity}
                  </span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <h2>Total Amount: ${totalCost.toFixed(2)}</h2>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
              <button className="continue-btn" onClick={onContinueShopping}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;

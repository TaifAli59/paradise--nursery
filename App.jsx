import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

const store = configureStore({
  reducer: { cart: cartReducer },
});

function AppContent() {
  const [page, setPage] = useState('landing'); // 'landing' | 'products' | 'cart'

  return (
    <div>
      {page === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>🌿 Paradise Nursery</h1>
            <p>Bring nature indoors — discover our curated houseplant collection</p>
            <button
              className="get-started-btn"
              onClick={() => setPage('products')}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {page === 'products' && (
        <ProductList onCartClick={() => setPage('cart')} />
      )}

      {page === 'cart' && (
        <CartItem onContinueShopping={() => setPage('products')} />
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;

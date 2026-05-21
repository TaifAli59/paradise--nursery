import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsData = [
  // ── Air Purifying Plants ──
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Peace Lily', price: 12.99, image: 'https://images.unsplash.com/photo-1599598425947-5202edd56fdf?w=400' },
      { id: 2, name: 'Spider Plant', price: 8.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
      { id: 3, name: 'Snake Plant', price: 14.99, image: 'https://images.unsplash.com/photo-1620803366004-119b57f54cd6?w=400' },
      { id: 4, name: 'Aloe Vera', price: 9.99, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400' },
      { id: 5, name: 'Boston Fern', price: 11.99, image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400' },
      { id: 6, name: 'Bamboo Palm', price: 18.99, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400' },
    ],
  },
  // ── Tropical Plants ──
  {
    category: 'Tropical Plants',
    plants: [
      { id: 7, name: 'Monstera Deliciosa', price: 24.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
      { id: 8, name: 'Bird of Paradise', price: 34.99, image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=400' },
      { id: 9, name: 'Fiddle Leaf Fig', price: 29.99, image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400' },
      { id: 10, name: 'Philodendron', price: 16.99, image: 'https://images.unsplash.com/photo-1599598425947-5202edd56fdf?w=400' },
      { id: 11, name: 'Calathea', price: 19.99, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400' },
      { id: 12, name: 'Alocasia Zebrina', price: 22.99, image: 'https://images.unsplash.com/photo-1567225477277-c8162eb4b75e?w=400' },
    ],
  },
  // ── Succulents & Cacti ──
  {
    category: 'Succulents & Cacti',
    plants: [
      { id: 13, name: 'Echeveria', price: 6.99, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400' },
      { id: 14, name: 'Jade Plant', price: 10.99, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
      { id: 15, name: 'Barrel Cactus', price: 13.99, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400' },
      { id: 16, name: 'String of Pearls', price: 15.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
      { id: 17, name: 'Haworthia', price: 7.99, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400' },
      { id: 18, name: 'Prickly Pear', price: 11.99, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400' },
    ],
  },
];

function ProductList({ onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">🌿 Paradise Nursery</span>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Plants</a>
          <button className="cart-icon-btn" onClick={onCartClick}>
            🛒
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </nav>

      {/* Products */}
      <div className="product-page">
        <h1>🌱 Our Plant Collection</h1>
        {plantsData.map((group) => (
          <div key={group.category} className="category-section">
            <h2>{group.category}</h2>
            <div className="plants-grid">
              {group.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-card-body">
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAdd(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
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

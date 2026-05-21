import React from 'react';

function AboutUs() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', fontFamily: 'Georgia, serif' }}>
      <h1 style={{ color: '#2d6a4f', fontSize: '2.5rem', marginBottom: '20px' }}>
        🌿 About Paradise Nursery
      </h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
        Welcome to <strong>Paradise Nursery</strong> — your premier destination for beautiful, 
        healthy houseplants. Founded in 2020, we are passionate about bringing nature indoors 
        and helping people create their own green sanctuaries.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
        Our carefully curated collection features plants from around the world, each selected 
        for its beauty, air-purifying qualities, and ease of care. Whether you're a seasoned 
        plant enthusiast or just starting your journey, we have the perfect plant for you.
      </p>
      <h2 style={{ color: '#2d6a4f', marginTop: '30px' }}>Our Mission</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
        To make the world greener, one plant at a time. We believe every home deserves 
        a touch of nature, and we're here to make that possible with high-quality plants 
        at affordable prices.
      </p>
      <div style={{ 
        display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap' 
      }}>
        {[
          { icon: '🌱', title: 'Quality Plants', desc: 'Hand-selected for health and beauty' },
          { icon: '🚚', title: 'Fast Delivery', desc: 'Safe packaging, quick shipping' },
          { icon: '💚', title: 'Expert Care', desc: 'Tips and guides for every plant' },
        ].map((item) => (
          <div key={item.title} style={{
            background: '#f0fdf4', borderRadius: '12px', padding: '20px',
            flex: '1', minWidth: '180px', textAlign: 'center',
            border: '1px solid #bbf7d0'
          }}>
            <div style={{ fontSize: '2rem' }}>{item.icon}</div>
            <h3 style={{ color: '#2d6a4f', margin: '10px 0 6px' }}>{item.title}</h3>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;

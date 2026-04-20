import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const products = [
  { emoji: '🧼', name: 'Lavender Calm Soap', desc: 'Calming tallow soap infused with organic lavender essential oils. Perfect for anxious pets with sensitive skin.', price: '$24.99', stars: '★★★★★', count: 142, badge: 'Bestseller', bg: 'sage-bg' },
  { emoji: '🍯', name: 'Oatmeal Honey Soap', desc: 'Gentle oatmeal formula with clover honey. Specially crafted for sensitive coats and dry, irritated skin.', price: '$22.99', stars: '★★★★½', count: 98, badge: 'Popular', bg: 'yellow-bg' },
  { emoji: '🐾', name: 'Healing Paw Balm', desc: 'Intensive paw repair. Repairs cracked paws and dry crevice problems for happy, comfortable paws everyday.', price: '$18.99', stars: '★★★★★', count: 207, badge: 'New', bg: 'coral-bg' },
  { emoji: '🌱', name: 'Eucalyptus Fresh Soap', desc: 'Refreshing eucalyptus tallow soap with natural deodorising properties. Leaves coats shiny and clean.', price: '$26.99', stars: '★★★★★', count: 76, badge: 'Fresh', bg: 'mint-bg' },
  { emoji: '🌹', name: 'Rosemary Shine Shampoo', desc: 'Stimulating rosemary tallow shampoo that promotes healthy coat growth and adds brilliant, lustrous shine.', price: '$28.99', stars: '★★★★★', count: 134, badge: 'Loved', bg: 'rose-bg' },
  { emoji: '✨', name: 'Complete Care Bundle', desc: "Our best-selling starter kit — everything you need for a full, natural skincare routine for your beloved pet.", price: '$59.99', stars: '★★★★★', count: 415, badge: 'Best Value', bg: 'sky-bg' },
];

export default function Products({ showToast }) {
  const [cartStates, setCartStates] = useState({});

  useScrollReveal();

  const handleAddToCart = (index) => {
    setCartStates((prev) => ({ ...prev, [index]: true }));
    showToast?.('Added to cart! 🎉');
    setTimeout(() => {
      setCartStates((prev) => ({ ...prev, [index]: false }));
    }, 2200);
  };

  return (
    <section className="products-bg section-padding page-top">
      <span className="section-tag sr">Our Collection</span>
      <h2 className="section-title sr sr-delay-1">Premium Products</h2>
      <p className="section-sub sr sr-delay-2">
        Handcrafted with love, formulated with science. Each product is designed
        to heal and protect your pet's skin naturally.
      </p>

      <div className="products-grid">
        {products.map((p, i) => (
          <div
            key={p.name}
            className={`product-card sr sr-delay-${i + 1}`}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const cx = rect.left + rect.width / 2;
              const cy = rect.top + rect.height / 2;
              const dx = (e.clientX - cx) / (rect.width / 2);
              const dy = (e.clientY - cy) / (rect.height / 2);
              e.currentTarget.style.transform = `translateY(-8px) perspective(600px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg) scale(1.01)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
            }}
          >
            <div className={`product-img-wrap ${p.bg}`}>
              <span className="product-badge">{p.badge}</span>
              <span className="product-emoji">{p.emoji}</span>
            </div>
            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="product-footer">
                <span className="price">{p.price}</span>
                <div>
                  <span className="stars">{p.stars}</span>
                  <span className="rating-count">({p.count})</span>
                </div>
              </div>
              <button
                className="btn-cart"
                style={cartStates[i] ? { background: 'var(--color-sage)' } : {}}
                onClick={() => handleAddToCart(i)}
              >
                {cartStates[i] ? '✓ Added!' : '🛒 Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrap sr">
        <Link to="/products" className="btn-outline">
          View All Products →
        </Link>
      </div>
    </section>
  );
}

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{ boxShadow: shadow ? '0 4px 32px rgba(42,35,24,.08)' : 'none' }}
    >
      <Link to="/" className="logo">
        Tallow <span style={{ color: 'var(--color-sage)' }}>&amp;</span> Care.
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/why-tallow">Why Tallow</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/mission">Mission</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-right">
        {/* Search */}
        <svg viewBox="0 0 24 24" strokeWidth="1.8">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        {/* User */}
        <svg viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        {/* Cart */}
        <svg viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <button className="btn-login" onClick={() => navigate('/contact')}>Login</button>
      </div>
    </nav>
  );
}

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/logo.png" alt="Logo" className="logo-img" style={{ height: '40px', width: 'auto' }} />
        {/* <span>Tallow <span style={{ color: 'var(--color-sage)' }}>&amp;</span> Care.</span> */}
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#why-tallow" onClick={() => setMenuOpen(false)}>Why Tallow</a></li>
        <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
        <li><a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        
        <div className="auth-mobile">
          <a href="#login" className="nav-login-link" onClick={() => setMenuOpen(false)}>Login</a>
          <a href="#signup" className="btn-login" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', color: '#fff' }} onClick={() => setMenuOpen(false)}>Sign Up</a>
        </div>
      </ul>

      <div className="nav-right">
        {/* Search */}
        <svg viewBox="0 0 24 24" strokeWidth="1.8" className="nav-icon-desktop">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        {/* User */}
        <svg viewBox="0 0 24 24" strokeWidth="1.8" className="nav-icon-desktop">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        {/* Cart */}
        <svg viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        
        <div className="auth-desktop">
          <a href="#login" className="nav-login-link">Login</a>
          <a href="#signup" className="btn-login" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Sign Up</a>
        </div>
        
        {/* Hamburger Menu Icon */}
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

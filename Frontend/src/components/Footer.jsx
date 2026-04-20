import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid sr">
        <div className="footer-brand">
          <Link to="/" className="logo" style={{ color: '#fff' }}>
            Tallow <span style={{ color: 'var(--color-sage)' }}>&amp;</span> Care.
          </Link>
          <p>
            Healing your pet's skin naturally. Premium tallow-based pet care
            products crafted with love, science, and sustainable practices.
          </p>
          <div className="footer-social">
            <a href="#" className="social-btn">f</a>
            <a href="#" className="social-btn">in</a>
            <a href="#" className="social-btn">𝕏</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/products">Dog Soap</Link></li>
            <li><Link to="/products">Cat Soap</Link></li>
            <li><Link to="/products">Healing Balms</Link></li>
            <li><Link to="/products">Bundles</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>About Us</h4>
          <ul>
            <li><Link to="/mission">Our Story</Link></li>
            <li><Link to="/mission">Mission</Link></li>
            <li><Link to="/mission">Sustainability</Link></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Tallow & Care. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  );
}

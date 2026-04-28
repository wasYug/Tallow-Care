import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact({ showToast }) {
  const [submitted, setSubmitted] = useState(false);

  useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast?.("Message sent! We'll be in touch 🐾");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-section section-padding page-top">
      <div className="contact-grid">
        {/* LEFT */}
        <div className="contact-left sr from-left">
          <span className="section-tag" style={{ textAlign: 'left' }}>
            Get In Touch
          </span>
          <h2>Let's Talk About Your Pet's Needs</h2>
          <p>
            Have questions about our products? Need personalised recommendations?
            Our pet care experts are here to help you find the perfect solution
            for your furry friend.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+1 (800) 123-4567<br />Mon–Fri, 9am–6pm EST</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email Us</h4>
                <p>hello@tallowcare.com<br />We reply within 24 hours</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Natural Way, Austin, TX 78701<br />Open Mon–Sat, 10am–5pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <form className="contact-form sr from-right" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Jane" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" required />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="jane@example.com" required />
          </div>
          <div className="form-group">
            <label>Select your pet</label>
            <select>
              <option>🐕 Dog</option>
              <option>🐈 Cat</option>
              <option>🐇 Rabbit</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea placeholder="Tell us about your pet and what you're looking for..." />
          </div>
          <div className="form-checkbox">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
              I'd love to receive news about new products, pet care tips, and
              special offers.
            </label>
          </div>
          <button
            type="submit"
            className="btn-submit"
            style={submitted ? { background: 'var(--color-sage)' } : {}}
          >
            {submitted ? '✓ Message Sent!' : 'Send Message ✉️'}
          </button>
        </form>
      </div>
    </section>
  );
}

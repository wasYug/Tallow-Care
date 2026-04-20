import { Link } from 'react-router-dom';
import ParticleCanvas from '../components/ParticleCanvas';
import Marquee from '../components/Marquee';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <ParticleCanvas />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />

        <div className="hero-text">
          <div className="hero-label">Natural Pet Care</div>
          <h1 className="hero-title">
            Healing skin,<br />
            <em>naturally.</em>
          </h1>
          <p className="hero-desc">
            We know how to treat them right. Skip the harsh chemicals and hello
            to soothing, natural tallow soap designed specifically for your
            pet's sensitive skin.
          </p>
          <div className="hero-ctas">
            <Link to="/products" className="btn-primary">
              🛒 Shop Collection
            </Link>
            <span className="badge">🐾 Happy Pets</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dog-circle">
            <video autoPlay loop muted playsInline>
              <source src="/final_Tallow_Care_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />
    </>
  );
}

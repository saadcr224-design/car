import { brand } from '../data/site';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <video className="hero-video" src="/videos/hero.mp4" poster="/videos/hero-poster.jpg" autoPlay muted loop playsInline />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-eyebrow anim-fade" style={{ animationDelay: '0.2s' }}>
          Premium Car Showroom · Since 2001
        </span>
        <h1 className="anim-up" style={{ animationDelay: '0.4s' }}>
          {brand.tagline.split(' ').slice(0, -1).join(' ')} <span className="accent">{brand.tagline.split(' ').slice(-1)}</span>
        </h1>
        <p className="anim-up" style={{ animationDelay: '0.6s' }}>
          Discover hand-picked SUVs, sedans, sports, electric and luxury cars — with transparent pricing and a team that cares.
        </p>
        <div className="hero-actions anim-up" style={{ animationDelay: '0.8s' }}>
          <a href="#collection" className="btn btn-primary">Explore Collection</a>
          <a href="#offers" className="btn btn-ghost">View Offers</a>
        </div>
      </div>
      <a href="#collection" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}

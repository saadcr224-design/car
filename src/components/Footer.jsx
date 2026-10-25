import { brand, navLinks, categories } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="logo"><span className="logo-mark">V</span><span>{brand.name}</span></a>
          <p>{brand.tagline}. Premium cars, honest service and a showroom experience you'll remember.</p>
        </div>
        <div>
          <h4>Explore</h4>
          {navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </div>
        <div>
          <h4>Categories</h4>
          {categories.filter((c) => c.id !== 'all').map((c) => <a key={c.id} href="#collection">{c.label}</a>)}
        </div>
        <div>
          <h4>Contact</h4>
          <span>{brand.phone}</span>
          <span>{brand.email}</span>
          <span>{brand.hours}</span>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
    </footer>
  );
}

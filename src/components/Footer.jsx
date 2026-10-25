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
      <div className="container copyright">
        <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <a href="#admin" className="admin-link" title="Admin portal" aria-label="Admin portal">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path fill="currentColor" d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm-3 8V6a3 3 0 1 1 6 0v3H9Zm3 4a2 2 0 0 1 1 3.73V19h-2v-2.27A2 2 0 0 1 12 13Z" />
          </svg>
          Admin
        </a>
      </div>
    </footer>
  );
}

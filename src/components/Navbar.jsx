import { useEffect, useState } from 'react';
import { brand, navLinks } from '../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = 'home';
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">V</span>
          <span>{brand.name}</span>
        </a>
        <nav className="nav-links">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Book Test Drive
          </a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

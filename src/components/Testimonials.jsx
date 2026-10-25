import { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { testimonials } from '../data/site';

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionTitle eyebrow="Testimonials" title="What Our Drivers Say" />
        <div className="testimonial" key={i}>
          <div className="stars">★★★★★</div>
          <p>“{t.text}”</p>
          <strong>{t.name}</strong>
          <span>Drives a {t.car}</span>
        </div>
        <div className="dots">
          {testimonials.map((_, n) => (
            <button key={n} aria-label={`Testimonial ${n + 1}`} className={n === i ? 'active' : ''} onClick={() => setI(n)} />
          ))}
        </div>
      </div>
    </section>
  );
}

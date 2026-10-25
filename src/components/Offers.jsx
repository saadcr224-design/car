import { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { useSiteData } from '../store';

// Offers run until the end of the current month.
function useCountdown() {
  const end = new Date();
  end.setMonth(end.getMonth() + 1, 1);
  end.setHours(0, 0, 0, 0);
  const calc = () => Math.max(0, end.getTime() - Date.now());
  const [left, setLeft] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setLeft(calc()), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const s = Math.floor(left / 1000);
  return { Days: Math.floor(s / 86400), Hours: Math.floor((s % 86400) / 3600), Mins: Math.floor((s % 3600) / 60), Secs: s % 60 };
}

export default function Offers() {
  const time = useCountdown();
  const { offers } = useSiteData();
  return (
    <section id="offers" className="offers">
      <video className="bg-video" src="/videos/showcase.mp4" poster="/videos/showcase-poster.jpg" autoPlay muted loop playsInline />
      <div className="offers-overlay" />
      <div className="container offers-inner">
        <SectionTitle
          light
          eyebrow="Exclusive Offers"
          title="This Month's Best Deals"
          text="Visit any of our showrooms before the timer runs out and drive away with more."
        />
        <Reveal className="countdown">
          {Object.entries(time).map(([k, v]) => (
            <div key={k}>
              <strong>{String(v).padStart(2, '0')}</strong>
              <span>{k}</span>
            </div>
          ))}
        </Reveal>
        <div className="offer-grid">
          {offers.map((o, i) => (
            <Reveal className="offer" key={o.id} delay={i * 130}>
              {o.image && (
                <div className="offer-img">
                  <img src={o.image} alt={o.title} loading="lazy" onError={(e) => (e.currentTarget.parentElement.style.display = 'none')} />
                </div>
              )}
              <span className="offer-tag">{o.tag}</span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
              <div className="offer-place">
                <span>📍 {o.place}</span>
                <a href="#locations">See on map →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

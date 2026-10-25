import { useState } from 'react';
import Reveal from './Reveal';
import { ceo } from '../data/site';

export default function CeoMessage() {
  const [failed, setFailed] = useState(false);
  return (
    <section id="ceo" className="section">
      <div className="container ceo">
        <Reveal className="ceo-portrait" from="left">
          <div className="ceo-avatar">
            {ceo.photo && !failed ? <img src={ceo.photo} alt={ceo.name} onError={() => setFailed(true)} /> : <span>{ceo.initials}</span>}
          </div>
          <div className="ceo-ring" />
        </Reveal>
        <Reveal className="ceo-text" from="right" delay={150}>
          <span className="eyebrow">Message from our CEO</span>
          <blockquote>
            <span className="quote-mark">“</span>
            {ceo.message.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </blockquote>
          <div className="signature">
            <strong>{ceo.name}</strong>
            <span>{ceo.title}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

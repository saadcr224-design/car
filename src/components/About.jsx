import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { vision } from '../data/site';

const icons = ['◎', '⚡', '↗', '✦'];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle eyebrow="Who We Are" title="Our Vision & Goals" />
        {vision.image && (
          <Reveal className="vm-banner">
            <img src={vision.image} alt="Customer receiving a new car at our showroom" loading="lazy" onError={(e) => (e.currentTarget.parentElement.style.display = 'none')} />
            <div className="vm-banner-text">
              <strong>25 years</strong>
              <span>of putting drivers first</span>
            </div>
          </Reveal>
        )}
        <div className="vm-grid">
          <Reveal className="vm-card" from="left">
            <span className="vm-label">Our Vision</span>
            <p>{vision.vision}</p>
          </Reveal>
          <Reveal className="vm-card dark" from="right" delay={120}>
            <span className="vm-label">Our Mission</span>
            <p>{vision.mission}</p>
          </Reveal>
        </div>
        <div className="goals">
          {vision.goals.map((g, i) => (
            <Reveal className="goal" key={g.title} delay={i * 110}>
              <span className="goal-icon">{icons[i % icons.length]}</span>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

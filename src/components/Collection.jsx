import { useMemo, useState } from 'react';
import SectionTitle from './SectionTitle';
import CarArt from './CarArt';
import { categories, cars } from '../data/site';

const money = (n) => '$' + n.toLocaleString();

export default function Collection({ onEnquire }) {
  const [cat, setCat] = useState('all');
  const list = useMemo(() => (cat === 'all' ? cars : cars.filter((c) => c.category === cat)), [cat]);

  return (
    <section id="collection" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Our Collection"
          title="Find Your Perfect Drive"
          text="Browse our showroom by category — every car is inspected, certified and ready for a test drive."
        />
        <div className="tabs" role="tablist">
          {categories.map((c) => {
            const count = c.id === 'all' ? cars.length : cars.filter((x) => x.category === c.id).length;
            return (
              <button key={c.id} role="tab" aria-selected={cat === c.id} className={`tab ${cat === c.id ? 'active' : ''}`} onClick={() => setCat(c.id)}>
                {c.label} <small>{count}</small>
              </button>
            );
          })}
        </div>
        <div className="car-grid" key={cat}>
          {list.map((car, i) => (
            <article className="car-card" key={car.id} style={{ animationDelay: `${i * 70}ms` }}>
              <div className="car-media" style={{ '--tint': car.color }}>
                {car.badge && <span className="badge">{car.badge}</span>}
                {car.image ? <img src={car.image} alt={car.name} loading="lazy" /> : <CarArt shape={car.shape} color={car.color} />}
              </div>
              <div className="car-body">
                <div className="car-head">
                  <div>
                    <span className="car-cat">{categories.find((c) => c.id === car.category)?.label} · {car.year}</span>
                    <h3>{car.name}</h3>
                  </div>
                  <span className="price">
                    <small>from</small>
                    {money(car.price)}
                  </span>
                </div>
                <ul className="specs">
                  <li><b>{car.power}</b>Power</li>
                  <li><b>{car.speed.replace('0-100 in ', '')}</b>0-100 km/h</li>
                  <li><b>{car.seats}</b>Seats</li>
                </ul>
                <div className="car-foot">
                  <span className="fuel">{car.fuel}</span>
                  <button className="link-btn" onClick={() => onEnquire(car.name)}>
                    Enquire →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

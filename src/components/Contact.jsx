import { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { brand, cars, locations } from '../data/site';

export default function Contact({ carName }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', car: '', showroom: locations[0].name, date: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (carName) setForm((f) => ({ ...f, car: carName }));
  }, [carName]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Hook this up to your backend / email service.
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <Reveal className="contact-info" from="left">
          <SectionTitle eyebrow="Get in Touch" title="Book a Test Drive" />
          <p>Tell us which car you love and when you'd like to visit. Our team will confirm within one business hour.</p>
          <ul>
            <li><span>☎</span>{brand.phone}</li>
            <li><span>✉</span>{brand.email}</li>
            <li><span>⏱</span>{brand.hours}</li>
          </ul>
        </Reveal>
        <Reveal className="contact-form" from="right" delay={120}>
          {sent ? (
            <div className="sent">
              <div className="check">✓</div>
              <h3>Thank you, {form.name.split(' ')[0] || 'driver'}!</h3>
              <p>Your request{form.car ? ` for the ${form.car}` : ''} has been received. We'll be in touch shortly.</p>
              <button className="btn btn-primary" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="row">
                <label>Full name<input required value={form.name} onChange={set('name')} placeholder="John Doe" /></label>
                <label>Phone<input required type="tel" value={form.phone} onChange={set('phone')} placeholder="+1 555 000 000" /></label>
              </div>
              <label>Email<input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" /></label>
              <div className="row">
                <label>
                  Car
                  <select value={form.car} onChange={set('car')}>
                    <option value="">Any / Not sure</option>
                    {cars.map((c) => <option key={c.id}>{c.name}</option>)}
                  </select>
                </label>
                <label>
                  Showroom
                  <select value={form.showroom} onChange={set('showroom')}>
                    {locations.map((l) => <option key={l.id}>{l.name}</option>)}
                  </select>
                </label>
              </div>
              <label>Preferred date<input type="date" value={form.date} onChange={set('date')} min={new Date().toISOString().slice(0, 10)} /></label>
              <label>Message<textarea rows="3" value={form.message} onChange={set('message')} placeholder="Anything we should know?" /></label>
              <button className="btn btn-primary full" type="submit">Request Test Drive</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

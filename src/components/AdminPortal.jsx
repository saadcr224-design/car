import { useState } from 'react';
import { brand, categories } from '../data/site';
import { useSiteData } from '../store';

// Note: this password check runs in the browser, so it keeps casual visitors out
// but is not real security. Use a backend login for anything sensitive.
const ADMIN_PASSWORD = '76785';
const SESSION_KEY = 'vm-admin';

const blankCar = { name: '', category: 'suv', shape: 'suv', color: '#e63946', price: 0, year: new Date().getFullYear(), power: '', speed: '', fuel: 'Petrol', seats: 5, badge: '', image: '' };
const blankOffer = { tag: '', title: '', text: '', place: '', image: '' };
const shapeFor = { suv: 'suv', sedan: 'sedan', sports: 'sports', electric: 'sedan', luxury: 'sedan', hatchback: 'hatch' };

const isLoggedIn = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
};

// Shrinks an uploaded photo so it fits comfortably in browser storage.
function resizeImage(file, max = 1000) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function Login({ onLogin }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* ignore */
      }
      onLogin();
    } else {
      setError('Wrong password. Please try again.');
      setPw('');
    }
  };
  return (
    <div className="admin-login">
      <form className="admin-login-card" onSubmit={submit}>
        <span className="logo-mark">V</span>
        <h1>Admin Portal</h1>
        <p>{brand.name}</p>
        <label>
          Password
          <input type="password" inputMode="numeric" autoFocus value={pw} onChange={(e) => { setPw(e.target.value); setError(''); }} placeholder="Enter admin password" />
        </label>
        {error && <span className="admin-error">{error}</span>}
        <button className="btn btn-primary full" type="submit">Log in</button>
        <a href="#home" className="admin-back">← Back to website</a>
      </form>
    </div>
  );
}

function ImageField({ value, onChange }) {
  const [busy, setBusy] = useState(false);
  const upload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      onChange(await resizeImage(file));
    } finally {
      setBusy(false);
      e.target.value = '';
    }
  };
  return (
    <div className="admin-image-field">
      {value ? <img key={value} src={value} alt="" onError={hideBroken} /> : <div className="admin-image-empty">No photo</div>}
      <div>
        <label>
          Photo URL
          <input value={value.startsWith('data:') ? '' : value} onChange={(e) => onChange(e.target.value)} placeholder={value.startsWith('data:') ? 'Uploaded photo' : 'https://…'} />
        </label>
        <label className="btn btn-ghost-dark small">
          {busy ? 'Uploading…' : 'Upload photo'}
          <input type="file" accept="image/*" hidden onChange={upload} />
        </label>
        {value && <button type="button" className="admin-text-btn" onClick={() => onChange('')}>Remove photo</button>}
      </div>
    </div>
  );
}

function CarEditor({ car, onSave, onCancel }) {
  const [form, setForm] = useState({ ...blankCar, ...car });
  const set = (k, transform = (v) => v) => (e) => setForm({ ...form, [k]: transform(e.target.value) });
  const save = (e) => {
    e.preventDefault();
    onSave({ ...form, shape: shapeFor[form.category] || 'sedan', price: Number(form.price) || 0, year: Number(form.year) || form.year, seats: Number(form.seats) || form.seats });
  };
  return (
    <form className="admin-editor" onSubmit={save}>
      <h3>{car.id ? `Edit ${car.name}` : 'Add new car'}</h3>
      <ImageField value={form.image || ''} onChange={(image) => setForm({ ...form, image })} />
      <div className="admin-fields">
        <label>Name<input required value={form.name} onChange={set('name')} /></label>
        <label>
          Category
          <select value={form.category} onChange={set('category')}>
            {categories.filter((c) => c.id !== 'all').map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </label>
        <label>Price ($)<input required type="number" min="0" value={form.price} onChange={set('price')} /></label>
        <label>Year<input type="number" value={form.year} onChange={set('year')} /></label>
        <label>Power<input value={form.power} onChange={set('power')} placeholder="300 hp" /></label>
        <label>0-100 time<input value={form.speed} onChange={set('speed')} placeholder="0-100 in 5.9s" /></label>
        <label>Fuel<input value={form.fuel} onChange={set('fuel')} placeholder="Petrol / Hybrid / Electric" /></label>
        <label>Seats<input type="number" min="1" value={form.seats} onChange={set('seats')} /></label>
        <label>Badge<input value={form.badge || ''} onChange={set('badge')} placeholder="New, Hot… (optional)" /></label>
        <label>Accent colour<input type="color" value={form.color} onChange={set('color')} /></label>
      </div>
      <div className="admin-actions">
        <button type="button" className="btn btn-ghost-dark" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn btn-primary">Save car</button>
      </div>
    </form>
  );
}

function OfferEditor({ offer, onSave, onCancel }) {
  const [form, setForm] = useState({ ...blankOffer, ...offer });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <form className="admin-editor" onSubmit={(e) => { e.preventDefault(); onSave(form); }}>
      <h3>{offer.id ? 'Edit offer' : 'Add new offer'}</h3>
      <ImageField value={form.image || ''} onChange={(image) => setForm({ ...form, image })} />
      <div className="admin-fields">
        <label>Tag<input value={form.tag} onChange={set('tag')} placeholder="Limited Time" /></label>
        <label>Title<input required value={form.title} onChange={set('title')} /></label>
        <label className="wide">Description<textarea rows="3" value={form.text} onChange={set('text')} /></label>
        <label className="wide">Showroom / place<input value={form.place} onChange={set('place')} placeholder="Downtown Flagship" /></label>
      </div>
      <div className="admin-actions">
        <button type="button" className="btn btn-ghost-dark" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn btn-primary">Save offer</button>
      </div>
    </form>
  );
}

const hideBroken = (e) => (e.currentTarget.style.visibility = 'hidden');

const nextId = (list) => Math.max(0, ...list.map((x) => Number(x.id) || 0)) + 1;

function CarsTab() {
  const { cars, setCars } = useSiteData();
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState('all');
  const save = (car) => {
    setCars(car.id ? cars.map((c) => (c.id === car.id ? car : c)) : [...cars, { ...car, id: nextId(cars) }]);
    setEditing(null);
  };
  const remove = (car) => {
    if (window.confirm(`Delete ${car.name}?`)) setCars(cars.filter((c) => c.id !== car.id));
  };
  if (editing) return <CarEditor car={editing} onSave={save} onCancel={() => setEditing(null)} />;
  const list = filter === 'all' ? cars : cars.filter((c) => c.category === filter);
  return (
    <>
      <div className="admin-toolbar">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
        <button className="btn btn-primary" onClick={() => setEditing({ ...blankCar })}>+ Add car</button>
      </div>
      <div className="admin-list">
        {list.map((c) => (
          <div className="admin-row" key={c.id}>
            {c.image ? <img src={c.image} alt="" onError={hideBroken} /> : <div className="admin-thumb" style={{ background: c.color }} />}
            <div className="admin-row-main">
              <strong>{c.name}</strong>
              <span>{categories.find((x) => x.id === c.category)?.label} · {c.year} · ${Number(c.price).toLocaleString()}</span>
            </div>
            <div className="admin-row-actions">
              <button className="admin-text-btn" onClick={() => setEditing(c)}>Edit</button>
              <button className="admin-text-btn danger" onClick={() => remove(c)}>Delete</button>
            </div>
          </div>
        ))}
        {!list.length && <p className="admin-empty">No cars in this category yet.</p>}
      </div>
    </>
  );
}

function OffersTab() {
  const { offers, setOffers } = useSiteData();
  const [editing, setEditing] = useState(null);
  const save = (offer) => {
    setOffers(offer.id ? offers.map((o) => (o.id === offer.id ? offer : o)) : [...offers, { ...offer, id: nextId(offers) }]);
    setEditing(null);
  };
  const remove = (o) => {
    if (window.confirm(`Delete "${o.title}"?`)) setOffers(offers.filter((x) => x.id !== o.id));
  };
  if (editing) return <OfferEditor offer={editing} onSave={save} onCancel={() => setEditing(null)} />;
  return (
    <>
      <div className="admin-toolbar">
        <span />
        <button className="btn btn-primary" onClick={() => setEditing({ ...blankOffer })}>+ Add offer</button>
      </div>
      <div className="admin-list">
        {offers.map((o) => (
          <div className="admin-row" key={o.id}>
            {o.image ? <img src={o.image} alt="" onError={hideBroken} /> : <div className="admin-thumb" />}
            <div className="admin-row-main">
              <strong>{o.title}</strong>
              <span>{o.tag} · {o.place}</span>
            </div>
            <div className="admin-row-actions">
              <button className="admin-text-btn" onClick={() => setEditing(o)}>Edit</button>
              <button className="admin-text-btn danger" onClick={() => remove(o)}>Delete</button>
            </div>
          </div>
        ))}
        {!offers.length && <p className="admin-empty">No offers yet.</p>}
      </div>
    </>
  );
}

function RequestsTab() {
  const { requests, removeRequest, clearRequests } = useSiteData();
  return (
    <>
      <div className="admin-toolbar">
        <span className="admin-note">Test-drive requests submitted from this browser.</span>
        {requests.length > 0 && (
          <button className="btn btn-ghost-dark" onClick={() => window.confirm('Delete all requests?') && clearRequests()}>Clear all</button>
        )}
      </div>
      <div className="admin-list">
        {requests.map((r) => (
          <div className="admin-request" key={r.id}>
            <div>
              <strong>{r.name}</strong>
              <span>{new Date(r.createdAt).toLocaleString()}</span>
            </div>
            <p>
              📞 {r.phone} · ✉ {r.email}
              <br />
              🚗 {r.car || 'Any car'} · 📍 {r.showroom}{r.date ? ` · 📅 ${r.date}` : ''}
            </p>
            {r.message && <p className="admin-msg">“{r.message}”</p>}
            <button className="admin-text-btn danger" onClick={() => removeRequest(r.id)}>Delete</button>
          </div>
        ))}
        {!requests.length && <p className="admin-empty">No test-drive requests yet.</p>}
      </div>
    </>
  );
}

function SettingsTab() {
  const { cars, offers, resetData, replaceData } = useSiteData();
  const exportData = () => {
    const blob = new Blob([JSON.stringify({ cars, offers }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'showroom-data.json';
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const importData = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    file.text().then((t) => {
      try {
        replaceData(JSON.parse(t));
        window.alert('Data imported.');
      } catch {
        window.alert('That file is not valid showroom data.');
      }
    });
    e.target.value = '';
  };
  return (
    <div className="admin-settings">
      <div className="admin-card">
        <h3>Backup</h3>
        <p>Download your cars and offers as a file, or load a file you saved earlier (for example on another computer).</p>
        <div className="admin-actions start">
          <button className="btn btn-primary" onClick={exportData}>Export data</button>
          <label className="btn btn-ghost-dark">
            Import data
            <input type="file" accept="application/json" hidden onChange={importData} />
          </label>
        </div>
      </div>
      <div className="admin-card">
        <h3>Reset</h3>
        <p>Undo all admin changes and go back to the original cars and offers.</p>
        <button className="btn btn-ghost-dark" onClick={() => window.confirm('Reset all cars and offers to the defaults?') && resetData()}>Reset to defaults</button>
      </div>
    </div>
  );
}

const tabs = [
  { id: 'cars', label: 'Cars', Comp: CarsTab },
  { id: 'offers', label: 'Offers', Comp: OffersTab },
  { id: 'requests', label: 'Test Drives', Comp: RequestsTab },
  { id: 'settings', label: 'Settings', Comp: SettingsTab },
];

export default function AdminPortal() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const [tab, setTab] = useState('cars');
  const { cars, offers, requests, saveError } = useSiteData();

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  const logout = () => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      /* ignore */
    }
    setLoggedIn(false);
  };
  const Current = tabs.find((t) => t.id === tab).Comp;

  return (
    <div className="admin">
      <header className="admin-header">
        <div className="logo">
          <span className="logo-mark">V</span>
          <span>{brand.name} <small>Admin</small></span>
        </div>
        <div className="admin-header-actions">
          <a href="#home" className="btn btn-ghost-dark small">View website</a>
          <button className="btn btn-primary small" onClick={logout}>Log out</button>
        </div>
      </header>
      <main className="admin-main">
        <div className="admin-stats">
          <div><strong>{cars.length}</strong><span>Cars</span></div>
          <div><strong>{offers.length}</strong><span>Offers</span></div>
          <div><strong>{requests.length}</strong><span>Test-drive requests</span></div>
        </div>
        <p className="admin-note">
          Changes save automatically in this browser and appear on the website straight away on this device.
        </p>
        {saveError && <p className="admin-error">Storage is full — use smaller photos or photo URLs.</p>}
        <nav className="admin-tabs">
          {tabs.map((t) => (
            <button key={t.id} className={`tab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </nav>
        <Current />
      </main>
    </div>
  );
}

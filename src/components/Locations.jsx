import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { locations } from '../data/site';

const pin = (active) =>
  L.divIcon({
    className: '',
    html: `<div class="map-pin ${active ? 'active' : ''}"><span>V</span></div>`,
    iconSize: [38, 46],
    iconAnchor: [19, 46],
    popupAnchor: [0, -42],
  });

const userPin = L.divIcon({ className: '', html: '<div class="user-pin"></div>', iconSize: [18, 18], iconAnchor: [9, 9] });

function distanceKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function FlyTo({ target }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo([target.lat, target.lng], target.zoom ?? 14, { duration: 1.2 });
  }, [target, map]);
  return null;
}

export default function Locations() {
  const [selected, setSelected] = useState(locations[0].id);
  const [target, setTarget] = useState(null);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('');
  const markers = useRef({});
  const watchId = useRef(null);

  useEffect(() => () => watchId.current != null && navigator.geolocation?.clearWatch(watchId.current), []);

  const choose = (loc) => {
    setSelected(loc.id);
    setTarget({ ...loc });
    setTimeout(() => markers.current[loc.id]?.openPopup(), 1300);
  };

  const locate = () => {
    if (!navigator.geolocation) return setStatus('Location is not supported by your browser.');
    setStatus('Finding your location…');
    if (watchId.current != null) navigator.geolocation.clearWatch(watchId.current);
    let first = true;
    watchId.current = navigator.geolocation.watchPosition(
      (pos) => {
        const me = { lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy };
        setUser(me);
        if (first) {
          first = false;
          const nearest = [...locations].sort((a, b) => distanceKm(me, a) - distanceKm(me, b))[0];
          setSelected(nearest.id);
          setStatus(`Nearest showroom: ${nearest.name} (${distanceKm(me, nearest).toFixed(1)} km away)`);
          setTarget({ ...me, zoom: 12 });
        }
      },
      () => setStatus('Could not get your location. Please allow location access.'),
      { enableHighAccuracy: true }
    );
  };

  const center = [locations[0].lat, locations[0].lng];

  return (
    <section id="locations" className="section">
      <div className="container">
        <SectionTitle eyebrow="Visit Us" title="Showrooms & Live Map" text="Find the showroom nearest to you and the offers available at each location." />
        <Reveal className="map-wrap">
          <aside className="loc-list">
            <button className="btn btn-primary locate" onClick={locate}>
              ◉ Use my live location
            </button>
            {status && <p className="loc-status">{status}</p>}
            {locations.map((l) => (
              <button key={l.id} className={`loc ${selected === l.id ? 'active' : ''}`} onClick={() => choose(l)}>
                <strong>{l.name}</strong>
                <span>{l.address}</span>
                <em>🏷 {l.offer}</em>
                {user && <small>{distanceKm(user, l).toFixed(1)} km away</small>}
              </button>
            ))}
          </aside>
          <div className="map">
            <MapContainer center={center} zoom={12} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <FlyTo target={target} />
              {locations.map((l) => (
                <Marker
                  key={l.id}
                  position={[l.lat, l.lng]}
                  icon={pin(selected === l.id)}
                  ref={(m) => (markers.current[l.id] = m)}
                  eventHandlers={{ click: () => setSelected(l.id) }}
                >
                  <Popup>
                    <div className="popup">
                      <strong>{l.name}</strong>
                      <span>{l.address}</span>
                      <span>{l.phone}</span>
                      <em>Offer: {l.offer}</em>
                      <a href={`https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lng}`} target="_blank" rel="noreferrer">
                        Get directions →
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {user && (
                <>
                  <Circle center={[user.lat, user.lng]} radius={Math.min(user.accuracy, 2000)} pathOptions={{ color: '#3182ce', weight: 1, fillOpacity: 0.12 }} />
                  <Marker position={[user.lat, user.lng]} icon={userPin}>
                    <Popup>You are here</Popup>
                  </Marker>
                </>
              )}
            </MapContainer>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

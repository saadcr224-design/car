import { createContext, useContext, useEffect, useState } from 'react';
import { cars as defaultCars, offers as defaultOffers } from './data/site';

// Admin edits are saved in this browser's localStorage (there is no backend).
const DATA_KEY = 'vm-site-data';
const REQ_KEY = 'vm-requests';

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

const SiteData = createContext(null);

export function SiteDataProvider({ children }) {
  const [data, setData] = useState(() => read(DATA_KEY, { cars: defaultCars, offers: defaultOffers }));
  const [requests, setRequests] = useState(() => read(REQ_KEY, []));
  const [saveError, setSaveError] = useState(false);

  useEffect(() => setSaveError(!write(DATA_KEY, data)), [data]);
  useEffect(() => {
    write(REQ_KEY, requests);
  }, [requests]);

  const value = {
    cars: data.cars,
    offers: data.offers,
    saveError,
    setCars: (cars) => setData((d) => ({ ...d, cars })),
    setOffers: (offers) => setData((d) => ({ ...d, offers })),
    resetData: () => setData({ cars: defaultCars, offers: defaultOffers }),
    replaceData: (next) => setData({ cars: next.cars || defaultCars, offers: next.offers || defaultOffers }),
    requests,
    addRequest: (r) => setRequests((list) => [{ ...r, id: Date.now(), createdAt: new Date().toISOString() }, ...list]),
    removeRequest: (id) => setRequests((list) => list.filter((r) => r.id !== id)),
    clearRequests: () => setRequests([]),
  };

  return <SiteData.Provider value={value}>{children}</SiteData.Provider>;
}

export const useSiteData = () => useContext(SiteData);

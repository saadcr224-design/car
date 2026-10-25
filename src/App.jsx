import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Collection from './components/Collection';
import About from './components/About';
import CeoMessage from './components/CeoMessage';
import Offers from './components/Offers';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';

const isAdminHash = () => window.location.hash === '#admin';

export default function App() {
  const [carName, setCarName] = useState('');
  const [admin, setAdmin] = useState(isAdminHash);

  useEffect(() => {
    const onHash = () => {
      const next = isAdminHash();
      setAdmin((prev) => {
        if (prev !== next) window.scrollTo(0, 0);
        return next;
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const enquire = (name) => {
    setCarName(name);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (admin) return <AdminPortal />;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Collection onEnquire={enquire} />
        <About />
        <CeoMessage />
        <Offers />
        <Locations />
        <Testimonials />
        <Contact carName={carName} />
      </main>
      <Footer />
    </>
  );
}

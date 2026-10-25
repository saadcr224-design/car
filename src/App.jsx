import { useState } from 'react';
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

export default function App() {
  const [carName, setCarName] = useState('');

  const enquire = (name) => {
    setCarName(name);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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

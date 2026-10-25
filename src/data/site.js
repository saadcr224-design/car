// Central place for all showroom content. Edit this file to rebrand the site.

// Free stock photos from Pexels (https://www.pexels.com/license/), served from their CDN.
// Swap any `image` for your own photo, e.g. '/cars/my-car.jpg' placed in /public/cars.
export const pexels = (id, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const brand = {
  name: 'Velocity Motors',
  tagline: 'Drive the Extraordinary',
  phone: '+1 (555) 010-2030',
  email: 'hello@velocitymotors.com',
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM · Sun: 11:00 AM – 6:00 PM',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'collection', label: 'Collection' },
  { id: 'about', label: 'Vision' },
  { id: 'ceo', label: 'CEO' },
  { id: 'offers', label: 'Offers' },
  { id: 'locations', label: 'Locations' },
  { id: 'contact', label: 'Contact' },
];

export const categories = [
  { id: 'all', label: 'All Cars' },
  { id: 'suv', label: 'SUV' },
  { id: 'sedan', label: 'Sedan' },
  { id: 'sports', label: 'Sports' },
  { id: 'electric', label: 'Electric' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'hatchback', label: 'Hatchback' },
];

// `image` is the car photo; `shape` picks the fallback illustration if the photo fails to load.
export const cars = [
  { id: 1, image: pexels(5704347), name: 'Terrain X7', category: 'suv', shape: 'suv', color: '#1a1a1a', price: 58900, year: 2026, power: '380 hp', speed: '0-100 in 5.9s', fuel: 'Hybrid', seats: 7, badge: 'New' },
  { id: 2, image: pexels(12793120), name: 'Summit GT', category: 'suv', shape: 'suv', color: '#6b7280', price: 46500, year: 2026, power: '295 hp', speed: '0-100 in 6.8s', fuel: 'Petrol', seats: 5 },
  { id: 3, image: pexels(11329085), name: 'Aurora S', category: 'sedan', shape: 'sedan', color: '#e5e7eb', price: 39900, year: 2026, power: '255 hp', speed: '0-100 in 6.4s', fuel: 'Petrol', seats: 5, badge: 'Best Seller' },
  { id: 4, image: pexels(170811), name: 'Meridian LX', category: 'sedan', shape: 'sedan', color: '#2b6cb0', price: 44200, year: 2025, power: '300 hp', speed: '0-100 in 5.8s', fuel: 'Hybrid', seats: 5 },
  { id: 5, image: pexels(39855), name: 'Viper R', category: 'sports', shape: 'sports', color: '#f2c200', price: 128000, year: 2026, power: '640 hp', speed: '0-100 in 2.9s', fuel: 'Petrol', seats: 2, badge: 'Hot' },
  { id: 6, image: pexels(20190806), name: 'Strada 911', category: 'sports', shape: 'sports', color: '#a0a7b4', price: 112500, year: 2025, power: '560 hp', speed: '0-100 in 3.2s', fuel: 'Petrol', seats: 2 },
  { id: 7, image: pexels(9300916), name: 'Volt E-Line', category: 'electric', shape: 'sedan', color: '#f1f1f1', price: 52900, year: 2026, power: '450 hp', speed: '0-100 in 3.9s', fuel: 'Electric · 610 km', seats: 5, badge: 'Eco' },
  { id: 8, image: pexels(13163937), name: 'Ion Cross', category: 'electric', shape: 'suv', color: '#4a6b52', price: 61400, year: 2026, power: '510 hp', speed: '0-100 in 4.4s', fuel: 'Electric · 540 km', seats: 5 },
  { id: 9, image: pexels(6872600), name: 'Regalia One', category: 'luxury', shape: 'sedan', color: '#2d2d35', price: 165000, year: 2026, power: '590 hp', speed: '0-100 in 4.3s', fuel: 'V12 Petrol', seats: 4, badge: 'Exclusive' },
  { id: 10, image: pexels(225841), name: 'Monarch V8', category: 'luxury', shape: 'suv', color: '#b91c1c', price: 142000, year: 2026, power: '550 hp', speed: '0-100 in 4.5s', fuel: 'Petrol', seats: 5 },
  { id: 11, image: pexels(810357), name: 'City Spark', category: 'hatchback', shape: 'hatch', color: '#1e40af', price: 21900, year: 2026, power: '130 hp', speed: '0-100 in 9.1s', fuel: 'Petrol', seats: 5 },
  { id: 12, image: pexels(10843557), name: 'Pulse e', category: 'hatchback', shape: 'hatch', color: '#c53030', price: 27500, year: 2026, power: '180 hp', speed: '0-100 in 7.4s', fuel: 'Electric · 390 km', seats: 5, badge: 'New' },
];

export const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 12000, suffix: '+', label: 'Happy Customers' },
  { value: 40, suffix: '+', label: 'Premium Brands' },
  { value: 4, suffix: '', label: 'Showrooms' },
];

export const vision = {
  image: pexels(7144243, 1000),
  vision:
    'To be the most trusted destination for drivers who expect more — where every visit feels personal and every car is delivered with pride.',
  mission:
    'We hand-pick every vehicle, price it transparently and back it with service that lasts long after the keys change hands.',
  goals: [
    { title: 'Customer First', text: 'A 98% satisfaction score through honest advice and no-pressure sales.' },
    { title: 'Go Electric', text: 'Half of our showroom floor dedicated to electric & hybrid cars by 2028.' },
    { title: 'Grow Together', text: 'Open new showrooms in two more cities while keeping our boutique feel.' },
    { title: 'Lifetime Care', text: 'Certified service, genuine parts and roadside help for every customer.' },
  ],
};

export const ceo = {
  name: 'Alexander Reed',
  title: 'Founder & Chief Executive Officer',
  initials: 'AR',
  photo: pexels(17049766, 700),
  message: [
    'When I opened our first showroom, I made one promise: every person who walks through our doors will be treated like family, whether they buy a car or simply come to admire one.',
    'Twenty-five years later that promise still drives us. We have grown, the cars have become faster, smarter and cleaner — but our values have not changed. Honesty, passion and care sit at the heart of everything we do.',
    'Thank you for trusting us with one of the most exciting decisions you will make. I look forward to welcoming you personally.',
  ],
};

export const offers = [
  { id: 1, image: pexels(7144174, 700), tag: 'Limited Time', title: '0% Finance for 36 Months', text: 'On all 2026 SUVs and sedans. Drive home today with zero interest.', place: 'Downtown Flagship' },
  { id: 2, image: pexels(9800000, 700), tag: 'Trade-In Bonus', title: 'Extra $3,000 on Trade-In', text: 'Upgrade your current car to any electric model and get a bonus valuation.', place: 'All Showrooms' },
  { id: 3, image: pexels(170811, 700), tag: 'Free Service', title: '3 Years Free Maintenance', text: 'Complimentary scheduled servicing with every luxury & sports purchase.', place: 'Westside & Harbor' },
];

// Showroom locations shown on the live map. Replace with your real coordinates.
export const locations = [
  { id: 1, name: 'Downtown Flagship', address: '120 Grand Avenue, Downtown', phone: '+1 (555) 010-2030', lat: 40.7549, lng: -73.984, offer: '0% Finance on SUVs' },
  { id: 2, name: 'Westside Showroom', address: '88 Hudson Street, Westside', phone: '+1 (555) 010-2040', lat: 40.7203, lng: -74.0085, offer: '3 Years Free Maintenance' },
  { id: 3, name: 'Harbor Point', address: '15 Harbor Drive, Brooklyn', phone: '+1 (555) 010-2050', lat: 40.7003, lng: -73.9967, offer: 'Free Detailing Package' },
  { id: 4, name: 'Northgate EV Center', address: '402 Northgate Blvd, Queens', phone: '+1 (555) 010-2060', lat: 40.7468, lng: -73.9124, offer: 'Extra $3,000 Trade-In on EVs' },
];

export const testimonials = [
  { name: 'Sarah M.', car: 'Terrain X7', text: 'The most relaxed car-buying experience I have ever had. No pressure, just great advice.' },
  { name: 'David K.', car: 'Viper R', text: 'They found me the exact spec I wanted within a week. Delivery day felt like an event!' },
  { name: 'Priya S.', car: 'Volt E-Line', text: 'Switching to electric was easy thanks to their team. Charging setup was handled too.' },
];

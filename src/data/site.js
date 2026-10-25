// Central place for all showroom content. Edit this file to rebrand the site.

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

// `shape` picks the illustration used when no `image` is set.
// Add `image: '/cars/your-photo.jpg'` (placed in /public/cars) to show a real photo.
export const cars = [
  { id: 1, name: 'Terrain X7', category: 'suv', shape: 'suv', color: '#2b6cb0', price: 58900, year: 2026, power: '380 hp', speed: '0-100 in 5.9s', fuel: 'Hybrid', seats: 7, badge: 'New' },
  { id: 2, name: 'Summit GT', category: 'suv', shape: 'suv', color: '#2f855a', price: 46500, year: 2026, power: '295 hp', speed: '0-100 in 6.8s', fuel: 'Petrol', seats: 5 },
  { id: 3, name: 'Aurora S', category: 'sedan', shape: 'sedan', color: '#4a5568', price: 39900, year: 2026, power: '255 hp', speed: '0-100 in 6.4s', fuel: 'Petrol', seats: 5, badge: 'Best Seller' },
  { id: 4, name: 'Meridian LX', category: 'sedan', shape: 'sedan', color: '#9b2c2c', price: 44200, year: 2025, power: '300 hp', speed: '0-100 in 5.8s', fuel: 'Hybrid', seats: 5 },
  { id: 5, name: 'Viper R', category: 'sports', shape: 'sports', color: '#e63946', price: 128000, year: 2026, power: '640 hp', speed: '0-100 in 2.9s', fuel: 'Petrol', seats: 2, badge: 'Hot' },
  { id: 6, name: 'Strada 911', category: 'sports', shape: 'sports', color: '#f2a516', price: 112500, year: 2025, power: '560 hp', speed: '0-100 in 3.2s', fuel: 'Petrol', seats: 2 },
  { id: 7, name: 'Volt E-Line', category: 'electric', shape: 'sedan', color: '#00a6a6', price: 52900, year: 2026, power: '450 hp', speed: '0-100 in 3.9s', fuel: 'Electric · 610 km', seats: 5, badge: 'Eco' },
  { id: 8, name: 'Ion Cross', category: 'electric', shape: 'suv', color: '#3182ce', price: 61400, year: 2026, power: '510 hp', speed: '0-100 in 4.4s', fuel: 'Electric · 540 km', seats: 5 },
  { id: 9, name: 'Regalia One', category: 'luxury', shape: 'sedan', color: '#1a1a2e', price: 165000, year: 2026, power: '590 hp', speed: '0-100 in 4.3s', fuel: 'V12 Petrol', seats: 4, badge: 'Exclusive' },
  { id: 10, name: 'Monarch V8', category: 'luxury', shape: 'suv', color: '#6b46c1', price: 142000, year: 2026, power: '550 hp', speed: '0-100 in 4.5s', fuel: 'Petrol', seats: 5 },
  { id: 11, name: 'City Spark', category: 'hatchback', shape: 'hatch', color: '#dd6b20', price: 21900, year: 2026, power: '130 hp', speed: '0-100 in 9.1s', fuel: 'Petrol', seats: 5 },
  { id: 12, name: 'Pulse e', category: 'hatchback', shape: 'hatch', color: '#38a169', price: 27500, year: 2026, power: '180 hp', speed: '0-100 in 7.4s', fuel: 'Electric · 390 km', seats: 5, badge: 'New' },
];

export const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 12000, suffix: '+', label: 'Happy Customers' },
  { value: 40, suffix: '+', label: 'Premium Brands' },
  { value: 4, suffix: '', label: 'Showrooms' },
];

export const vision = {
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
  message: [
    'When I opened our first showroom, I made one promise: every person who walks through our doors will be treated like family, whether they buy a car or simply come to admire one.',
    'Twenty-five years later that promise still drives us. We have grown, the cars have become faster, smarter and cleaner — but our values have not changed. Honesty, passion and care sit at the heart of everything we do.',
    'Thank you for trusting us with one of the most exciting decisions you will make. I look forward to welcoming you personally.',
  ],
};

export const offers = [
  { id: 1, tag: 'Limited Time', title: '0% Finance for 36 Months', text: 'On all 2026 SUVs and sedans. Drive home today with zero interest.', place: 'Downtown Flagship' },
  { id: 2, tag: 'Trade-In Bonus', title: 'Extra $3,000 on Trade-In', text: 'Upgrade your current car to any electric model and get a bonus valuation.', place: 'All Showrooms' },
  { id: 3, tag: 'Free Service', title: '3 Years Free Maintenance', text: 'Complimentary scheduled servicing with every luxury & sports purchase.', place: 'Westside & Harbor' },
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

// Side-profile car illustrations used when a car has no photo.
const bodies = {
  sedan: {
    body: 'M18 96 C18 84 26 78 40 76 L92 70 C108 56 132 44 162 42 L206 42 C226 42 244 54 262 68 L292 74 C304 77 308 86 308 96 Z',
    glass: 'M104 70 C118 58 136 50 160 49 L180 49 L180 70 Z M188 49 L206 49 C222 49 236 58 250 70 L188 70 Z',
    wheels: [78, 246],
  },
  suv: {
    body: 'M16 98 C16 82 22 74 36 72 L74 68 C90 46 104 34 130 32 L232 32 C250 32 262 46 272 66 L296 70 C306 72 310 84 310 98 Z',
    glass: 'M88 68 C100 50 112 41 132 40 L180 40 L180 68 Z M188 40 L230 40 C244 40 252 52 260 68 L188 68 Z',
    wheels: [80, 248],
  },
  sports: {
    body: 'M14 96 C14 88 20 82 34 80 L96 74 C122 58 150 50 182 50 L214 52 C238 56 262 66 282 76 L300 80 C308 82 312 88 312 96 Z',
    glass: 'M118 72 C136 62 156 56 180 56 L190 56 L196 72 Z M204 57 C222 59 238 64 254 72 L206 72 Z',
    wheels: [74, 252],
  },
  hatch: {
    body: 'M30 98 C30 84 36 78 48 76 L92 70 C108 50 126 38 152 36 L238 38 C256 40 266 56 272 74 L284 78 C292 80 294 88 294 98 Z',
    glass: 'M104 70 C118 54 132 45 154 44 L190 44 L190 70 Z M198 44 L236 45 C248 47 255 58 260 70 L198 70 Z',
    wheels: [84, 238],
  },
};

export default function CarArt({ shape = 'sedan', color = '#e63946' }) {
  const b = bodies[shape] || bodies.sedan;
  const id = `g-${shape}-${color.replace('#', '')}`;
  return (
    <svg className="car-art" viewBox="0 0 326 130" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.85" />
          <stop offset="0.55" stopColor={color} />
          <stop offset="1" stopColor="#0b0b12" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <ellipse cx="163" cy="118" rx="150" ry="7" fill="#000" opacity="0.18" />
      <path d={b.body} fill={`url(#${id})`} />
      <path d={b.glass} fill="#cfe3f5" opacity="0.85" />
      <path d="M40 86 L300 86" stroke="#fff" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="292" y="80" width="12" height="5" rx="2" fill="#ffe8a3" />
      <rect x="20" y="82" width="10" height="5" rx="2" fill="#ff4d4d" />
      {b.wheels.map((x) => (
        <g key={x} className="wheel" style={{ transformOrigin: `${x}px 100px` }}>
          <circle cx={x} cy="100" r="20" fill="#16161d" />
          <circle cx={x} cy="100" r="12" fill="#9aa3b2" />
          <circle cx={x} cy="100" r="4" fill="#16161d" />
          {[0, 72, 144, 216, 288].map((a) => (
            <rect key={a} x={x - 1.5} y="89" width="3" height="9" fill="#16161d" transform={`rotate(${a} ${x} 100)`} />
          ))}
        </g>
      ))}
    </svg>
  );
}

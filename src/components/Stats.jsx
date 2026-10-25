import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';
import { stats } from '../data/site';

function Counter({ value, suffix, start }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1800, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);
  return (
    <strong>
      {n.toLocaleString()}
      {suffix}
    </strong>
  );
}

export default function Stats() {
  const [ref, visible] = useReveal(0.3);
  return (
    <section className="stats" ref={ref}>
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <Counter value={s.value} suffix={s.suffix} start={visible} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

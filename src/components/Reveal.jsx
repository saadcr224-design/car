import useReveal from '../hooks/useReveal';

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, from = 'up', ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${from} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

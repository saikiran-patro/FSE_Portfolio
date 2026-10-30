import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

// Adapted from Magic UI Icon Cloud (MIT): https://magicui.design/docs/components/icon-cloud
// Uses its Fibonacci sphere and depth projection, rendering actual SVG nodes instead
// of rasterizing into canvas. This stays crisp at every size and never traps touch scrolling.
export default function IconCloud({ icons }) {
  const container = useRef(null);
  const nodes = useRef([]);
  const rotation = useRef(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const positions = useMemo(() => icons.map((_, i) => {
    const y = (i * 2) / icons.length - 1 + 1 / icons.length;
    const r = Math.sqrt(1 - y * y);
    const phi = i * Math.PI * (3 - Math.sqrt(5));
    return { x: Math.cos(phi) * r * 125, y: y * 125, z: Math.sin(phi) * r * 125 };
  }), [icons]);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    let frame;
    let previousTime;
    const render = (time) => {
      if (previousTime && !paused && !reducedMotion) rotation.current += Math.min(time - previousTime, 40) * 0.00017;
      previousTime = time;
      const angle = rotation.current;
      positions.forEach((point, index) => {
        const x = point.x * Math.cos(angle) - point.z * Math.sin(angle);
        const z = point.x * Math.sin(angle) + point.z * Math.cos(angle);
        const y = point.y * Math.cos(0.17) + z * Math.sin(0.17);
        const scale = (z + 300) / 420;
        nodes.current[index]?.setAttribute('transform', 'translate(' + (180 + x) + ',' + (180 + y) + ') scale(' + scale + ')');
        nodes.current[index]?.setAttribute('opacity', Math.max(0.25, (z + 180) / 270));
      });
      if (visible && !paused && !reducedMotion) frame = requestAnimationFrame(render);
    };
    render(0);
    return () => cancelAnimationFrame(frame);
  }, [positions, paused, reducedMotion, visible]);
  const stopped = paused || reducedMotion;
  return <div className="svg-cloud" ref={container}>
    <svg viewBox="0 0 360 360" role="img" aria-label="Rotating SVG skill cloud: React, TypeScript, Python, cloud infrastructure, and AI agent tools. All skills are also listed as text." className="cloud-sphere">
      <circle cx="180" cy="180" r="141" fill="none" stroke="#ec9162" strokeOpacity="0.09" />
      <circle cx="180" cy="180" r="106" fill="none" stroke="#ec9162" strokeOpacity="0.05" />
      {icons.map(({ name, Icon }, index) => <g key={name} ref={(node) => { nodes.current[index] = node; }} transform="translate(180,180)"><title>{name}</title><g transform="translate(-18,-18)"><Icon width={36} height={36} color="#ec9162" aria-hidden="true" /></g></g>)}
    </svg>
    <button className="cloud-control" aria-label={stopped ? 'Play skill cloud animation' : 'Pause skill cloud animation'} aria-pressed={!stopped} onClick={() => setPaused(!paused)} disabled={Boolean(reducedMotion)} title={reducedMotion ? 'Animation paused by your reduced-motion preference' : undefined}>{stopped ? <Play size={15} /> : <Pause size={15} />}{stopped ? 'Paused' : 'Pause'}</button>
  </div>;
}

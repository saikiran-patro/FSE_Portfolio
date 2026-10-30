import React from 'react';

// Geometry comes from Magic UI Dotted Map, precomputed by scripts/build_contact_map.cjs.
// The local SVG preserves the exact dots and India marker without blocking navigation.
export default function DottedMap() {
  return (
    <img
      src={process.env.PUBLIC_URL + '/Assets/contact-world-map.svg'}
      className="contact-dotted-map"
      alt="Dotted world map with a location marker in India"
      width="600"
      height="300"
      decoding="async"
    />
  );
}

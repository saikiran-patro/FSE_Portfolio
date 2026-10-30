import React from 'react';
import { Globe2, Laptop, MapPin, Plane } from 'lucide-react';
import DottedMap from './ui/dotted-map';

export default function ContactMap() {
  return (
    <section className="contact-location" aria-labelledby="work-location-heading">
      <div className="location-map-panel">
        <DottedMap />
        <span className="map-location-pill"><MapPin size={13} aria-hidden="true" />Based in Hyderabad, India</span>
      </div>
      <div className="location-copy">
        <p className="eyebrow"><Globe2 size={14} aria-hidden="true" />Across borders</p>
        <h2 id="work-location-heading">Good work travels.</h2>
        <p>I’m open to remote collaboration, opportunities across India, and roles in Europe with visa sponsorship.</p>
        <ul className="location-options">
          <li><Laptop size={16} aria-hidden="true" />Remote work</li>
          <li><MapPin size={16} aria-hidden="true" />India</li>
          <li><Plane size={16} aria-hidden="true" />Europe · Visa sponsorship required</li>
        </ul>
      </div>
    </section>
  );
}

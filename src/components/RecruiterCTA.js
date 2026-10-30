import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../constants/portfolio';
export default function RecruiterCTA() {
  return <section className="recruiter-cta" aria-label="Get in touch">
    <div><p className="eyebrow">Have something in mind?</p><h2>Let’s build something useful.</h2><p>Frontend, full-stack, or AI agents — let’s talk.</p></div>
    <a className="button button-secondary" href={'mailto:' + profile.email}><Mail size={16} />Email me<ArrowUpRight size={16} /></a>
  </section>;
}

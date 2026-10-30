import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profile } from '../constants/portfolio';
import ContactForm from './ContactForm';
import DownloadBtn from './DownloadBtn';
import ContactMap from './ContactMap';
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Email copied.'); }
    catch { setCopyStatus('Copy unavailable. Select the email address above, or use Email me.'); }
  }
  return <div className="animateContainer"><p className="eyebrow">Start a conversation</p><h1>Good things start<br /><span className="orange-text">with a hello.</span></h1><p className="section-description">Hiring for frontend, full-stack, or AI engineering? Have a project in mind? Reach me directly.</p>
    <ContactMap />
    <div className="contact-options">
      <a href={'mailto:' + profile.email}><Mail size={23} /><span><strong>Email me</strong><span className="contact-address">{profile.email}</span></span><ArrowUpRight size={18} /></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={23} /><span><strong>Connect on LinkedIn</strong><span>Professional updates & conversations</span></span><ArrowUpRight size={18} /></a>
      <a href={'tel:' + profile.phone}><Phone size={23} /><span><strong>Call me</strong><span>+91 91828 63688</span></span><ArrowUpRight size={18} /></a>
    </div>
    <div className="contact-actions"><button className="button button-secondary" onClick={copyEmail}>{copyStatus === 'Email copied.' ? <Check size={16} /> : <Copy size={16} />}Copy email</button><DownloadBtn /></div><p className="copy-status" role="status">{copyStatus}</p>
    <div className="contact-form-section"><h2>Or leave a message.</h2><p className="section-description">Your message goes directly to my inbox.</p><ContactForm /></div>
  </div>;
}

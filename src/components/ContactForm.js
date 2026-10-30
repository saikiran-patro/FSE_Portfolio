import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';
import { profile } from '../constants/portfolio';
export default function ContactForm() {
  const [state, handleSubmit] = useForm('xovvbzkw');
  if (state.succeeded) return <p className="form-success" role="status">Thanks for reaching out! Your message has been sent. I’ll get back to you by email.</p>;
  return <form onSubmit={handleSubmit} className="contact-form">
    <div><label htmlFor="email">Your email</label><input id="email" type="email" name="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} /><ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" /></div>
    <div><label htmlFor="message">Your message</label><textarea id="message" name="message" rows={5} placeholder="Tell me about the role, project, or idea…" required minLength={10} maxLength={5000} /><ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" /></div>
    <ValidationError errors={state.errors} className="form-error" />
    {state.errors && <p className="form-error">If the form is unavailable, email <a href={'mailto:' + profile.email}>{profile.email}</a>.</p>}
    <button className="button button-primary" type="submit" disabled={state.submitting}><Send size={16} />{state.submitting ? 'Sending…' : 'Send message'}</button>
  </form>;
}

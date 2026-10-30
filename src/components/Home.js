import React from 'react';
import { ArrowRight, Mail, Code2, Bot, Rocket, Globe2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { changeWindow } from '../constants/windowSlice';
import { profile } from '../constants/portfolio';
import DownloadBtn from './DownloadBtn';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div className="animateContainer home-page">
      <div className="home-hero">
        <div>
          <p className="eyebrow hero-kicker"><span className="status-dot" />React · TypeScript · AI agents</p>
          <h1>Thoughtful interfaces.<br /><span className="orange-text">Intelligent experiences.</span></h1>
          <p className="hero-description">Hey, I’m Sai Kiran — a frontend-focused full-stack engineer turning complex ideas into intuitive products. Currently building AI experiences at <strong>RealPage</strong>.</p>
          <div className="hero-actions"><DownloadBtn /><a className="button button-secondary" href={'mailto:' + profile.email}><Mail size={17} />Let’s connect</a></div>
          <p className="work-preference"><Globe2 size={15} aria-hidden="true" /><span>Open to remote work, roles in India, and opportunities in Europe with visa sponsorship.</span></p>
        </div>
        <div className="hero-portrait">
          <div className="space-dotfield" aria-hidden="true" />
          <div className="portrait-orbit" aria-hidden="true" />
          <span className="space-star star-one" aria-hidden="true">✦</span>
          <span className="space-star star-two" aria-hidden="true">+</span>
          <img src={require('../Assets/Me.png')} alt="Illustration of an astronaut coding in space" width="220" height="260" />
          <span className="portrait-caption"><Rocket size={13} aria-hidden="true" />Exploring what’s next.</span>
        </div>
      </div>
      <div className="impact-strip" aria-label="Career highlights">
        <div><strong>1.8M</strong><span>users served by a React platform</span></div>
        <div><strong>&lt;2 sec</strong><span>end-to-end voice-agent latency</span></div>
        <div><strong>400+</strong><span>DSA problems solved</span></div>
      </div>
      <section className="section-block">
        <p className="eyebrow">What I bring</p><h2>From the interface to the intelligence.</h2>
        <div className="specialty-grid">
          {[{ Icon: Code2, title: 'Frontend craft', text: 'Responsive React and TypeScript interfaces built for clarity, performance, and scale.' }, { Icon: Bot, title: 'Applied AI', text: 'Real-time voice, multi-agent workflows, and RAG that solve practical problems.' }, { Icon: Rocket, title: 'End-to-end delivery', text: 'APIs, cloud services, and containerized deployments that bring the whole product together.' }].map(({ Icon, title, text }) => <article className="specialty-card" key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <a className="text-link" href="#projects" onClick={() => dispatch(changeWindow('Projects'))}>Explore my projects<ArrowRight size={17} /></a>
    </div>
  );
}

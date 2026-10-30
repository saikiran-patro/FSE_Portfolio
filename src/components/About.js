import React from 'react';
import { Code2, Bot, Youtube, Rocket } from 'lucide-react';
import { IconSkills } from './IconSkills';
import { skillGroups } from '../constants/portfolio';
export default function About() {
  return <div className="animateContainer"><p className="eyebrow">The person behind the code</p>
    <h1>Engineer. Creator.<br /><span className="orange-text">Driven by curiosity.</span></h1>
    <div className="bio-copy"><p>I’m Sai Kiran Patro, a frontend-focused full-stack engineer based in Hyderabad. I build React and TypeScript applications, connect them to reliable backends, and turn AI capabilities into experiences people can actually use.</p><p>At RealPage, I work on real-time voice agents, screen-sharing experiences, and multi-agent systems with LangGraph and Vertex AI. Before that, at TCS, I built a React subscription center serving 1.8 million active users.</p><p>Outside work, I’m a technophile and content creator who loves explaining software, electronics, space, and rocket science. Space exploration keeps me curious — and yes, I’m also a huge Marvel fan.</p></div>
    <div className="interest-note"><Rocket size={20} /><span>Curious about the next frontier. On the web, in AI, and beyond Earth.</span></div>
    <section className="section-block"><h2>What I specialize in</h2><div className="specialty-grid">
      {[{ Icon: Code2, title: 'Frontend development', text: 'React, TypeScript, responsive interfaces, and full-stack applications.' }, { Icon: Bot, title: 'AI & systems design', text: 'Voice agents, orchestration, RAG, and cloud-native services.' }, { Icon: Youtube, title: 'Content creation', text: 'Making space tech, software projects, and electronics approachable.' }].map(({ Icon, title, text }) => <article className="specialty-card" key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}
    </div></section>
    <section className="section-block skills-section" aria-labelledby="skills-heading"><div className="section-heading"><div><p className="eyebrow">My toolkit</p><h2 id="skills-heading">Skills, with a new dimension.</h2></div><span className="subtle-label">Always learning</span></div>
      <div className="skills-layout"><div className="skill-groups">{skillGroups.map(({ title, skills }) => <div className="skill-group" key={title}><h3>{title}</h3><ul className="skill-chips">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div><IconSkills /></div>
    </section>
  </div>;
}

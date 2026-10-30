import React from 'react';
import { Award, ArrowUpRight, BriefcaseBusiness, GraduationCap, Mail, Linkedin, ExternalLink } from 'lucide-react';
import ResumeDownload from './ResumeDownload';
import { profile, achievements } from '../constants/portfolio';

export default function Resume() {
  return (
    <div className="animateContainer">
      <div className="resume-intro">
        <div>
          <p className="eyebrow">Experience that makes an impact</p>
          <h1>Interfaces to AI.<br /><span className="orange-text">Built for the real world.</span></h1>
          <p className="section-description">Frontend-focused full-stack engineer · Hyderabad, India</p>
        </div>
        <ResumeDownload showPreviewLink={false} />
      </div>
      <div className="resume-contact">
        <a href={'mailto:' + profile.email}><Mail size={16} />Email Sai</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Connect on LinkedIn"><Linkedin size={16} /><span className="desktop-contact-label">Connect on LinkedIn</span><span className="mobile-contact-label">LinkedIn</span><ArrowUpRight size={14} /></a>
        <a href={profile.resume} target="_blank" rel="noreferrer"><ExternalLink size={16} />Open PDF</a>
      </div>
      <section className="section-block" aria-labelledby="experience-heading">
        <h2 className="icon-heading" id="experience-heading"><BriefcaseBusiness size={23} />Experience</h2>
        <div className="experience-timeline">
          <article className="experience-card">
            <div className="experience-heading">
              <div>
                <a href="https://www.realpage.com/" className="company-logo" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/Assets/realpage.svg'} alt="RealPage" width="132" height="22" /></a>
                <h3>RealPage</h3>
                <p className="experience-role">Software Development Engineer 2 – AI Engineer</p>
              </div>
              <span className="date-badge">Jun 2025 – Present</span>
            </div>
            <p className="experience-location">Hyderabad, India</p>
            <h4>Multi-agent web application</h4>
            <ul className="experience-bullets">
              <li>Built the React interface and solely architected LangGraph and Vertex AI workflows for research, outreach, and invoice-ingestion agents.</li>
              <li>Containerized AI microservices with Docker and deployed them on Google Kubernetes Engine (GKE).</li>
              <li>Reduced input-token cost by <strong>6%</strong> through prompt optimization.</li>
            </ul>
            <div className="experience-subheading">
              <h4>Lumina AI Screen Share</h4>
              <a className="text-link" href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7437938261152595969/" target="_blank" rel="noreferrer">Spotlighted by OpenAI<ArrowUpRight size={14} /></a>
            </div>
            <ul className="experience-bullets">
              <li>Developed a real-time voice agent with screen sharing and an interactive feedback interface using the OpenAI Agents SDK and Node.js.</li>
              <li>Maintained <strong>sub-2-second</strong> end-to-end voice latency by tuning VAD, endpointing, and turn-taking.</li>
              <li>Integrated conversation summaries with Salesforce REST APIs and migrated voice records from Transcript to Messaging objects.</li>
              <li>Improved agent reliability with system-prompt optimization, guardrails, and function-tool calling.</li>
            </ul>
            <div className="tech-tags"><span>React</span><span>LangGraph</span><span>Vertex AI</span><span>OpenAI Agents SDK</span><span>Node.js</span><span>GKE</span></div>
          </article>
          <article className="experience-card">
            <div className="experience-heading">
              <div>
                <img className="tcs-logo" src={require('../Assets/tcs.svg').default} alt="TCS" width="60" height="32" />
                <h3>Tata Consultancy Services</h3>
                <p className="experience-role">Software Engineer – Full-Stack Developer</p>
              </div>
              <span className="date-badge">Jun 2022 – May 2025</span>
            </div>
            <p className="experience-location">Hyderabad, India</p>
            <ul className="experience-bullets">
              <li>Built a scalable React subscription center serving <strong>1.8 million active users</strong>.</li>
              <li>Developed an automotive RAG chatbot with Node.js, Express, and the Gemini API for vehicle and offer-related queries.</li>
              <li>Delivered a referral-offer code program associated with a reported <strong>80% increase in sales</strong>.</li>
            </ul>
            <div className="tech-tags"><span>React</span><span>Node.js</span><span>Express</span><span>Gemini API</span><span>RAG</span></div>
          </article>
          <article className="experience-card creator-experience">
            <div className="experience-heading">
              <div><h3>YouTube · Tech Content Creator</h3><p className="experience-role">Independent · Part time</p></div>
              <span className="date-badge">Oct 2018 – Present</span>
            </div>
            <p>Explaining space tech, software projects, and electronics. 100K+ views and a community of 750+ subscribers.</p>
            <a className="text-link" href="https://www.youtube.com/saikiranpatro" target="_blank" rel="noreferrer">Visit my channel<ArrowUpRight size={15} /></a>
          </article>
        </div>
      </section>
      <section className="section-block" aria-labelledby="achievements-heading">
        <h2 className="icon-heading" id="achievements-heading"><Award size={23} />Achievements & certifications</h2>
        <div className="achievement-grid">
          {achievements.map(({ title, detail, href, linkLabel }) => (
            <article className="achievement-card" key={title}>
              <Award size={20} /><h3>{title}</h3><p>{detail}</p>
              {href && <a className="text-link" href={href} target="_blank" rel="noreferrer">{linkLabel}<ArrowUpRight size={14} /></a>}
            </article>
          ))}
        </div>
      </section>
      <section className="section-block education-section">
        <h2 className="icon-heading"><GraduationCap size={23} />Education</h2>
        <h3>B.Tech · Electronics & Communication Engineering</h3>
        <p>Anil Neerukonda Institute of Technology and Sciences</p>
        <p className="section-description">2018 – 2022 · CGPA 8.7 / 10</p>
      </section>
    </div>
  );
}

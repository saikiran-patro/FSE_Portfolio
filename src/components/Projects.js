import React, { useEffect, useState } from 'react';
import { Github, Play, Package, ArrowUpRight } from 'lucide-react';
const filters = ['All', 'Freelance', 'Gen AI', 'Web', 'IoT', 'Android'];
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('loading');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');
    fetch(process.env.PUBLIC_URL + '/projects.json', { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error('Could not load projects'); return response.json(); })
      .then((data) => { setProjects(data.projects); setStatus('ready'); })
      .catch((error) => { if (error.name !== 'AbortError') setStatus('error'); });
    return () => controller.abort();
  }, [attempt]);
  const visible = projects.filter((project) => type === 'All' || project.category === type);
  return <div className="animateContainer"><p className="eyebrow">Ideas, shipped</p><h1>A few things<br /><span className="orange-text">I’ve built.</span></h1><p className="section-description">AI experiments, full-stack products, and projects beyond the browser.</p>
    <div className="project-filters" aria-label="Filter projects">{filters.map((filter) => <button key={filter} aria-pressed={type === filter} onClick={() => setType(filter)}>{filter}</button>)}</div>
    {status === 'loading' && <p role="status">Loading projects…</p>}
    {status === 'error' && <div role="alert"><p>Projects could not be loaded.</p><button className="button button-secondary" onClick={() => setAttempt(attempt + 1)}>Try again</button></div>}
    {status === 'ready' && <><p className="results-count" role="status">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</p><div className="projects-grid">{visible.map((project) => <article className={'project-card' + (project.featured ? ' featured-project' : '')} key={project.name}>
      {project.bannerImage ? <img className="project-image" src={project.bannerImage} alt={project.name + ' preview'} loading="lazy" width="480" height="270" /> : <div className="project-placeholder"><Package size={50} /><span>{project.placeholderLabel || 'PROJECT'}</span></div>}
      <div className="project-copy"><span className="eyebrow">{project.clientWork ? "Freelance · Client project" : project.category}</span><h2>{project.name}</h2><p>{project.description}</p>{project.scope && <ul className="project-scope">{project.scope.map(item => <li key={item}>{item}</li>)}</ul>}<div className="tech-tags">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} />Code<span className="sr-only"> for {project.name}</span></a>}{project.youtube && <a href={project.youtube} target="_blank" rel="noreferrer"><Play size={16} />Demo<span className="sr-only"> of {project.name}</span></a>}{project.url && <a href={project.url} target="_blank" rel="noreferrer">{project.urlLabel || 'Explore'}<ArrowUpRight size={16} /><span className="sr-only"> {project.name}</span></a>}</div>
      </div></article>)}</div></>}
  </div>;
}

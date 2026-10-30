import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import RecruiterCTA from './RecruiterCTA';
const Resume = lazy(() => import('./Resume'));
const Projects = lazy(() => import('./Projects'));
const Youtube = lazy(() => import('./Youtube'));
const Contact = lazy(() => import('./Contact'));
const pages = { Home, About, Resume, Projects, Youtube, Contact };
export default function RightContainer({ contentRef }) {
  const section = useSelector((store) => store.window);
  const Page = pages[section] || Home;
  return <div className="rightContainer">
    <Navbar />
    <main id="main-content" ref={contentRef} tabIndex={-1} className="page-content">
      <Suspense fallback={<p className="page-loading" role="status">Loading {section.toLowerCase()}…</p>}><Page /></Suspense>
      {section !== 'Contact' && <RecruiterCTA />}
    </main>
  </div>;
}

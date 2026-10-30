import React from 'react';
import { ExternalLink } from 'lucide-react';
import { profile } from '../constants/portfolio';

export default function ResumeDownload({ showPreviewLink = true }) {
  return (
    <div className="resume-download-prompt">
      <a className="resume-download-arrow" href={profile.resume}
        download="Sai_Kiran_Patro_Resume.pdf" aria-label="Download resume PDF">
        <span className="resume-download-orbit" aria-hidden="true">
          <span className="download-ripple ripple-one" />
          <span className="download-ripple ripple-two" />
          <span className="download-ripple ripple-three" />
          <svg className="resume-arrow-icon" viewBox="0 0 24 24" width="30" height="30">
            <path d="M10 4h4v6h2.5L12 14.5 7.5 10H10V4Z" fill="currentColor" />
            <path d="M6 19h12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span className="resume-download-copy">
          <span className="resume-download-caption">Download resume</span>
          <span className="resume-download-description">PDF · One page</span>
        </span>
      </a>
      {showPreviewLink && <a className="resume-open-link" href={profile.resume} target="_blank" rel="noreferrer">
        Open PDF<ExternalLink size={12} aria-hidden="true" />
      </a>}
    </div>
  );
}

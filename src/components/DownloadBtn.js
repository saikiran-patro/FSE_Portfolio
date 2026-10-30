import React from 'react';
import { Download } from 'lucide-react';
import { profile } from '../constants/portfolio';

export default function DownloadBtn({ compact = false }) {
  return (
    <a className={'button button-download' + (compact ? ' sidebar-resume' : '')}
      href={profile.resume} download="Sai_Kiran_Patro_Resume.pdf">
      <span className="download-symbol"><Download size={17} aria-hidden="true" /></span>
      <span>Download resume</span>
      <span className="file-format">PDF</span>
    </a>
  );
}

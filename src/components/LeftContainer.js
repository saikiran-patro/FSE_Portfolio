import React, { useEffect, useId, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, Menu, X, Github, Linkedin, Youtube } from 'lucide-react';
import { profile } from '../constants/portfolio';
import DownloadBtn from './DownloadBtn';
import codeStudio from '../Assets/codeProfiles/codestudio.svg';
import hackerRank from '../Assets/codeProfiles/hackrank.svg';
import gfg from '../Assets/codeProfiles/gfg.svg';
import leetCode from '../Assets/codeProfiles/leetcode.svg';

const codeProfiles = [
  ['Code Studio', 'https://www.naukri.com/code360/profile/0d5dd7cd-cdd7-4f1d-b84a-0c1322353376', codeStudio],
  ['HackerRank', 'https://www.hackerrank.com/profile/saikiranpatro607', hackerRank],
  ['GeeksforGeeks', 'https://www.geeksforgeeks.org/user/kiranpatro2018ece/', gfg],
  ['LeetCode', 'https://leetcode.com/u/saikiranpatro198/', leetCode],
];

function ProfileDetails() {
  return (
    <>
      <div className="profile-divider" />
      <ul className="contact-list">
        <li><span className="iconBox"><Mail size={19} aria-hidden="true" /></span><div><p className="contactTitle">Email</p><a href={'mailto:' + profile.email}>{profile.email}</a></div></li>
        <li><span className="iconBox"><Phone size={19} aria-hidden="true" /></span><div><p className="contactTitle">Phone</p><a href={'tel:' + profile.phone}>+91 91828 63688</a></div></li>
        <li><span className="iconBox"><MapPin size={19} aria-hidden="true" /></span><div><p className="contactTitle">Currently building at</p><p>RealPage · SDE 2</p></div></li>
      </ul>
      <DownloadBtn compact />
      <div className="profile-divider" />
      <section aria-label="Social profiles">
        <p className="eyebrow text-center">Find me online</p>
        <div className="social-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://www.youtube.com/saikiranpatro" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
          <a href="https://www.instagram.com/saikiranpatro/" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={require('../Assets/instagram.svg').default} alt="" /></a>
          <a href="https://x.com/SaiKiranpatro9" target="_blank" rel="noreferrer" aria-label="X"><img src={require('../Assets/twitter.svg').default} alt="" /></a>
          <a href="https://www.threads.net/@saikiranpatro" target="_blank" rel="noreferrer" aria-label="Threads"><img src={require('../Assets/threads.svg').default} alt="" /></a>
        </div>
      </section>
      <section aria-label="Code profiles">
        <p className="eyebrow text-center coding-label">Code profiles</p>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          {codeProfiles.map(([label, href, asset]) => <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"><img src={asset} alt="" /></a>)}
        </div>
      </section>
      <p className="profile-signoff">Frontend · Full-stack · AI agents</p>
    </>
  );
}

export default function LeftContainer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const reducedMotion = useReducedMotion();
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('[data-menu-close]')?.focus();
    const desktop = window.matchMedia('(min-width: 1001px)');
    const closeOnDesktop = (event) => { if (event.matches) setMenuOpen(false); };
    desktop.addEventListener?.('change', closeOnDesktop);
    return () => {
      desktop.removeEventListener?.('change', closeOnDesktop);
      if (dialog.open) dialog.close();
      trigger?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  function closeMenu() {
    if (reducedMotion) setMenuOpen(false);
    else setMenuClosing(true);
  }

  function finishClose(event) {
    if (event.target === event.currentTarget && event.animationName === 'contactMenuExit') {
      setMenuOpen(false);
      setMenuClosing(false);
    }
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) closeMenu();
  }

  return (
    <aside className="leftContainer" aria-label="Sai Kiran's profile">
      <div className="profile-heading">
        <div className="profilePicContainer"><img src={require('../Assets/ProfilePic.png')} alt="Sai Kiran Patro" width="180" height="180" /></div>
        <div className="profile-intro">
          <p className="profile-name">Sai Kiran Patro</p>
          <p className="role-badge">Frontend & AI Engineer</p>
          <p className="profile-location"><MapPin size={13} aria-hidden="true" />Hyderabad, India</p>
        </div>
      </div>
      <button ref={triggerRef} className="profile-menu-trigger"
        aria-label="Open contact menu" aria-haspopup="dialog"
        aria-expanded={menuOpen} aria-controls={menuId} onClick={() => { setMenuClosing(false); setMenuOpen(true); }}>
        <Menu size={21} aria-hidden="true" />
      </button>
      <div className="profile-details" id="profile-details"><ProfileDetails /></div>
      {menuOpen && (
        <dialog ref={dialogRef} id={menuId} className={menuClosing ? "profile-menu is-closing" : "profile-menu"}
          aria-labelledby={menuId + '-title'} aria-describedby={menuId + '-description'}
          onCancel={(event) => { event.preventDefault(); closeMenu(); }}
          onAnimationEnd={finishClose}
          onClick={closeOnBackdrop}>
          <div className="profile-menu-panel">
            <div className="profile-menu-header">
              <div>
                <p className="eyebrow">Let’s connect</p>
                <h2 id={menuId + '-title'}>Contact & profiles</h2>
                <p id={menuId + '-description'}>Find me online or reach out directly.</p>
              </div>
              <button data-menu-close className="profile-menu-close"
                aria-label="Close contact menu" onClick={closeMenu}>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="profile-menu-content"><ProfileDetails /></div>
          </div>
        </dialog>
      )}
    </aside>
  );
}

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeWindow } from '../constants/windowSlice';
import { navigation } from '../constants/portfolio';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import NavbarBottom from './NavbarBottom';

export default function MainContainer() {
  const section = useSelector((store) => store.window);
  const dispatch = useDispatch();
  const contentRef = useRef(null);
  const previousSection = useRef(section);
  useEffect(() => {
    const syncHash = () => {
      const match = navigation.find(({ id }) => '#' + id.toLowerCase() === window.location.hash.toLowerCase());
      if (match || !window.location.hash) dispatch(changeWindow(match?.id || 'Home'));
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [dispatch]);
  useEffect(() => {
    if (previousSection.current !== section) {
      if (contentRef.current) contentRef.current.scrollTop = 0;
      contentRef.current?.focus({ preventScroll: true });
      previousSection.current = section;
    }
    document.title = section + ' | Sai Kiran Patro - Frontend & AI Engineer';
  }, [section]);
  return <div className="globalContainer">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="portfolio-shell"><LeftContainer /><RightContainer contentRef={contentRef} /></div>
    <NavbarBottom />
  </div>;
}

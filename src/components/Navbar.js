import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeWindow } from '../constants/windowSlice';
import { navigation } from '../constants/portfolio';
export default function Navbar() {
  const current = useSelector((store) => store.window);
  const dispatch = useDispatch();
  return <header className="page-header">
    <div className="typeCat" aria-hidden="true">{current === 'Youtube' ? 'YouTube' : current}</div>
    <nav className="desktop-nav" aria-label="Main navigation">
      {navigation.map(({ id, label }) => <a key={id} href={'#' + id.toLowerCase()} onClick={() => dispatch(changeWindow(id))} aria-current={id === current ? 'page' : undefined}>{label}</a>)}
    </nav>
  </header>;
}

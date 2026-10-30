import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeWindow } from '../constants/windowSlice';
import { navigation } from '../constants/portfolio';

export default function NavbarBottom() {
  const current = useSelector((store) => store.window);
  const dispatch = useDispatch();
  const reducedMotion = useReducedMotion();
  const spring = reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 440, damping: 32 };

  return (
    <nav className="mobile-dock" aria-label="Mobile navigation">
      <motion.div className="dock-surface"
        initial={reducedMotion ? false : { y: 88, opacity: 0, scale: 0.86 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 230, damping: 23, mass: 1.1, delay: 0.12 }}>
      {navigation.map(({ id, label, mobileLabel, Icon }) => {
        const active = id === current;
        return (
          <motion.a key={id} href={'#' + id.toLowerCase()} aria-label={label}
            aria-current={active ? 'page' : undefined}
            onClick={() => dispatch(changeWindow(id))}
            whileTap={reducedMotion ? undefined : { scale: 0.9 }}
            whileHover={reducedMotion ? undefined : { y: -3 }}
            className="dock-item">
            {active && <motion.span className="dock-active" layoutId="dock-active" initial={false} transition={spring} />}
            <motion.span className="dock-icon" initial={false}
              animate={reducedMotion ? {} : { y: active ? -2 : 0, scale: active ? 1.1 : 1 }}
              transition={spring}>
              <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
            </motion.span>
            <span className="dock-label">{mobileLabel || label}</span>
            {active && <motion.span className="dock-indicator" layoutId="dock-indicator" initial={false} transition={spring} />}
          </motion.a>
        );
      })}
      </motion.div>
    </nav>
  );
}

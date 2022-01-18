import * as React from 'react';
import { useRef, useEffect } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
// import { useDimensions } from "./use-dimensions";
import { MenuToggle } from './MenuButton';
import { MenuNav } from './MenuNav';

export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <AnimatePresence>
    <motion.div
      className="cs-nav"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="cs-sidemenu-bg flex justify-end items-end"
        variants={sidebar}
      ></motion.div>
      {<MenuNav toggle={() => toggleOpen()} />}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>

    </AnimatePresence>
  );
};

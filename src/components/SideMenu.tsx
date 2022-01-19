import * as React from 'react';
import { useRef, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';

import { MenuToggleButton } from './MenuButton';
import { MenuItem } from './MenuItem';
import { MenuItems } from '../../common';

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
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const navVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};
export const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      className="lg:hidden overflow-y-hidden"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
        <motion.div
          className="absolute top-0 right-0 w-2/3 md:w-1/2 z-30 bg-white bg-opacity-95 dark:bg-blue-950 h-full"
          variants={sidebar}
        >
          <motion.div variants={navVariants} className="mt-16 p-8">
            {MenuItems.map((item, i) => (
              <MenuItem
                i={i}
                key={`MenuItem-${i}`}
                item={item}
                toggle={toggleOpen}
              />
            ))}
          </motion.div>
        </motion.div>
        {isOpen && (
          <motion.div className="absolute top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-10" onClick={() => toggleOpen()}></motion.div>
        )}
        <MenuToggleButton toggle={() => toggleOpen()} />
    </motion.div>
  );
};

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { translateMaker, changeLanguage } from '../utils';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [ '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ i, toggle, item }) => {
  const style = { borderBottom: `2px solid ${colors[i]}` };
  const router = useRouter();
  const t = translateMaker(router);

  return (
    <motion.div
      className="mb-8 flex justify-center"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div style={style}  onClick={toggle}>
          <Link href={item.url}>
            <a
              href="#"
              className={`cursor-pointer text-lg font-medium hover:text-gray-900 hover:dark:text-white ${
                router.pathname === item.url
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-400 dark:text-gray-400'
              }`}
            >
              {t[item.label]}
            </a>
          </Link>

      </div>
    </motion.div>
  );
};

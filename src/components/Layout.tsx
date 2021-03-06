import type { NextComponentType } from 'next';
import AudioPlayer from './AudioPlayer';
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';
import { fadeInVariants } from '../../common';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: NextComponentType = ({ children }) => {
  const systemState = useSelector((state: RootState) => state.systemReducer);
  const { isShowPlayer } = systemState;
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {isShowPlayer && (
          <motion.div
            className="fixed bottom-0 left-0 z-20 w-full"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fadeInVariants}
          >
            <AudioPlayer />
          </motion.div>
        )}
      </AnimatePresence>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

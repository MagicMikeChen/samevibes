import type { NextComponentType } from 'next';
import AudioPlayer from './AudioPlayer';

const Layout: NextComponentType = ({ children }) => {
  return (
    <div>
      <div className='fixed bottom-0 left-0 z-20 w-full'>
        <AudioPlayer/>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

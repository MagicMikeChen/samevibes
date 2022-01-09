import type { NextComponentType } from 'next';
import AudioPlayer from './AudioPlayer';
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';

const Layout: NextComponentType = ({ children }) => {
  const systemState = useSelector((state: RootState) => state.systemReducer);
  const { isShowPlayer } = systemState;
  return (
    <div>
      {isShowPlayer && (
        <div className="fixed bottom-0 left-0 z-20 w-full">
          <AudioPlayer />
        </div>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;

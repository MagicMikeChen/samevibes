import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { toggleLike } from '../../store/actionCreators/postAction';
import { translateMaker } from '../utils';
import { IPost } from '../../store/reducers/reducerTypes';
import {
  setAudioTrack,
  setPlayerOpen,
} from '../../store/actionCreators/systemAction';

type PostContentProps = {
  postItem: IPost;
  isScrollUp: boolean;
  scrollToTop?: (event: React.MouseEvent<HTMLElement>) => void;
};
const PostContent = (props: PostContentProps) => {
  const { scrollToTop } = props;
  const { isScrollUp } = props;
  const {
    userId,
    userName,
    userAvatar,
    postType,
    contentObj,
    isLiked,
    postId,
  } = props.postItem;
  const router = useRouter();
  const t = translateMaker(router);

  const dispatch = useDispatch();

  const dispatchAudioTrack = () => {
    dispatch(setAudioTrack(contentObj));
    dispatch(setPlayerOpen());
  };

  const dispatchToggleLike = (postId) => {
    dispatch(toggleLike(postId));
  };
  return (
    <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 text-grey-900 dark:text-white divide-y divide-gray-300 dark:divide-gray-500">
      <div className="px-4 py-2 lg:py-4">
        <div className="flex content-center items-center text-center py-4">
          {isScrollUp ? (
            <div
              className="relative h-16 w-16 lg:h-20 lg:w-20 2xl:h-28 2xl:w-28 min-w-min aspect-square"
              onClick={scrollToTop}
            >
              {userAvatar.length > 0 && (
                <Image
                  className="rounded-full cursor-pointer"
                  src={userAvatar}
                  alt="me"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          ) : (
            <Link href={`/user/${userId}`} passHref>
              <div className="relative h-16 w-16 lg:h-20 lg:w-20 2xl:h-28 2xl:w-28 min-w-min aspect-square">
                {userAvatar.length > 0 && (
                  <Image
                    className="rounded-full cursor-pointer"
                    src={userAvatar}
                    alt="me"
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
            </Link>
          )}
          <div className="flex-col justify-start text-left pl-4">
            {postType === 'album' ? (
              <div className="lg:text-lg">
                <span className="">{userName}</span>
                <span className="pl-2">{t['txt-listen']}</span>
                <span className="pl-1">{contentObj.audioTitle}</span>
              </div>
            ) : (
              <div className="lg:text-lg">
                <span className="">{userName}</span>
                <span className="pl-2">will attend</span>
                <span className="pl-1">{contentObj.contentTitle}</span>
              </div>
            )}
          </div>
        </div>
        {postType === 'album' ? (
          <div className="flex pb-4">
            <div className="flex items-center pl-20 lg:pl-24 2xl:pl-32">
              <div
                className="relative h-20 w-20 lg:h-24 lg:w-24 2xl:h-28 2xl:w-28 min-w-min aspect-square cursor-pointer group"
                onClick={dispatchAudioTrack}
              >
                <div className="text-white opacity-0 group-hover:opacity-100 absolute left-[calc(55%_-_1rem)] top-[calc(52%_-_1rem)] z-10">
                  <FontAwesomeIcon
                    icon={['fas', 'play-circle']}
                    className="icon-common  w-6 h-6 mr-2"
                  ></FontAwesomeIcon>
                  {/* <FontAwesomeIcon
                  icon={['fas', 'pause-circle']}
                  className="icon-common  w-6 h-6 mr-2"
                ></FontAwesomeIcon> */}
                </div>

                {contentObj.audioImage.length > 0 && (
                  <Image
                    className="rounded-md"
                    src={`/img/${contentObj.audioImage}.jpeg`}
                    alt="me"
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
              <div className="pl-4 lg:text-lg">
                <div>{contentObj.audioTitle}</div>
                <div className="text-gray-400">{contentObj.album}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pb-1">
            <div className="w-full aspect-video relative">
              {contentObj.contentPhoto.length > 0 && (
                <Image
                  src={`/img/${contentObj.contentPhoto}.jpg`}
                  sizes="100%"
                  alt="content"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div
          className="cs-post-btn-style rounded-bl-xl flex justify-center text-lg"
          onClick={() => dispatchToggleLike(postId)}
        >
          {isLiked ? (
            <FontAwesomeIcon
              icon={['fas', 'thumbs-up']}
              className="icon-common  w-6 h-6 mr-2"
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={['far', 'thumbs-up']}
              className="icon-common  w-6 h-6 mr-2"
            ></FontAwesomeIcon>
          )}
          {t['txt-like']}
        </div>
        <div className="cs-post-btn-style rounded-br-xl flex justify-center text-lg">
          <FontAwesomeIcon
            icon={['far', 'comment']}
            className="icon-common  w-6 h-6 mr-2"
          ></FontAwesomeIcon>
          {t['txt-comment']}
        </div>
      </div>
    </div>
  );
};

export default PostContent;

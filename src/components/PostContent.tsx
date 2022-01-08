import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { translateMaker } from '../utils';
import { IPost } from '../../store/reducers/reducerTypes';
type PostContentProps = {
  postItem: IPost;
};

const PostContent = (props: PostContentProps) => {
  const { userName, userAvatar, postType, contentObj, isLiked } =
    props.postItem;
  const router = useRouter();
  const t = translateMaker(router);
  return (
    <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 text-grey-900 dark:text-white divide-y divide-gray-300 dark:divide-gray-500">
      <div className="px-4 py-2 lg:py-4">
        <div className="flex content-center items-center text-center py-4">
          <div className="relative h-16 w-16 lg:h-20 lg:w-20 2xl:h-28 2xl:w-28 min-w-min aspect-square">
            {userAvatar.length > 0 && (
              <Image
                className="rounded-full"
                src={userAvatar}
                alt="me"
                layout="fill"
                // width={120}
                // height={120}
                objectFit="cover"
              />
            )}
          </div>
          <div className="flex-col justify-start text-left pl-4">
            <div className="lg:text-lg">
              <span className="">{userName}</span>
              <span className="pl-2">{t['txt-listen']}</span>
              <span className="pl-1">{contentObj.audioTitle}</span>
            </div>
          </div>
        </div>
        <div className="flex pb-4">
          <div className="flex items-center pl-20 lg:pl-24 2xl:pl-32">
            <div className="relative h-20 w-20 lg:h-24 lg:w-24 2xl:h-28 2xl:w-28 min-w-min aspect-square">
              {contentObj.audioImage.length > 0 && (
                <Image
                  className="rounded-md"
                  src={`/img/${contentObj.audioImage}.jpeg`}
                  alt="me"
                  layout="fill"
                  // width={120}
                  // height={120}
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
      </div>
      <div className="flex justify-center">
        <div className="cs-post-btn-style rounded-bl-xl flex justify-center text-lg">
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

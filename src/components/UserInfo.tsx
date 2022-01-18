import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import { translateMaker } from '../../src/utils';
import { toRightVariants } from '../../common';
import { ICurUser } from '../../store/reducers/reducerTypes';

interface UserInfoProps {
  userProfile: ICurUser;
}
const UserInfo: React.FC<UserInfoProps> = (props) => {
  const router = useRouter();
  const t = translateMaker(router);
  const {
    userIntro,
    userCompany,
    userEducation,
    userLocation,
    userInstagram,
    userRelationship,
    userFavAlbums,
  } = props.userProfile;
  return (
    <React.Fragment>
      <motion.div
        className="flex-col lg:w-5/12"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={toRightVariants}
      >
        <div className="cs-block-style-white-theme dark:cs-block-style-grey-900">
          <div className="text-center w-full p-4">{userIntro}</div>
        </div>
        <div className="cs-block-style-white-theme dark:cs-block-style-grey-900">
          <div className="flex flex-col p-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={['fas', 'briefcase']}
                className="icon-common mr-2 mt-1"
              ></FontAwesomeIcon>
              <div>{userCompany}</div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={['fas', 'graduation-cap']}
                className="icon-common mr-2 mt-1"
              ></FontAwesomeIcon>
              <div>{userEducation}</div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={['fas', 'map-marker-alt']}
                className="icon-common mr-2 mt-1"
              ></FontAwesomeIcon>
              <div>{userLocation}</div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className="icon-common mr-2 mt-1"
              ></FontAwesomeIcon>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.instagram.com/${userInstagram}`}
              >
                {userInstagram}
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={['fas', 'heart']}
                className="icon-common mr-2 mt-1"
              ></FontAwesomeIcon>
              <div>{userRelationship}</div>
            </div>
          </div>
        </div>
        <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 mt-4">
          <div className="flex flex-col p-4">
            <div>{t['txt-favorite-album']}</div>
            <div>
              <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-4">
                {userFavAlbums.map((item, i) => {
                  return (
                    <div key={i} className="relative min-w-min aspect-square">
                      <Image
                        className="rounded-sm"
                        src={`/img/${item.audioImage}.jpeg`}
                        alt={item.audioTitle}
                        layout="fill"
                        // width={120}
                        // height={120}
                        objectFit="cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default UserInfo;

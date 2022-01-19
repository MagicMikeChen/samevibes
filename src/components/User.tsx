import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import ProfileForm from '../../src/components/ProfileForm';
import PostContent from '../../src/components/PostContent';
import { translateMaker } from '../../src/utils';
import { myDemoPosts, toTopVariants, fadeInVariants } from '../../common';
import { RootState } from '../../store/reducers';
import { getProfilePosts } from '../../store/actionCreators/postAction';
import UserInfo from '../components/UserInfo';
import { ICurUser } from '../../store/reducers/reducerTypes';

interface UserProps {
  userProfile: ICurUser;
  isScrollUp: boolean;
  isProfile?: boolean;
}
const User: React.FC<UserProps> = (props) => {
  const { isScrollUp = false, isProfile } = props;
  const { userAvatar, userName } = props.userProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfilePosts(myDemoPosts));
  }, []);

  const profilePosts = useSelector(
    (state: RootState) => state.postsState.profilePosts
  );

  const router = useRouter();
  const t = translateMaker(router);

  const scrollToTop = () => {
    document.getElementById('scroller').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  const [isSticky, setSticky] = useState(false);
  const handleEnter = () => {
    setSticky(false);
  };
  const handleLeave = () => {
    setSticky(true);
  };
  return (
    <React.Fragment>
      <AnimatePresence>
        {isSticky && (
          <motion.div
            aria-label="Breadcrumb"
            className={`cs-navbar-style-light dark:cs-navbar-style-dark flex justify-between px-2 lg:px-16 fixed top-[60px] z-10 `}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fadeInVariants}
          >
            <div className="flex cursor-pointer" onClick={scrollToTop}>
              <div className="relative h-12 w-12 my-1 items-center justify-center content-center">
                <Image
                  className="rounded-full"
                  src={userAvatar}
                  alt="me"
                  layout="fill"
                  // width={120}
                  // height={120}
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center ml-4">{userName}</div>
            </div>
            <div>
              <div className={`my-2 flex flex-row justify-between`}>
                {isProfile ? (
                  <div className="flex mx-2 cs-btn-border-style items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'user-edit']}
                      className="icon-common mr-2 "
                    ></FontAwesomeIcon>
                    <div></div>
                    <div className="">Edit Profile</div>
                  </div>
                ) : (
                  <div className="flex mx-2 cs-btn-border-style items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'user-friends']}
                      className="icon-common mr-2 "
                    ></FontAwesomeIcon>
                    <div></div>
                    <div className=""> {t['txt-add-friend']}</div>
                  </div>
                )}
                {/* <div className="flex mx-2 cs-btn-border-style items-center">
                  <FontAwesomeIcon
                    icon={['fas', 'comments']}
                    className="icon-common mr-2"
                  ></FontAwesomeIcon>
                  <div></div>
                  {t['txt-message']}
                </div> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        id="scroller"
        className="container mx-auto overflow-y-auto h-full no-scrollbar pt-16"
      >
        <div className="flex-col pt-4">
          {/* <ProfileForm /> */}
          <motion.div
            className="cs-block-style-white-theme dark:cs-block-style-grey-900 text-grey-900 dark:text-white mb-4 flex-col"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fadeInVariants}
          >
            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 2xl:h-40 2xl:w-40 my-4">
                <Image
                  className="rounded-full"
                  src={userAvatar}
                  alt="me"
                  layout="fill"
                  // width={120}
                  // height={120}
                  objectFit="cover"
                />
              </div>
              <div className="text-center text-lg font-medium mt-2">
                {userName}
              </div>
              <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
              <div className={`text-center my-4 flex flex-row`}>
                {isProfile ? (
                  <div className="flex mx-2 cs-btn-border-style items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'user-edit']}
                      className="icon-common mr-2 "
                    ></FontAwesomeIcon>
                    <div></div>
                    <div className="">Edit Profile</div>
                  </div>
                ) : (
                  <div className="flex mx-2 cs-btn-border-style items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'user-friends']}
                      className="icon-common mr-2 "
                    ></FontAwesomeIcon>
                    <div></div>
                    <div className=""> {t['txt-add-friend']}</div>
                  </div>
                )}
                {/* <div className="flex items-center mx-2 cs-btn-border-style">
                  <FontAwesomeIcon
                    icon={['fas', 'comments']}
                    className="icon-common mr-2"
                  ></FontAwesomeIcon>
                  <div></div>
                  {t['txt-message']}
                </div> */}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-between mt-2">
            <UserInfo userProfile={props.userProfile}></UserInfo>
            <div className="flex-col lg:w-7/12 mt-4 lg:mt-0 lg:ml-4 pb-20">
              <motion.div
                className="cs-block-style-white-theme dark:cs-block-style-grey-900"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={toTopVariants}
              >
                <div className="flex flex-col">
                  <div className="p-4">{t['txt-posts']}</div>
                  {profilePosts.map((postItem) => {
                    return (
                      <div key={postItem.postId} className="mb-4">
                        <PostContent
                          postItem={postItem}
                          isScrollUp={isScrollUp}
                          scrollToTop={scrollToTop}
                        ></PostContent>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;

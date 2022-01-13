import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../src/components/Navbar';
import ProfileForm from '../src/components/ProfileForm';
import PostContent from '../src/components/PostContent';
import { translateMaker } from '../src/utils';
import {
  myDemoPosts,
  toTopVariants,
  toRightVariants,
  toBottomVariants,
} from '../common';
import { RootState } from '../store/reducers';
import { getProfilePosts } from '../store/actionCreators/postAction';

const Profile: NextPage = () => {
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
    setSticky(true);
  };
  const handleLeave = () => {
    setSticky(false);
  };
  return (
    <div className="cs-main-bg-theme fixed pb-24">
      <Head>
        <title>SameVibes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <nav
        aria-label="Breadcrumb"
        className={`cs-navbar-style-light dark:cs-navbar-style-dark flex justify-between px-2 lg:px-16 fixed z-10 ${
          isSticky ? 'hidden' : ''
        }`}
      >
        <div className="flex cursor-pointer" onClick={scrollToTop}>
          <div className="relative h-12 w-12 my-1 items-center justify-center content-center">
            <Image
              className="rounded-full"
              src="/img/me.jpg"
              alt="me"
              layout="fill"
              // width={120}
              // height={120}
              objectFit="cover"
            />
          </div>
          <div className="flex items-center ml-4">Mike Chen</div>
        </div>
        <div>
          <div className={`my-2 flex flex-row justify-between`}>
            <div className="flex mx-2 cs-btn-border-style items-center">
              <FontAwesomeIcon
                icon={['fas', 'user-friends']}
                className="icon-common mr-2 "
              ></FontAwesomeIcon>
              <div></div>
              <div className="">{t['txt-add-friend']}</div>
            </div>{' '}
            <div className="flex mx-2 cs-btn-border-style items-center">
              <FontAwesomeIcon
                icon={['fas', 'comments']}
                className="icon-common mr-2"
              ></FontAwesomeIcon>
              <div></div>
              {t['txt-message']}
            </div>
          </div>
        </div>
      </nav>

      <div
        id="scroller"
        className="container mx-auto overflow-y-auto h-full no-scrollbar"
      >
        <div
          className="flex-col pt-4"
        >
          {/* <ProfileForm /> */}
          <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 text-grey-900 dark:text-white mb-4 flex-col">
            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 2xl:h-40 2xl:w-40 my-4">
                <Image
                  className="rounded-full"
                  src="/img/me.jpg"
                  alt="me"
                  layout="fill"
                  // width={120}
                  // height={120}
                  objectFit="cover"
                />
              </div>
              <div className="text-center text-lg font-medium mt-2">
                Mike Chen
              </div>
              <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
              <div className={`text-center my-4 flex flex-row`}>
                <div className="flex items-center mx-2 cs-btn-border-style">
                  <FontAwesomeIcon
                    icon={['fas', 'user-friends']}
                    className="icon-common mr-2"
                  ></FontAwesomeIcon>
                  <div></div>
                  <div className="">{t['txt-add-friend']}</div>
                </div>{' '}
                <div className="flex items-center mx-2 cs-btn-border-style">
                  <FontAwesomeIcon
                    icon={['fas', 'comments']}
                    className="icon-common mr-2"
                  ></FontAwesomeIcon>
                  <div></div>
                  {t['txt-message']}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-2">
            <motion.div
              className="flex-col lg:w-5/12"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={toRightVariants}
            >
              <div className="cs-block-style-white-theme dark:cs-block-style-grey-900">
                <div className="text-center w-full p-4">
                  My name is Mike Chen, I am a photographer and software
                  developer in Taipei.
                </div>
              </div>
              <div className="cs-block-style-white-theme dark:cs-block-style-grey-900">
                <div className="flex flex-col p-4">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'briefcase']}
                      className="icon-common mr-2"
                    ></FontAwesomeIcon>
                    <div></div>Work
                  </div>{' '}
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'graduation-cap']}
                      className="icon-common mr-2"
                    ></FontAwesomeIcon>
                    <div></div>School
                  </div>{' '}
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'map-marker-alt']}
                      className="icon-common mr-2"
                    ></FontAwesomeIcon>
                    <div></div>Living
                  </div>{' '}
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="icon-common mr-2"
                    ></FontAwesomeIcon>
                    <div></div>Instagram
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'heart']}
                      className="icon-common mr-2"
                    ></FontAwesomeIcon>
                    <div></div>Single
                  </div>
                </div>
              </div>
              <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 mt-4">
                <div className="flex flex-col p-4">
                  <div>{t['txt-favorite-album']}</div>
                  <div>
                    <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
                        return (
                          <div
                            key={i}
                            className="relative min-w-min aspect-square"
                          >
                            <Image
                              className="rounded-md"
                              src="/img/album-01.jpg"
                              alt="me"
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
            <div className="flex-col lg:w-7/12 mt-4 lg:mt-0 lg:ml-4 mb-8">
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
                        <PostContent postItem={postItem}></PostContent>
                      </div>
                    );
                  })}
                  {/* <div className="mb-4 px-4">
                    <PostContent></PostContent>
                  </div>
                  <div className="mb-4 px-4">
                    <PostContent></PostContent>
                  </div>{' '}
                  <div className="mb-4 px-4">
                    <PostContent></PostContent>
                  </div>{' '}
                  <div className="mb-4 px-4">
                    <PostContent></PostContent>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

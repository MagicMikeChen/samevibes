import type { NextPage } from 'next';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from "react-redux";

import Navbar from '../src/components/Navbar';
import ProfileForm from '../src/components/ProfileForm';
import FriendsList from '../src/components/FriendsList';
import PostContent from '../src/components/PostContent';
import { fetchPosts } from '../store/actionCreators/postAction';
import { RootState } from '../store/reducers';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchPosts([
        {
          postId: 123,
          userId: 222,
          name: '666',
          type: 0,
          content: '',
          loading: false,
          error: '',
        },        {
          postId: 666,
          userId: 111,
          name: '000',
          type: 0,
          content: '',
          loading: false,
          error: '',
        },
      ])
    );
  }, []);
  const postsState = useSelector((state: RootState)=> state.postsState);

  return (
    <div className="cs-main-bg-theme pb-8">
      <Head>
        <title>Music body</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="flex-col">
          {/* <ProfileForm/> */}
          <div className="">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex-col lg:w-8/12">
                <div className="cs-post-scroll-height overflow-y-auto no-scrollbar pt-4">
                  <PostContent></PostContent>
                  <PostContent></PostContent>
                  <PostContent></PostContent>
                  <PostContent></PostContent>
                  <PostContent></PostContent>
                </div>
              </div>
              <div className="flex-col lg:w-4/12 h-full pt-4">
                <FriendsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

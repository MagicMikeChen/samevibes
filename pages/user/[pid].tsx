import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../src/components/Navbar';
import User from '../../src/components/User';
import {getCurUser} from '../../store/actionCreators/userAction';
import { RootState } from '../../store/reducers';

const UserId: NextPage = () => {
  
  const router = useRouter();
  const { pid } = router.query;
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurUser(pid));
  }, []);

  const curUserProfile = useSelector((state: RootState) => state.userReducer.curUser);

  return (
    <div className="cs-main-bg-theme fixed pb-12">
      <Head>
        <title>SameVibes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <User userProfile={curUserProfile}></User>
    </div>
  );
};

export default UserId;
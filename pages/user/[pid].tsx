import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../src/components/Navbar';
import User from '../../src/components/User';
import {getCurUser} from '../../store/actionCreators/userAction';
import { RootState } from '../../store/reducers';
import {SideMenu} from '../../src/components/SideMenu';

const UserId: NextPage = () => {
  
  const router = useRouter();
  const { pid } = router.query;
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurUser(pid));
  }, []);

  const curUserProfile = useSelector((state: RootState) => state.userReducer.curUser);

  return (
    <div className="cs-main-bg-theme">
      <Head>
        <title>SameVibes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <SideMenu></SideMenu>
      <User userProfile={curUserProfile} isNotHome={true} isProfile={false}></User>
    </div>
  );
};

export default UserId;

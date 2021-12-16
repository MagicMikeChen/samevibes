import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-950 to-blue-950">
      <Head>
        <title>Music body</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="flex mt-16" >
          <div className="h-80 w-full bg-gray-900 bg-opacity-30 rounded-xl backdrop-blur-2xl mx-4 py-4 px-4 cs-border-zinc-t-600">
            <div className="relative mt-8 mx-2">
              <input id="username" name="username" type="text" className="peer h-10 w-full border-b-2 bg-transparent border-gray-400 text-white placeholder-transparent focus:outline-none focus:border-grey-700" placeholder="name" />
              <label className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">User name</label>
            </div>
            <div className="relative mt-8 mx-2">
              <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 bg-transparent border-gray-400 text-white placeholder-transparent focus:outline-none focus:border-grey-500" placeholder="john@doe.com" />
              <label className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Email address</label>
            </div>
            <div className="base text-white mt-8 mx-2">Gender</div>
            <div className="cs-border-btn-t-100 rounded-xl text-lg font-medium text-gray-400 py-2 px-2 mt-2 mx-2">
              <div>Choose</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

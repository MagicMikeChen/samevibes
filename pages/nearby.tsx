import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';


const Nearby: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-amber-950 to-blue-950 pb-8">
      <Head>
        <title>Music body</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="flex-col">
         
        </div>
      </div>
    </div>
  );
};

export default Nearby;

import React from 'react';
import Sidebar from '@components/Sidebar';
import Rightbar from '@components/Rightbar';
import Topbar from '@components/Topbar';
import Feed from '@components/Feed';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer flex w-full">
        <Sidebar />
        <Feed />
        <Rightbar profile={false} />
      </div>
    </>
  );
}

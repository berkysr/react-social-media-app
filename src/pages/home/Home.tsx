import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';

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

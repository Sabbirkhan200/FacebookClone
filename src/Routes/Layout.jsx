import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from '../components/FeedsNews/Feed';

import EGMeet from '../components/SideBar/EgMeet/EGMeet';
import Groups from '../components/SideBar/Groups/Groups';
import People from '../components/SideBar/People/People';

import Photo from '../components/SideBar/Photo/Photo';
import Podcast from '../components/SideBar/Podcast/Podcast';
import Video from '../components/SideBar/Video/Video';
const Layout = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/people" element={<People/>} />
      <Route path="/EGmeet" element={<EGMeet />} />
      <Route path="/video" element={<Video />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/podcast" element={<Podcast />} />
 
    
    
      </Routes>
  </BrowserRouter>
  )
}   

export default Layout
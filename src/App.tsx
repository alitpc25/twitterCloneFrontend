import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import React from 'react';
import { useAppSelector } from './redux/hooks';
import GlobalRightColBox from './components/GlobalRightColBox';
import GlobalLeftColBox from './components/GlobalLeftColBox';
import { BsTwitter } from 'react-icons/bs'
import { TbHome2 } from 'react-icons/tb'
import { FaHashtag, FaFeatherAlt,FaRegUserCircle } from 'react-icons/fa'
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdOutlineMail } from "react-icons/md"
import { BsBookmarks} from "react-icons/bs"
import { RiFileListLine } from "react-icons/ri"
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import HomeInnerPage from './pages/HomeInnerPage';
import ProfileInnerPage from './pages/ProfileInnerPage';
import MoreDropdownButton from './components/MoreDropdownButton';

function App() {

  const user = useAppSelector(state => state.user)
  
  if(!user.loggedIn) {
    return (
      <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Login />} />
              </Routes>
            </BrowserRouter>
      </div>
    )
  }
  
  return (
    <div className="App">
      <div className="flex flex-row divide-x">
            <div id="leftPart" className="basis-1/4">
                <GlobalLeftColBox icon={BsTwitter} text={null} routeTo="/"></GlobalLeftColBox>
                <GlobalLeftColBox icon={TbHome2} text="Home" routeTo="/"></GlobalLeftColBox>
                <GlobalLeftColBox icon={FaHashtag} text="Explore" routeTo="/explore"></GlobalLeftColBox>
                <GlobalLeftColBox icon={IoMdNotificationsOutline} text="Notifications" routeTo="/notifications"></GlobalLeftColBox>
                <GlobalLeftColBox icon={MdOutlineMail} text="Messages" routeTo="/messages"></GlobalLeftColBox>
                <GlobalLeftColBox icon={BsBookmarks} text="Bookmarks" routeTo="/bookmarks"></GlobalLeftColBox>
                <GlobalLeftColBox icon={RiFileListLine} text="Lists" routeTo="/lists"></GlobalLeftColBox>
                <GlobalLeftColBox icon={FiSettings} text="Settings" routeTo="/settings"></GlobalLeftColBox>
                
                <MoreDropdownButton>
                  <GlobalLeftColBox icon={HiOutlineDotsCircleHorizontal} text="More"></GlobalLeftColBox>
                </MoreDropdownButton>

                <GlobalLeftColBox icon={FaFeatherAlt} text="Tweet"></GlobalLeftColBox>

                <GlobalLeftColBox icon={FaRegUserCircle} text={user.username} routeTo="/profile"></GlobalLeftColBox>
            </div>
            <div id="feed" className="basis-2/4">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomeInnerPage />} />
                <Route path="/profile" element={<ProfileInnerPage user={user} />} />
                <Route path="*" element={<HomeInnerPage />} />
              </Routes>
            </BrowserRouter>
            </div>
            <div id="rightPart" className="basis-1/4">
                <GlobalRightColBox></GlobalRightColBox>
            </div>
        </div>
    </div>
  );
}

export default App;

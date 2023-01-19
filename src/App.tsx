import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import React from 'react';
import { useAppSelector } from './hooks';
import GlobalRightColBox from './components/GlobalRightColBox';
import GlobalLeftColBox from './components/GlobalLeftColBox';
import { BsTwitter } from 'react-icons/bs'
import { TbHome2 } from 'react-icons/tb'
import { FaHashtag, FaFeatherAlt,FaRegUserCircle } from 'react-icons/fa'
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdOutlineMail } from "react-icons/md"
import { BsBookmarks} from "react-icons/bs"
import { RiFileListLine } from "react-icons/ri"
import { CiCircleMore } from "react-icons/ci"
import { FiSettings } from "react-icons/fi"
import HomeInnerPage from './pages/HomeInnerPage';
import ProfileInnerPage from './pages/ProfileInnerPage';

function App() {

  const user = useAppSelector(state => state.user)
  /*
    const dispatch = useAppDispatch()

    useEffect(() => {
        
        axios.get(`/api/v1/users`, { headers: {"Authorization" : `Bearer ${user.jwtToken}`} })
        .then(res => {
          setUsers(res.data);
        }).catch(err => {
            console.log(err)
            let userState = {
                username: null,
                jwtToken: null,
                loggedIn: false
            }
            dispatch(updateUserInfo(userState))
        })
      }, []);
      */

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
                <GlobalLeftColBox icon={CiCircleMore} text="More" routeTo="/more"></GlobalLeftColBox>
                <GlobalLeftColBox icon={FaFeatherAlt} text="Tweet" routeTo="/tweet"></GlobalLeftColBox>
                <GlobalLeftColBox icon={FaRegUserCircle} text={user.username} routeTo="/profile"></GlobalLeftColBox>
            </div>
            <div id="feed" className="basis-2/4">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={user.loggedIn ? <HomeInnerPage /> : <Login />} />
                <Route path="/login" element={user.loggedIn ? <HomeInnerPage /> : <Login />} />
                <Route path="/register" element={user.loggedIn ? <HomeInnerPage /> : <Register />} />
                <Route path="/profile" element={user.loggedIn ? <ProfileInnerPage user={user} /> : <Login />} />
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

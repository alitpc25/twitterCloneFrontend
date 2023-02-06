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
import HomeInnerPage from './pages/HomeInnerPage';
import ProfileInnerPage from './pages/ProfileInnerPage';
import GlobalLeftCol from './components/GlobalLeftCol';

function App() {

  const user = useAppSelector(state => state.user)

  if (!user.loggedIn) {
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
      <div className="flex flex-row divide-x h-screen flex">
        <div id="leftPart" className="basis-1/4">
          <GlobalLeftCol user={user}></GlobalLeftCol>
        </div>
        <div id="feed" className="basis-2/4 flex-1 flex overflow-hidden">
          <div className='flex-1 overflow-y-scroll'>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomeInnerPage />} />
                <Route path="/profile" element={<ProfileInnerPage user={user} />} />
                <Route path="*" element={<HomeInnerPage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
        <div id="rightPart" className="basis-1/4">
          <GlobalRightColBox></GlobalRightColBox>
        </div>
      </div>
    </div>
  );
}

export default App;

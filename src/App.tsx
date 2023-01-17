import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import React from 'react';
import { useAppSelector } from './hooks';

function App() {

  const user = useAppSelector(state => state.user)

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user.loggedIn ? <Home /> : <Login />} />
            <Route path="/login" element={user.loggedIn ? <Home /> : <Login />} />
            <Route path="/register" element={user.loggedIn ? <Home /> : <Register />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

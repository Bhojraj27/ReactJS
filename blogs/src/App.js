import React from 'react'
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './components/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Posts from './components/posts/Posts';
export default function App() {
  const user=false;
  return (
<BrowserRouter>
<TopBar/>
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
    <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
    <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
    <Route path="/settings" element={ user ?<Settings/> :<Register/>}></Route>
    <Route path="/post/:postId" element={<Single/>}></Route>

  </Routes>

</BrowserRouter>

  )
}

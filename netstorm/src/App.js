import React from "react";
import Home from "./pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Explore1 from "./pages/Explore/Explore1";
import Explore2 from "./pages/Explore/Explore2";
import Explore3 from "./pages/Explore/Explore3";
import Explore4 from "./pages/Explore/Explore4";
import ExploreLiveAuction from "./pages/Explore/ExploreLiveAuction";
import ItemDetails from "./pages/Explore/ItemDetails";
import Blog from "./pages/Community/Blog";
import BlogSingle from "./pages/Community/BlogSingle";
import HelpCenter from "./pages/Community/HelpCenter";
import Authors from "./pages/UserPages/Authors";
import Author from "./pages/UserPages/Author";
import WalletConnect from "./pages/UserPages/WalletConnect";
import Create from "./pages/UserPages/Create";
import Login from "./pages/UserPages/Login";
import Signup from "./pages/UserPages/Signup";
import Activity from "./pages/Activity/Activity";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/activity" element={<Activity/>}/>
          <Route path="/explore-style-1" element={<Explore1/>}/>
          <Route path="/explore-style-2" element={<Explore2/>}/>
          <Route path="/explore-style-3" element={<Explore3/>}/>
          <Route path="/explore-style-4" element={<Explore4/>}/>
          <Route path="/live-auction" element={<ExploreLiveAuction/>}/>
          <Route path="/item-details" element={<ItemDetails/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog-single" element={<BlogSingle/>}/>
          <Route path="/help-center" element={<HelpCenter/>}/>
          <Route path="/authors" element={<Authors/>}/>
          <Route path="/author" element={<Author/>}/>
          <Route path="/wallet-connect" element={<WalletConnect/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

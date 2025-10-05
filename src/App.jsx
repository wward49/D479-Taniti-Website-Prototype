import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Booking from './pages/Booking';
import Section from './pages/Section';
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx'
import ImageScroller from "./components/ImageScroller";


function App(){
  return(
    <>
    <ScrollToTop/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/section/:slug" element={<Section />} />
    </Routes>

    </>
  );

}

export default App;



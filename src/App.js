import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import {Parent} from './Styled'
import { Link, Routes, Route } from "react-router-dom";
import Gallery from './Gallery/Gallery';
import Blog from "./Blog/Blog"
import Donate from "./Donate/Donate"

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/StraysofGhaziabad/" element={<Home />} />
      <Route path="/StraysofGhaziabad/gallery" element={<Gallery />} />
      <Route path="/StraysofGhaziabad/blog" element={<Blog />} />
      <Route path="/StraysofGhaziabad/donate" element={<Donate />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App

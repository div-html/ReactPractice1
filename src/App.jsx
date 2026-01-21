import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import CenterText from './components/CenterText'
import ImageCarousel from './components/ImageCarousel'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <CenterText />
      <ImageCarousel />
    </BrowserRouter>
  )
}

export default App

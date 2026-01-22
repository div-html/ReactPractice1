import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import CenterText from './components/CenterText'
import Section from './components/Section';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <CenterText />
      <Section />
    </BrowserRouter>
  )
}

export default App

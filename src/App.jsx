import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import Section from './components/Section';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Section />
    
      
    </BrowserRouter>
  )
}

export default App

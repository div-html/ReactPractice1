import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Section = () => {
  return (
    <>
    <nav className="flex flex-col gap-5 text-white h-screen w-72 bg-zinc-950 px-5 py-7 border-gray-200">
      <NavLink 
        to="/Introduction" 
        className={({ isActive }) => 
          isActive ? 'bg-zinc-800 text-white px-4 py-2 rounded-lg' : 'text-zinc-400 px-4 py-2'
        }
      >
        
      </NavLink>
      <NavLink>Introduction</NavLink>
      <NavLink>About Me</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Skills and Tools</NavLink>
      <NavLink>Education</NavLink>
      <NavLink>Contact</NavLink>
    </nav>
    </>
  )
}

export default Section

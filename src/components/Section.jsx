import React from "react";
import { NavLink } from "react-router-dom";

const Section = () => {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <nav className="flex flex-col gap-4 text-white w-72 bg-zinc-950 px-5 py-15 pl-5 border-r border-zinc-900 ">
        <NavLink to="/introduction" className="text-zinc-400 hover:text-white">
          Introduction
        </NavLink>
        <NavLink to="/about" className="text-zinc-400 hover:text-white">
          About Me
        </NavLink>
        <NavLink to="/projects" className="text-zinc-400 hover:text-white">
          Projects
        </NavLink>
        <NavLink to="/skills" className="text-zinc-400 hover:text-white">
          Skills and Tools
        </NavLink>
        <NavLink to="/education" className="text-zinc-400 hover:text-white">
          Education
        </NavLink>
        <NavLink to="/contact" className="text-zinc-400 hover:text-white">
          Contact
        </NavLink>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col  px-16 py-15  bg-zinc-950">
        <p className=" text-amber-50 text-4xl font-bold">Divyam Pariyar</p>
        <h1 className="text-4xl text-zinc-400 font-bold mt-2 ">
          Turning ideas into clean, responsive websites
        </h1>
        <p className="mt-6 max-w-2xl text-white ">
          A disciplined and fast-learning Frontend Developer skilled in React,
          Tailwind CSS, JavaScript, HTML, and CSS. With knowledge of SQL, Python,
          and C++, I enjoy solving problems and continuously learning new
          technologies to build efficient and user-friendly web experiences.
        </p>
      </main>

    </div>
  );
};

export default Section;

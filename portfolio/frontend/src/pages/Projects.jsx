import React from "react";
import { NavLink } from "react-router-dom";
import Project from "../components/Project.jsx";

function Projects() {
  return (
    <section className="text-start z-[100]">
      <h3 className="text-4xl font-light">MATIAS CARINI</h3>
      <h2 className="text-2xl font-extralight">Web Developer @ Frontend</h2>
      <p>Here are some projects that I have worked on.</p>
      <ul className="mt-6 mx-4 overflow-y-auto overflow-x-hidden max-h-90 p-6 backdrop-blur-md bg-gray-600/20  rounded-lg">
        <Project deployLink="https://www.metalurgicalobato.com.ar/" />
        <Project deployLink="https://restaurant-lilac-five.vercel.app/" />
        <Project deployLink="https://github.com/maticarini" />
        <Project deployLink="https://github.com/matiascarini" />
        <Project deployLink="https://github.com/Matiascarinidev" />
      </ul>
      <p className="mt-6 px-6">
        YES, I KNOW, THEY ARE ALL GITHUB LINKS. I HAVE THREE GITHUB ACCOUNTS,
        DON´T JUDGE ME!
        <br />
        More projects coming soon, I promise! Thanks for visiting my portfolio!
      </p>
      <div>
        <button className="text-lg text-black font-medium mt-6 mr-2 p-2 border hover:border-white rounded-md bg-gray-200 hover:bg-black  hover:text-white transition duration-300 ease-in-out">
          <NavLink to="/contact">Work With Me</NavLink>
        </button>
      </div>
    </section>
  );
}

export default Projects;

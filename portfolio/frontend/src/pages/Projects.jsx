import React from "react";
import { NavLink } from "react-router-dom";
import Project from "../components/Project.jsx";

function Projects() {
  return (
    <section className="text-start">
      <h3 className="text-4xl font-light">MATIAS CARINI</h3>
      <h2 className="text-2xl font-extralight">Web Developer @ Frontend</h2>
      <p>Here are some projects that I have worked on.</p>
      <ul>
        <li>
          <Project deployLink="https://maticarini.github.io/mel_webpage/" />
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <label className="text-lg cursor-pointer">
        See more projects on my{" "}
        <a
          href="https://github.com/MatiCarini"
          className="font-light hover:font-medium hover:underline"
        >
          GitHub
        </a>
      </label>
      <div>
        <button className="text-lg text-black font-medium mt-6 mr-2 p-2 border hover:border-white rounded-md bg-gray-200 hover:bg-black  hover:text-white transition duration-300 ease-in-out">
          <NavLink to="/contact">Work With Me</NavLink>
        </button>
      </div>
    </section>
  );
}

export default Projects;

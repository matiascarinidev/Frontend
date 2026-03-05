import React from "react";
import { NavLink } from "react-router-dom";

function AboutMe() {
  return (
    <section>
      <h2 className="text-3xl">Hello World! I am </h2>

      <h3 className="text-4xl font-light">MATIAS CARINI</h3>
      <h2 className="text-2xl font-extralight">Web Developer @ Frontend</h2>
      <p className="text-xl font-extralight w-1/2 mt-4">
        I’m a tech-driven developer with expertise in <strong>React</strong>,{" "}
        <strong>HTML</strong>, <strong>JavaScript</strong>, and{" "}
        <strong>CSS</strong>. My journey began with{" "}
        <strong>Unity and C#</strong>, where I discovered the thrill of building
        software. Over time, I expanded my skills to{" "}
        <strong>JavaScript and Python</strong>, unlocking endless creative
        possibilities. Now, I channel that passion into crafting{" "}
        <strong>fast, stunning websites</strong> for small businesses,
        freelancers, and e-commerce stores.
      </p>
      <div>
        <button className="text-lg text-black font-medium mt-6 mr-2 p-2 border hover:border-white rounded-md bg-gray-200 hover:bg-black  hover:text-white transition duration-300 ease-in-out">
          <NavLink to="/contact">Work With Me</NavLink>
        </button>
        <button className="text-lg font-medium mt-6 border p-2 rounded-md hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
          <NavLink to="/projects">See my work</NavLink>
        </button>
      </div>
    </section>
  );
}

export default AboutMe;

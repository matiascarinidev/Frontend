import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="text-start">
      <h2 className="text-3xl">Hello World! I am </h2>
      <h3 className="text-4xl font-light">MATIAS CARINI</h3>
      <h2 className="text-2xl font-extralight">Web Developer @ Frontend</h2>
      <p className="text-lg w-1/3 mt-4">
        I am a pasionate web developer focused on creating beautiful and
        functional websites that make small businesses shine. Fast. Affordable.
        Done right.
      </p>
      <div>
        <button className="text-lg text-black font-medium mt-6 mr-2 border-black p-2 rounded-md bg-gray-200 hover:text-white transition duration-300 ease-in-out">
          <NavLink to="/contact">Work With Me</NavLink>
        </button>
        <button className="text-lg font-medium mt-6 border p-2 rounded-md hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
          <NavLink to="/projects">See my work</NavLink>
        </button>
      </div>
    </section>
  );
}

export default Home;

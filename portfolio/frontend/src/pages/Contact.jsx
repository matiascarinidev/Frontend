import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contact() {
  return (
    <section>
      <h3 className="text-4xl font-light">MATIAS CARINI</h3>
      <h2 className="text-2xl font-extralight">Web Developer @ Frontend</h2>
      <p className="text-lg">I’m waiting to hear about your project.</p>
      <p className="text-lg">
        Let's discuss how we can build a website that works for your business.
      </p>
      <ul className="flex flex-col gap-4 mt-6 text-xl">
        <li>
          <p className="flex items-center gap-2 hover:font-light">
            <IoIosMail className="text-3xl" /> matiascarinidev@gmail.com
          </p>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matias-carini/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:font-light  hover:underline"
          >
            <FaLinkedin className="text-3xl" /> Linked in
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;

import { Route, Routes } from "react-router-dom";

//Components
import SideMenu from "./components/SideMenu.jsx";
//Pages
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import BubbleContainer from "./components/BubbleContainer.jsx";

//Styles
import "./App.css";
//Icons
import { FaRegSquare, FaSquare } from "react-icons/fa6";

function App() {
  return (
    <>
      <header>
        <div className="flex justify-end items-center px-4">
          <ul className="flex space-x-4 p-1">
            <li className="flex items-center text-white">
              <FaSquare className="mx-2" />
              default
            </li>
            <li className="flex items-center text-white">
              <FaRegSquare className="mx-2" />
              HTML
            </li>
            <li className="flex items-center text-white">
              <FaRegSquare className="mx-2" />
              CSS
            </li>
            <li className="flex items-center text-white">
              <FaRegSquare className="mx-2" />
              Js
            </li>
          </ul>
        </div>
      </header>
      <main className="flex flex-1 border items-center mx-4 p-8 relative">
        <div className="flex-1">
          <Routes>
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <div className="text-xl">
          <SideMenu />
        </div>
        <BubbleContainer />
      </main>
      <footer>
        <div className="flex justify-center items-center text-white p-1">
          <p>© 2025 Matias Carini. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

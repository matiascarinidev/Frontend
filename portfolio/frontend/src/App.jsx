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

function App() {
  return (
    <>
      <main className="flex flex-1 border items-center mx-4 mt-6 p-8 relative">
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

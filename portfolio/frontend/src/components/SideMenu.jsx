import { NavLink } from "react-router-dom";

function SideMenu() {
  return (
    <nav>
      <ul className="space-y-2 text-white text-end ">
        <li>
          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive ? " font-bold" : "text-white"
              }
            >
              About me
            </NavLink>
          </li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " font-bold" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-bold" : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? " font-bold" : "text-white"
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default SideMenu;

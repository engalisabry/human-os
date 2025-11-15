import { Icon } from "@iconify/react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home <Icon icon="mdi:home" width={25} height={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mood"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Mood
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reflection"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Reflection
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

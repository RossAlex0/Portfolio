import { Link, useLocation } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <header className="navbar">
      <img src="/logo.svg" alt="AlexR" />
      <div className="navbar_navigation">
        <Link to={"/"} className={location.pathname === "/" ? "selected" : ""}>
          Home
        </Link>
        <Link
          to={"/projects"}
          className={
            location.pathname.startsWith("/projects") ? "selected" : ""
          }
        >
          Projects
        </Link>
        <Link
          to={"/about"}
          className={location.pathname === "/about" ? "selected" : ""}
        >
          Who I am ?
        </Link>
        <Link to={"/contact"}>
          <div>
            <p>Contact</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

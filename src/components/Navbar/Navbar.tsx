import { Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <img src="/logo.svg" alt="AlexR" />
      <div className="navbar_navigation">
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/about"}>Who I am ?</Link>
        <Link to={"/contact"}>
          <div>
            <p>Contact</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

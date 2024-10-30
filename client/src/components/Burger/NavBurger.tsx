import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import ButtonLink from "../ButtonLink/ButtonLink";

import "./burger.css";

export default function NavBurger() {
  const location = useLocation();

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className="burger">
      <img src="/logo.svg" alt="AlexR" />

      <button
        type="button"
        className="burger_btn"
        onClick={() => setIsActive(!isActive)}
      >
        <div className={isActive ? "bar1 active_bar1" : "bar1"}></div>
        <div className={isActive ? "bar2 active_bar2" : "bar2"}></div>
        <div className={isActive ? "bar3_h active_bar3_h" : "bar3_h"}></div>
        <div className={isActive ? "bar4 active_bar4" : "bar4"}></div>
      </button>

      <div className={isActive ? "burger_list active" : "burger_list"}>
        <div
          className={
            isActive ? "burger_list_element active" : "burger_list_element"
          }
        >
          <ul>
            <li>
              <Link
                to={"/"}
                onClick={() => setIsActive(false)}
                className={location.pathname === "/" ? "selected" : ""}
              >
                Acceuil
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                onClick={() => setIsActive(false)}
                className={
                  location.pathname.startsWith("/projects") ? "selected" : ""
                }
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={() => setIsActive(false)}
                className={location.pathname === "/about" ? "selected" : ""}
              >
                Qui suis-je ?
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={() => setIsActive(false)}
                className={location.pathname === "/contact" ? "selected" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="burger_link">
            <ButtonLink />
          </div>
        </div>
      </div>
    </header>
  );
}

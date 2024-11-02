import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";

import translate from "../../services/data/translate.json";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../services/context/languageContext";
import { NavLanguage } from "../Navbar/type";

import ButtonLink from "../ButtonLink/ButtonLink";

import "./burger.css";

export default function NavBurger() {
  const { language, setLanguage } = useContext(
    LanguageContext
  ) as LanguageContextInterface;

  const t: NavLanguage = translate.navbar;
  const location = useLocation();

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClickToggle = () => {
    if (language === "fr") {
      setLanguage("en");
    } else {
      setLanguage("fr");
    }
  };

  return (
    language && (
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
                  {t.accueil[language]}
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
                  {t.projets[language]}
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  onClick={() => setIsActive(false)}
                  className={location.pathname === "/about" ? "selected" : ""}
                >
                  {t.about[language]}
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
              <li>
                <div className="toggle">
                  <p className="fr">Fr</p>
                  <label className="switch_mobile">
                    <input type="checkbox" onClick={handleClickToggle} />
                    <span className="slider_mobile"></span>
                  </label>
                  <p className="en">En</p>
                </div>
              </li>
            </ul>

            <div className="burger_link">
              <ButtonLink />
            </div>
          </div>
        </div>
      </header>
    )
  );
}

import { Link, useLocation } from "react-router-dom";

import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../services/context/languageContext";
import { NavLanguage } from "./type";
import translate from "../../services/data/translate.json";

import "./navbar.css";

export default function Navbar() {
  const { language, setLanguage } = useContext(
    LanguageContext
  ) as LanguageContextInterface;
  const location = useLocation();

  const t: NavLanguage = translate.navbar;

  const handleClickToggle = () => {
    if (language === "fr") {
      setLanguage("en");
    } else {
      setLanguage("fr");
    }
  };
  return (
    language && (
      <header className="navbar">
        <img src="/logo.svg" alt="AlexR" />
        <div className="navbar_navigation">
          <Link
            to={"/"}
            className={location.pathname === "/" ? "selected" : ""}
          >
            {t.accueil[language]}
          </Link>
          <Link
            to={"/projects"}
            className={
              location.pathname.startsWith("/projects") ? "selected" : ""
            }
          >
            {t.projets[language]}
          </Link>
          <Link
            to={"/about"}
            className={location.pathname === "/about" ? "selected" : ""}
          >
            {t.about[language]}
          </Link>
          <Link
            to={"/contact"}
            className={location.pathname === "/contact" ? "selected" : ""}
          >
            Contact
          </Link>
          <div className="toggle">
            <p className="fr">Fr</p>
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={language === "en" ? true : false}
                onClick={handleClickToggle}
              />
              <span className="slider"></span>
            </label>
            <p className="en">En</p>
          </div>
        </div>
      </header>
    )
  );
}

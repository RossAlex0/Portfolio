import { useContext } from "react";

import translate from "../../services/data/translate.json";
import { HomeLanguage } from "./type";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../services/context/languageContext";

import "./home.css";

export default function Home() {
  const { language } = useContext(LanguageContext) as LanguageContextInterface;
  const t: HomeLanguage = translate.home;

  return (
    <section className="home">
      <div className="home_container">
        <div className="home_name">
          <div className="animationContainer_name">
            <p>{t.first[language]}</p>
          </div>
        </div>
        <div className="home_creative">
          <div className="animationContainer_creative">
            <p> {t.seconde[language]} </p>
            <p> {t.anim[language]} </p>
            <p> {t.last[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

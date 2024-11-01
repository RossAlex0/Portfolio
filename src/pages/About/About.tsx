import useScreenWidth from "../../services/hook/useScreenWodth";
import translate from "../../services/data/translate.json";

import js from "/icon/javascript.svg";
import ts from "/icon/typescript.svg";
import react from "/icon/react.svg";
import node from "/icon/node.svg";
import mongo from "/icon/mongo.svg";
import mysql from "/icon/sql.svg";
import face from "/face.png";
import figma from "/icon/figma.svg";
import git from "/icon/git.svg";
import jest from "/icon/jest.svg";
import expo from "/icon/expo.svg";
import "./about.css";
import { AboutLangugage } from "./type";
import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../services/context/languageContext";

export default function Contact() {
  const { language } = useContext(LanguageContext) as LanguageContextInterface;

  const screenWidth = useScreenWidth();

  const t: AboutLangugage = translate.about;

  return (
    <section className="about">
      <div className="about_header">
        <h1>
          {t.titlefirst[language]} <span>{t.titleend[language]}</span>
        </h1>
        <div>
          <div>
            <img src={face} alt="rossignol alex" loading="lazy" />
          </div>
          {screenWidth > 900 ? (
            <p>
              <p>{t.p1[language]}</p>
              <p>{t.p2[language]}</p>
              <p>{t.p3[language]}</p>
              <p>{t.p4[language]}</p>
            </p>
          ) : (
            <p>{t.pglobals[language]}</p>
          )}
        </div>
      </div>
      <div className="body_skill">
        <div className="skill_container">
          <h3>Front-End</h3>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="javascript"></span>
              <span className="javascript"></span>
              <span className="javascript"></span>
              <span className="javascript"></span>
              <span className="javascript">
                <img src={js} alt="javascript" />
              </span>
            </div>
          </div>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="typescript"></span>
              <span className="typescript"></span>
              <span className="typescript"></span>
              <span className="typescript"></span>
              <span className="typescript">
                <img src={ts} alt="typescript" />
              </span>
            </div>
          </div>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="react"></span>
              <span className="react"></span>
              <span className="react"></span>
              <span className="react"></span>
              <span className="react">
                <img src={react} alt="react" />
              </span>
            </div>
          </div>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="reactnative"></span>
              <span className="reactnative"></span>
              <span className="reactnative"></span>
              <span className="reactnative"></span>
              <span className="reactnative">
                <img src={react} alt="react/native" />
              </span>
            </div>
          </div>
        </div>
        <div className="skill_container">
          <h3>Back-End</h3>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="node"></span>
              <span className="node"></span>
              <span className="node"></span>
              <span className="node"></span>
              <span className="node">
                <img src={node} alt="nodejs" />
              </span>
            </div>
          </div>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="mysql"></span>
              <span className="mysql"></span>
              <span className="mysql"></span>
              <span className="mysql"></span>
              <span className="mysql">
                <img src={mysql} alt="mysql" />
              </span>
            </div>
          </div>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="mongo"></span>
              <span className="mongo"></span>
              <span className="mongo"></span>
              <span className="mongo"></span>
              <span className="mongo">
                <img src={mongo} alt="mongodb" />
              </span>
            </div>
          </div>
        </div>
        <div className="skill_container">
          <h3>{t.tools[language]}</h3>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="figma"></span>
              <span className="figma"></span>
              <span className="figma"></span>
              <span className="figma"></span>
              <span className="figma">
                <img src={figma} alt="figma" />
              </span>
            </div>
          </div>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="git"></span>
              <span className="git"></span>
              <span className="git"></span>
              <span className="git"></span>
              <span className="git">
                <img src={git} alt="git" />
              </span>
            </div>
          </div>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="expo"></span>
              <span className="expo"></span>
              <span className="expo"></span>
              <span className="expo"></span>
              <span className="expo">
                <img src={expo} alt="expo" />
              </span>
            </div>
          </div>
          <div className="icon_container">
            <div className="skill_icon">
              <span className="jest"></span>
              <span className="jest"></span>
              <span className="jest"></span>
              <span className="jest"></span>
              <span className="jest">
                <img src={jest} alt="jest" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

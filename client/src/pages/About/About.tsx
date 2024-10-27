import React from "react";

import skillData from "../../services/data/skillData.json";
import { SkillInterface } from "./type";

import face from "/face.png";
import "./about.css";

export default function Contact() {
  const { softs, hards, tools } = skillData as SkillInterface;

  const repeatSkillSlide = (nb: number, skills: string[]) => {
    const array = [];
    for (let i = 0; i <= nb; i++) {
      array.push(
        <div key={i} className="skill_slide">
          {skills.map((skill, index) => (
            <React.Fragment key={`${i}${index}`}>
              <p key={`skill${i}${index}`}>{skill}</p>
              <div key={`circle${i}${index}`} className="cercle" />
            </React.Fragment>
          ))}
        </div>
      );
    }
    return array;
  };

  return (
    <section className="about">
      <div className="about_header">
        <h1>
          Qui <span>suis-je ?</span>
        </h1>
        <div>
          <img src={face} alt="rossignol alex" loading="lazy" />
        </div>
        <p>
          Autodidacte en reconversion professionnelle, passionné par le
          développement et toujours de bonne humeur, je suis curieux, motivé à
          progresser et prêt à découvrir de nouvelles technologies. Pour moi,
          travailler en équipe est essentiel tout en étant capable de gérer mes
          missions en autonomie.
        </p>
      </div>
      <div className="body_skill">
        <div className="skill_border soft">
          <p className="title_right">SOFT SKILLS</p>
          <div className="skill_container">{repeatSkillSlide(3, softs)}</div>
        </div>
        <div className="skill_border hard">
          <p className="title_left">HARD SKILLS</p>
          <div className="skill_container">{repeatSkillSlide(3, hards)}</div>
        </div>
        <div className="skill_border tool">
          <p className="title_right">TOOLS</p>
          <div className="skill_container">{repeatSkillSlide(3, tools)}</div>
        </div>
      </div>
    </section>
  );
}

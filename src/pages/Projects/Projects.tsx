import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Parallax } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import CardProject from "../../components/CardProject/CardProject";

import { ProjectLanguage } from "./type";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../services/context/languageContext";
import translate from "../../services/data/translate.json";
import { getProjectsFormat } from "../../services/utils/filterFormat";
import { ProjectInterface } from "../../components/CardProject/type";
import useScreenWidth from "../../services/hook/useScreenWodth";
import projectsData from "../../services/data/projectsData.json";

import "./projects.css";
import "swiper/css";
import "swiper/css/bundle";

export default function Projects() {
  const projects = projectsData as ProjectInterface[];
  const [projectFilter, setProjectFilter] = useState<
    ProjectInterface[] | undefined
  >();
  const navigate = useNavigate();
  const screenWidth = useScreenWidth();
  const { language } = useContext(LanguageContext) as LanguageContextInterface;

  const t: ProjectLanguage = translate.projects;
  const isProject: ProjectInterface[] = projectFilter ?? projects;

  const handleNavigate = async (project: ProjectInterface) => {
    const response = await getProjectsFormat(project.format);

    const index = response.findIndex(
      (indexProject) => indexProject.id === project.id
    );

    return navigate(`/projects/${project.format}/${index}`);
  };

  return (
    language && (
      <section className="projects">
        <header className="project_header">
          <h1>{t.title[language]}</h1>
        </header>
        <div className="project-buttons">
          <button
            type="button"
            className="button_switch"
            onClick={() => setProjectFilter(getProjectsFormat("mobile"))}
          >
            Mobile
          </button>
          <button
            type="button"
            className="button_switch"
            onClick={() => setProjectFilter(getProjectsFormat("web"))}
          >
            Web
          </button>
        </div>
        <div
          className={
            screenWidth < 900 ? "project_cards_format" : "project_cards"
          }
        >
          {screenWidth < 900 ? (
            isProject.map((project) => (
              <>
                <CardProject project={project} />{" "}
              </>
            ))
          ) : (
            <Swiper
              modules={[EffectCoverflow, Parallax, Navigation]}
              effect="coverflow"
              centeredSlides={true}
              slidesPerView={3} // Utilisation de "auto" pour un centrage dynamique
              spaceBetween={30} // Ajuste l’espace entre les slides pour réduire les chevauchements
              parallax={true}
              navigation
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              speed={800}
            >
              {isProject.map((project) => (
                <SwiperSlide key={project.id}>
                  <h3 className="title_project">{project.name}</h3>
                  <img src={project.image} alt={project.name} />
                  <div className="button_project_container">
                    <button
                      type="button"
                      className={`button_project_${language}`}
                      onClick={() => handleNavigate(project)}
                    >
                      {language === "fr" ? (
                        <>
                          <i>V</i>
                          <i>o</i>
                          <i>i</i>
                          <i>r</i>
                          <i>&nbsp;</i>
                          <i>l</i>
                          <i>e</i>
                          <i>&nbsp;</i>
                          <i>p</i>
                          <i>r</i>
                          <i>o</i>
                          <i>j</i>
                          <i>e</i>
                          <i>t</i>
                        </>
                      ) : (
                        <>
                          <i>V</i>
                          <i>i</i>
                          <i>e</i>
                          <i>w</i>
                          <i>&nbsp;</i>
                          <i>p</i>
                          <i>r</i>
                          <i>o</i>
                          <i>j</i>
                          <i>e</i>
                          <i>c</i>
                          <i>t</i>
                        </>
                      )}
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    )
  );
}

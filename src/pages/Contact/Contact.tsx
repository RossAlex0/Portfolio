import git from "/icon/github.svg";
import cv from "/icon/cv.svg";
import linkedin from "/icon/linkedin.svg";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact_header">
        <h1>Contact</h1>
        <div className="contact_header_link">
          <div className="link_container">
            <a href="https://github.com/RossAlex0" target="_blank">
              <img src={git} alt="github" />
            </a>
          </div>
          <div className="link_container link_down">
            <a href="/CV.pdf" download="Rossignol_Alex_CV.pdf">
              <img src={cv} alt="curriculomvitae" />
            </a>
          </div>
          <div className="link_container">
            <a
              href="https://www.linkedin.com/in/rossignolalex/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="body_contact"></div>
    </section>
  );
}

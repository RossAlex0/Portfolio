import git from "/icon/github.svg";
import cv from "/icon/cv.svg";
import linkedin from "/icon/linkedin.svg";
import "./contact.css";
import { useState } from "react";
import { postEmail } from "../../services/request/postEmail";

export default function Contact() {
  const [formEmail, setFormEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageApi, setMessageApi] = useState<string | undefined>();

  const handlePostEmail = async () => {
    const response = await postEmail(formEmail);
    console.info(response);
    setMessageApi(response);
    if (response) {
      setFormEmail({ name: "", email: "", subject: "", message: "" });
    }
    setTimeout(() => setMessageApi(undefined), 10000);
  };
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
      <div className="body_contact">
        <h2>Envoyer moi un email !</h2>
        <form>
          <div
            className={
              formEmail.message !== "" && formEmail.subject.length > 3
                ? "block_inputs  valide"
                : "block_inputs"
            }
          >
            <div className="input_container">
              <label id={formEmail.subject !== "" ? "labelTop" : ""}>
                Objet du mail
              </label>
              <div className="input_border">
                <input
                  value={formEmail.subject}
                  name="subject"
                  type="text"
                  autoComplete="off"
                  onChange={(e) =>
                    setFormEmail({ ...formEmail, subject: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="input_container">
              <label id={formEmail.message !== "" ? "labelTop" : ""}>
                Votre message
              </label>
              <div className="input_border_area">
                <textarea
                  value={formEmail.message}
                  name="message"
                  onChange={(e) =>
                    setFormEmail({ ...formEmail, message: e.target.value })
                  }
                  className="textarea"
                />
              </div>
            </div>
          </div>
          <div className="block_inputs">
            <div className="input_container">
              <label id={formEmail.name !== "" ? "labelTop" : ""}>
                Votre prénom{" "}
              </label>
              <div className="input_border">
                <input
                  value={formEmail.name}
                  name="name"
                  type="text"
                  autoComplete="off"
                  onChange={(e) =>
                    setFormEmail({ ...formEmail, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="input_container">
              <label id={formEmail.email !== "" ? "labelTop" : ""}>
                Votre email{" "}
              </label>
              <div className="input_border">
                <input
                  value={formEmail.email}
                  name="email"
                  type="text"
                  autoComplete="off"
                  onChange={(e) =>
                    setFormEmail({ ...formEmail, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="button_border">
              <button
                type="button"
                className="button_form"
                onClick={handlePostEmail}
              >
                <p>Envoyer</p>
              </button>
            </div>
          </div>
        </form>
      </div>
      {messageApi && (
        <>
          <p className="messageApi">
            {messageApi}
            {messageApi.includes("rééssayer") && (
              <span className="span_error">!</span>
            )}
          </p>
        </>
      )}
    </section>
  );
}

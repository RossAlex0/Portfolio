import { FormInterface, FormLanguage } from "./type";

import translate from "../../services/data/translate.json";
import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../services/context/languageContext";

import "./form.css";

export default function FormDesktop({
  formEmail,
  setFormEmail,
  handlePostEmail,
}: FormInterface) {
  const { language } = useContext(LanguageContext) as LanguageContextInterface;
  const t: FormLanguage = translate.form;

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  return (
    <div className="body_contact">
      <form>
        <div
          className={
            formEmail.message !== "" && formEmail.subject.length > 3
              ? "block_inputs  valide"
              : "block_inputs refuse"
          }
        >
          <div className="input_container text">
            <label id={formEmail.subject !== "" ? "labelTop" : ""}>
              {t.subject[language]}
            </label>
            <div className="input_border">
              <input
                value={formEmail.subject}
                name="subject"
                type="text"
                maxLength={80}
                autoComplete="off"
                onChange={(e) =>
                  setFormEmail({ ...formEmail, subject: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input_container area">
            <label id={formEmail.message !== "" ? "labelTop" : ""}>
              {t.message[language]}
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
        <div
          className={
            formEmail.email.length >= 6 &&
            emailRegex.test(formEmail.email) &&
            formEmail.name !== ""
              ? "block_inputs  valide"
              : "block_inputs refuse"
          }
        >
          <div className="input_container text">
            <label id={formEmail.name !== "" ? "labelTop" : ""}>
              {t.name[language]}
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
          <div className="input_container text">
            <label id={formEmail.email !== "" ? "labelTop" : ""}>
              {t.email[language]}
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
          <div
            className={
              formEmail.email.length >= 6 &&
              emailRegex.test(formEmail.email) &&
              formEmail.name !== "" &&
              formEmail.message !== "" &&
              formEmail.subject.length > 3
                ? "button_border"
                : "button_border opacity"
            }
          >
            <button
              disabled={
                !(
                  formEmail.email.length >= 6 &&
                  emailRegex.test(formEmail.email) &&
                  formEmail.name !== "" &&
                  formEmail.message !== "" &&
                  formEmail.subject.length > 3
                )
              }
              type="button"
              className="button_form"
              onClick={handlePostEmail}
            >
              <p>{t.btn[language]}</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

import { useContext, useState } from "react";

import { postEmail } from "../../services/request/postEmail";
import { ContactLanguage } from "./type";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../services/context/languageContext";
import translate from "../../services/data/translate.json";

import useScreenWidth from "../../services/hook/useScreenWodth";
import FormDesktop from "../../components/Form/FormDesktop";
import FormMobile from "../../components/Form/FormMobile";

import "./contact.css";

export default function Contact() {
  const { language } = useContext(LanguageContext) as LanguageContextInterface;
  const t: ContactLanguage = translate.contact;

  const screenWidth = useScreenWidth();

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
    setTimeout(() => setMessageApi(undefined), 8000);
  };

  return (
    <section className="contact">
      <div className="contact_header">
        <h1>Contact</h1>
        <div>
          <p>
            {t.p1first[language]} <span>{t.p1end[language]}</span> ?
          </p>
        </div>
        <div>
          <p>
            {t.p2star[language]} <span>{t.p22[language]}</span>{" "}
            {t.p23[language]} <span>{t.p24[language]}</span> {t.p25[language]}{" "}
            <span>{t.p26[language]}</span> {t.p27[language]}
          </p>
        </div>
        <div>
          <p>
            {t.p31[language]} <span>{t.p32[language]}</span> {t.p33[language]}{" "}
          </p>
        </div>
        <div>
          <p>
            {t.p41[language]} <span>{t.p42[language]}</span> {t.p43[language]}
          </p>
        </div>
      </div>
      {screenWidth < 720 ? (
        <FormMobile
          formEmail={formEmail}
          setFormEmail={setFormEmail}
          handlePostEmail={handlePostEmail}
        />
      ) : (
        <FormDesktop
          formEmail={formEmail}
          setFormEmail={setFormEmail}
          handlePostEmail={handlePostEmail}
        />
      )}
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

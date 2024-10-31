import { useState } from "react";

import { postEmail } from "../../services/request/postEmail";

import "./contact.css";
import useScreenWidth from "../../services/hook/useScreenWodth";
import FormDesktop from "../../components/Form/FormDesktop";
import FormMobile from "../../components/Form/FormMobile";

export default function Contact() {
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
            Envie de démarrer un <span>nouveau projet</span> ?
          </p>
        </div>
        <div>
          <p>
            Vous êtes <span>professionel</span> ou <span>particulier</span> est
            vous souhaitez élargir la visibilité de votre <span>marque</span>{" "}
            sur internet ?
          </p>
        </div>
        <div>
          <p>
            Vous êtes une <span>entreprise</span> et cherchez un profil en
            particulier ?{" "}
          </p>
        </div>
        <div>
          <p>
            Envie d'en savoir plus ? <span>Contactez moi</span> n'hésitez pas !
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

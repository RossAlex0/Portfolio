import { FormInterface } from "./type";

import "./form.css";

export default function FormMobile({
  formEmail,
  setFormEmail,
  handlePostEmail,
}: FormInterface) {
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  return (
    <div className="body_contact_mobile">
      <form
        className={
          formEmail.email.length >= 6 &&
          emailRegex.test(formEmail.email) &&
          formEmail.name !== "" &&
          formEmail.message !== "" &&
          formEmail.subject.length > 3
            ? "block_inputs_mobile valide"
            : "block_inputs_mobile refuse"
        }
      >
        <div className="input_container text">
          <label id={formEmail.name !== "" ? "labelTop" : ""}>
            Votre prénom
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
            Votre email
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
        <div className="input_container text">
          <label id={formEmail.subject !== "" ? "labelTop" : ""}>Objet</label>
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
            <p>Envoyer</p>
          </button>
        </div>
      </form>
    </div>
  );
}

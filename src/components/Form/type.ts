export interface FormInterface {
  formEmail: FormEmail;
  setFormEmail: (state: FormEmail) => void;
  handlePostEmail: () => void;
}

export interface FormEmail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormLanguage {
  name: Translate;
  email: Translate;
  subject: Translate;
  message: Translate;
  btn: Translate;
}

export interface Translate {
  fr: string;
  en: string;
}

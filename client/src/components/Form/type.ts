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

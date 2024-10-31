import axios from "axios";
import { RequestEmail } from "./typeRequest";

interface Error {
  message: string;
}

export const postEmail = async (request: RequestEmail) => {
  return axios
    .post("/api/send-email", request)
    .then((response) => response.data.message)
    .catch((error) => {
      console.error(
        error.response.data.msgError.details.map((msg: Error) => msg.message)
      );
      return error.response.data.message;
    });
};

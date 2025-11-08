import { myPath } from "./instance";
import { RequestEmail } from "./typeRequest";

interface Error {
  message: string;
}

export const postEmail = async (request: RequestEmail) => {
  return myPath
    .post("/new-send-email", request)
    .then((response) => response.data.message)
    .catch((error) => {
      console.error(
        error.response.data.msgError.details.map((msg: Error) => msg.message)
      );
      return error.response.data.message;
    });
};

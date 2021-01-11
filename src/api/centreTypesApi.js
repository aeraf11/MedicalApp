import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/centretypes/";

export function getCentreTypes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
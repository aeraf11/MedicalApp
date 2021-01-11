import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/centreareas/";

export function getCentreAreas() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
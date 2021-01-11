import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/centres/";

export function getCentres() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
export function saveCentre(centre) {
  return fetch(baseUrl + (centre.id || ""), {
    method: centre.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(centre)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCentre(centreId) {
  return fetch(baseUrl + centreId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

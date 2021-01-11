import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/diseases/";

export function getDiseases() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveDisease(disease) {
  return fetch(baseUrl + (disease.id || ""), {
    method: disease.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(disease)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDisease(diseaseId) {
  return fetch(baseUrl + diseaseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/doctors/";

export function getDoctors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveDoctor(doctor) {
  return fetch(baseUrl + (doctor.id || ""), {
    method: doctor.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(doctor)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDoctor(doctorId) {
  return fetch(baseUrl + doctorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/appointments/";

export function getAppointments() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveAppointment(appointment) {
  return fetch(baseUrl + (appointment.id || ""), {
    method: appointment.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(appointment)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAppointment(appointmentId) {
  return fetch(baseUrl + appointmentId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/events/";

export function getEvents() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveEvent(event) {
  return fetch(baseUrl + (event.id || ""), {
    method: event.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(event)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteEvent(eventId) {
  return fetch(baseUrl + eventId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
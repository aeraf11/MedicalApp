import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/staff/";

export function getStaff() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveStaff(staff) {
  return fetch(baseUrl + (staff.id || ""), {
    method: staff.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(staff)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteStaff(staffId) {
  return fetch(baseUrl + staffId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { courses, authors, roles, staff, doctors, locations, centres, centreTypes, centreAreas, diseases, patients, events,appointments } = mockData;
const data = JSON.stringify({ courses, authors, roles, staff, doctors, locations, centres, centreTypes, centreAreas, diseases, patients, events,appointments });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});

const db = require("./db");

const getAllCouncils = () => Object.keys(db);

module.exports = { getAllCouncils };

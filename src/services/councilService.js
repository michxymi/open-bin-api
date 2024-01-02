const Council = require("../database/Council");

const getAllCouncils = () => {
  Council.getAllCouncils();
};

module.exports = getAllCouncils;

const db = require("./db");

const getAllCouncils = () => {
  const councilNames = db.map((council) => council.name);
  return councilNames;
};

module.exports = { getAllCouncils };

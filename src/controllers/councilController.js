const councilService = require("../services/councilService");

const getAllCouncils = (req, res) => {
  const allCouncils = councilService.getAllCouncils();
  res.send({ status: "OK", data: allCouncils });
};

module.exports = {
  getAllCouncils,
};

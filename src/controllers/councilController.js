const councilService = require("../services/councilService");

const getAllCouncils = (req, res) => {
  const allCouncils = councilService.getAllCouncils();
  res.send({status: "OK", data: allCouncils});
};

const getCouncilBinCollectionDate = async (req, res) => {
  const council = req.params.councilId;
  const address = req.query.address;
  const json = await councilService.getCouncilBinCollectionDate(council, address);
  res.send({status: "OK", data: json});
};

module.exports = {
  getAllCouncils,
  getCouncilBinCollectionDate,
};

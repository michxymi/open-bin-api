const Council = require("../database/Council");

const getAllCouncils = () => {
  return Council.getAllCouncils();
};

const getCouncilBinCollectionDate = async (council, address) => {
  return await Council.getCouncilBinCollectionDate(council, address);
};

module.exports = {
  getAllCouncils,
  getCouncilBinCollectionDate,
};

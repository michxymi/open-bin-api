const Council = require("../database/Council");

const getAllCouncils = () => {
  return Council.getAllCouncils();
};

const getCouncilBinCollectionDate = async (council, address) => {
  try {
    return await Council.getCouncilBinCollectionDate(council, address);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCouncils,
  getCouncilBinCollectionDate,
};

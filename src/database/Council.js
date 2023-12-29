const westOxfordshire = require("./councils/west-oxfordshire");

const councilMap = {
  "oxford-city": true,
  cherwell: true,
  "south-oxfordshire": true,
  "vale-of-white-horse": true,
  "west-oxfordshire": westOxfordshire,
};

const getAllCouncils = () => {
  return Object.keys(councilMap);
};

const getCouncilBinCollectionDate = async (council, address) => {
  try {
    return await councilMap[council](address);
  } catch (error) {
    throw {
      status: 404,
      message: error.toString(),
    };
  }
};

module.exports = { getAllCouncils, getCouncilBinCollectionDate };

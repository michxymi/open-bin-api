const db = require("./db");

const getAllCouncils = () => Object.keys(db);

const getCouncilBinCollectionDate = async (council, address) => {
  const found = db.find((item) => item.name === council);
  if (!found) {
    throw {
      status: 404,
      message: `Council ${council} not found!`,
    };
  }
  try {
    return await found.scrapeMethod(address);
  } catch (error) {
    throw {
      status: 404,
      message: error?.message || error,
    };
  }
};

module.exports = { getAllCouncils, getCouncilBinCollectionDate };

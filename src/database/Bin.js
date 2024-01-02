const db = require("./db");

const getBin = async (council, address) => {
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
      status: 500,
      message: error?.message || error,
    };
  }
};

module.exports = { getBin };

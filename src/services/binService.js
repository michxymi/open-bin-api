const Bin = require("../database/Bin");

const getBin = async (council, address) => {
  try {
    return await Bin.getBin(council, address);
  } catch (error) {
    throw error;
  }
};

module.exports = { getBin };

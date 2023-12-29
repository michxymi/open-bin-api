const westOxon = require("./councils/west-oxfordshire");

const councilMap = {
  "oxford-city": true,
  "cherwell": true,
  "south-oxfordshire": true,
  "vale-of-white-horse": true,
  "west-oxfordshire": westOxon,
};

const getAllCouncils = () => {
    return Object.keys(councilMap)
}

const getCouncilBinCollectionDate = async (council, address) => {
    const json = await councilMap[council](address)
    return councilMap[council](address);
}

module.exports = { getAllCouncils, getCouncilBinCollectionDate };
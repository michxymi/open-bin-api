const councilService = require("../services/councilService");

const getAllCouncils = (req, res) => {
  const allCouncils = councilService.getAllCouncils();
  res.send({ status: "OK", data: allCouncils });
};

const getCouncilBinCollectionDate = async (req, res) => {
  const council = req.params.councilId;
  const address = req.query.address;

  if (!address) {
    res
      .status(400)
      .send({ status: "FAILED", data: { error: "Address not provided!" } });
    return;
  }

  try {
    const json = await councilService.getCouncilBinCollectionDate(
      council,
      address
    );
    res.status(200).send({ status: "OK", data: json });
    return;
  } catch (error) {
    res
      .status(error.status)
      .send({ status: "FAILED", data: { error: error.message } });
    return;
  }
};

module.exports = {
  getAllCouncils,
  getCouncilBinCollectionDate,
};

const binService = require("../services/binService");

const getBin = async (req, res) => {
  const council = req.params.councilId;
  const address = req.query.address;

  if (!address) {
    res
      .status(400)
      .send({ status: "FAILED", data: { error: "Address not provided!" } });
    return;
  }

  try {
    const json = await binService.getBin(council, address);
    res.status(200).send({ status: "OK", data: json });
    return;
  } catch (error) {
    res
      .status(error.status)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    return;
  }
};

module.exports = { getBin };

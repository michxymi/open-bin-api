const express = require("express");

const councilController = require("../../controllers/councilController");
const router = express.Router();

router.get("/", councilController.getAllCouncils);

router.get("/:councilId", councilController.getCouncilBinCollectionDate);

module.exports = router;

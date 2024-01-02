const express = require("express");

const councilController = require("../../controllers/councilController");
const binController = require("../../controllers/binController");
const router = express.Router();

router.get("/", councilController.getAllCouncils);
router.get("/:councilId/bins", binController.getBin);

module.exports = router;

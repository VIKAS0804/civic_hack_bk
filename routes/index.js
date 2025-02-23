const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

// Register POST route for adding reports
router.post("/reports", dataController.addReport);

// Register GET route for retrieving reports
router.get("/reports", dataController.getReports);

module.exports = router;

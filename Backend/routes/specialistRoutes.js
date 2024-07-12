const express = require("express");

const router = express.Router();

const specialistController = require("../controllers/specialistController");

router.get("/list", specialistController.getAllSpecs);

router.get("/:id", specialistController.getSpecById);

router.post("/create", specialistController.createSpec);

router.put("/:id", specialistController.updateSpec);

router.delete("/:id", specialistController.deleteSpec);

module.exports = router;
const express = require("express");

const router = express.Router();

const patientsController = require("../controllers/patientsController");

router.get("/list", patientsController.getAllPats);

router.get("/:id", patientsController.getPatById);

router.post("/create", patientsController.createPat);

router.put("/:id", patientsController.updatePat);

router.delete("/:id", patientsController.deletePat);

module.exports = router;
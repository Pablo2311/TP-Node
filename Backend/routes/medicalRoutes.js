const express = require("express");

const router = express.Router();

const medicalController = require("../controllers/medicalController");

router.get("/list", medicalController.getAllDocs);

router.get("/:id", medicalController.getDocById);

router.post("/create", medicalController.createDoc);

router.put("/:id", medicalController.updateDoc);

router.delete("/:id", medicalController.deleteDoc);

module.exports = router;
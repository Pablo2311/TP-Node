const express = require("express");

const router = express.Router();

const sucursalController = require("../controllers/sucursalController");

router.get("/list", sucursalController.getAllSucs);

router.get("/:id", sucursalController.getSucById);

router.post("/create", sucursalController.createSuc);

router.put("/:id", sucursalController.updateSuc);

router.delete("/:id", sucursalController.deleteSuc);

module.exports = router;
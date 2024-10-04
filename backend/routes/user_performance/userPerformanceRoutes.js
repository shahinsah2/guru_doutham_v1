const express = require("express");
const router = express.Router();
const userPerformanceController = require("../../controllers/user_performance/userPerformanceController");

router.post("/", userPerformanceController.createUserPerformance);
router.get("/", userPerformanceController.getAllUserPerformances);
router.get("/:id", userPerformanceController.getUserPerformanceById);
router.put("/:id", userPerformanceController.updateUserPerformance);
router.delete("/:id", userPerformanceController.deleteUserPerformance);

module.exports = router;

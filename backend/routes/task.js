const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const { create, update, remove, list, updateStatus } = require("../controllers/task");

// routes
router.post("/task", authCheck, create);
router.get("/tasks/:userId", authCheck, list);
router.put("/task/:id", authCheck, update);
router.put("/task/status/:id", authCheck, updateStatus);
router.delete("/task/:id", authCheck, remove);

module.exports = router;

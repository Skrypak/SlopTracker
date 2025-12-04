const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasksController");

// GET all tasks
router.get("/", controller.getAllTasks);

// POST new task
router.post("/", controller.addTask);

// PATCH task (update completed)
router.patch("/:id", controller.toggleTask);

// DELETE task
router.delete("/:id", controller.removeTask);

module.exports = router;

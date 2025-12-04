const taskStorage = require("../services/taskStorage");

// GET /api/tasks
async function getAllTasks(req, res) {
  const tasks = await taskStorage.getTasks();
  res.json(tasks);
}

// POST /api/tasks
async function addTask(req, res) {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = await taskStorage.addTask(title);
  res.status(201).json(newTask);
}

// PATCH /api/tasks/:id
async function toggleTask(req, res) {
  const { id } = req.params;
  const { completed } = req.body;
  if (typeof completed !== "boolean") {
    return res.status(400).json({ error: "Completed must be boolean" });
  }

  const updatedTask = await taskStorage.updateTask(id, { completed });
  if (!updatedTask) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(updatedTask);
}

// DELETE /api/tasks/:id
async function removeTask(req, res) {
  const { id } = req.params;
  const deleted = await taskStorage.deleteTask(id);
  if (!deleted) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(204).send(); // no content
}

module.exports = {
  getAllTasks,
  addTask,
  toggleTask,
  removeTask,
};

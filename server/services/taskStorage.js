const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "tasks.json");

async function readTasksFile() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading tasks file:", err);
    return [];
  }
}

async function writeTasksFile(tasks) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error("Error writing tasks file:", err);
  }
}

async function getTasks() {
  return await readTasksFile();
}

async function addTask(title) {
  const tasks = await readTasksFile();
  const newTask = {
    id: Date.now().toString(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  await writeTasksFile(tasks);
  return newTask;
}

async function updateTask(id, updates) {
  const tasks = await readTasksFile();
  const taskIndex = tasks.findIndex(t => t.id === id);
  if (taskIndex === -1) return null;

  tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
  await writeTasksFile(tasks);
  return tasks[taskIndex];
}

async function deleteTask(id) {
  const tasks = await readTasksFile();
  const filtered = tasks.filter(t => t.id !== id);
  await writeTasksFile(filtered);
  return tasks.length !== filtered.length; // true if deleted
}

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};

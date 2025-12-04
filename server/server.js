const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", tasksRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
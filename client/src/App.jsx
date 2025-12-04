import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from backend on mount
  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Failed to load tasks:", err));
  }, []);

  // Add task (POST)
  const addTask = async (title) => {
    try {
      const res = await fetch("http://localhost:3001/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      });

      const newTask = await res.json();
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      console.error("Add task failed:", err);
    }
  };

  // Toggle task completed (PATCH)
  const toggleTask = async (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    try {
      const res = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed })
      });

      const updated = await res.json();
      setTasks(prev =>
        prev.map(t => (t.id === id ? updated : t))
      );
    } catch (err) {
      console.error("Toggle task failed:", err);
    }
  };

  // Delete task (DELETE)
  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (res.status === 204) {
        setTasks(prev => prev.filter(t => t.id !== id));
      }
    } catch (err) {
      console.error("Delete task failed:", err);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Task App</h1>

      <AddTaskForm onAdd={addTask} />

      <div className="task-list-container">
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}


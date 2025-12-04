import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span>{task.title}</span>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}


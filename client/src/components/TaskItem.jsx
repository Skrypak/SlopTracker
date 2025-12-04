import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

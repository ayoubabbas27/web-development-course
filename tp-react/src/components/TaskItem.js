import React from 'react';

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-checkbox"
        />
        <span className="task-text">{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;

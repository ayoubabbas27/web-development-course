import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') {
      alert('Please enter a task');
      return;
    }
    onAddTask(taskText);
    setTaskText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;

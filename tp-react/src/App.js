import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterPanel from './components/FilterPanel';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <TaskForm onAddTask={addTask} />
        <FilterPanel 
          filter={filter} 
          stats={{ total: totalTasks, completed: completedTasks, remaining: remainingTasks }}
          onFilterChange={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      </main>
    </div>
  );
}

export default App;

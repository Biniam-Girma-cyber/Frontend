import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  
  const [tasks, setTasks] = useState([]);

  // Store selected filter
  const [filter, setFilter] = useState("all");

  
  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text: text,
      priority: priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

 
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

 
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

 
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "not-completed") {
      return !task.completed;
    }

    return true;
  });

  
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;
 
  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="app">
      <div className="container">

        {/* Header */}
        <header className="header">
          <div>
            <p className="small-title">MY PRODUCTIVITY</p>
            <h1>Dynamic Task Manager</h1>
            <p className="subtitle">
              Organize your tasks and keep track of your progress.
            </p>
          </div>
        </header>

        {/* Statistics */}
        <section className="stats">
          <div className="stat-card">
            <span className="stat-icon">📋</span>
            <div>
              <p>Total Tasks</p>
              <h2>{totalTasks}</h2>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon">✅</span>
            <div>
              <p>Completed</p>
              <h2>{completedTasks}</h2>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon">🎯</span>
            <div>
              <p>Active</p>
              <h2>{activeTasks}</h2>
            </div>
          </div>
        </section>

        {/* Add Task */}
        <section className="card">
          <h2>Add New Task</h2>

          <TaskForm onAddTask={addTask} />
        </section>

        {/* Task controls */}
        <section className="task-controls">

          <TaskFilter
            currentFilter={filter}
            onFilterChange={setFilter}
          />

          <button
            className="clear-button"
            onClick={clearCompleted}
            disabled={completedTasks === 0}
          >
            Clear Completed
          </button>

        </section>

        {/* Task list */}
        <section className="card task-section">

          <div className="task-header">
            <h2>Your Tasks</h2>

            <span className="task-count">
              {filteredTasks.length}{" "}
              {filteredTasks.length === 1 ? "task" : "tasks"}
            </span>
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />

        </section>

        {/* Footer */}
        <footer>
          <p>
            Built with React • JSX • Props • Events • useState
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
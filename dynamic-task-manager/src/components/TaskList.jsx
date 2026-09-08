import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}) {
  // Conditional rendering
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>

        <h3>No tasks found</h3>

        <p>
          Add your first task and start being productive!
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}

    </div>
  );
}

export default TaskList;
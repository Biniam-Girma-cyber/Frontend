function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
}) {
  return (
    <div
      className={
        task.completed
          ? "task-item completed"
          : "task-item"
      }
    >

      <div className="task-left">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />

        <div className="task-content">

          <p className="task-text">
            {task.text}
          </p>

          <span
            className={`priority priority-${task.priority.toLowerCase()}`}
          >
            {task.priority} Priority
          </span>

        </div>

      </div>

      <button
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
        title="Delete task"
      >
        🗑️
      </button>

    </div>
  );
}

export default TaskItem;
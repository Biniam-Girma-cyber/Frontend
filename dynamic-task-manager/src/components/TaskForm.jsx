import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do not add an empty task
    if (taskText.trim() === "") {
      return;
    }

    onAddTask(taskText.trim(), priority);

    // Clear input after adding
    setTaskText("");

    // Reset priority
    setPriority("Medium");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <div className="input-group">
        <label htmlFor="task">
          Task
        </label>

        <input
          id="task"
          type="text"
          value={taskText}
          onChange={(event) =>
            setTaskText(event.target.value)
          }
          placeholder="What do you need to do?"
        />
      </div>

      <div className="input-group priority-group">
        <label htmlFor="priority">
          Priority
        </label>

        <select
          id="priority"
          value={priority}
          onChange={(event) =>
            setPriority(event.target.value)
          }
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button className="add-button" type="submit">
        + Add Task
      </button>

    </form>
  );
}

export default TaskForm;
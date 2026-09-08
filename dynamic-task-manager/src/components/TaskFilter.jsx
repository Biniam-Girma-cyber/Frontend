function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-container">

      <button
        className={
          currentFilter === "all"
            ? "filter-button active"
            : "filter-button"
        }
        onClick={() => onFilterChange("all")}
      >
        All
      </button>

      <button
        className={
          currentFilter === "completed"
            ? "filter-button active"
            : "filter-button"
        }
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>

      <button
        className={
          currentFilter === "not-completed"
            ? "filter-button active"
            : "filter-button"
        }
        onClick={() => onFilterChange("not-completed")}
      >
        Not Completed
      </button>

    </div>
  );
}

export default TaskFilter;
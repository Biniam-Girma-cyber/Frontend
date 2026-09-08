# Dynamic Task Manager

A beginner-friendly React task management application built for the **React Course — Sessions 1 & 2 Student Assignment**.

The project demonstrates fundamental React concepts including **JSX, functional components, props, events, useState, conditional rendering, list rendering, and keys**.

---

## 📌 Project Overview

The **Dynamic Task Manager** allows users to create and manage their daily tasks through a simple and responsive interface.

Users can:

* Add new tasks
* Set task priority
* Mark tasks as completed
* Mark completed tasks as incomplete
* Delete individual tasks
* Filter tasks
* Clear all completed tasks
* View task statistics

The application is built using reusable React components rather than putting the entire application into one component.

---

## ✨ Features

### 1. Add Tasks

Users can enter a task and click **Add Task**.

The application:

* Prevents empty tasks from being added
* Adds the task to the task list
* Automatically clears the input field
* Gives every task a unique ID
* Stores the task completion status

### 2. Complete Tasks

Each task has a checkbox.

Users can click the checkbox to:

* Mark a task as completed
* Mark a completed task as incomplete

Completed tasks have a different visual appearance with crossed-out text.

### 3. Delete Tasks

Every task has a delete button.

Clicking the delete button removes only the selected task.

### 4. Task Filters

The application provides three filters:

* **All** — Shows every task
* **Completed** — Shows only completed tasks
* **Not Completed** — Shows only incomplete tasks

The currently selected filter is visually highlighted.

### 5. Task Statistics

The application dynamically displays:

* **Total Tasks**
* **Completed Tasks**
* **Active Tasks**

The statistics automatically update whenever the task collection changes.

### 6. Clear Completed

The **Clear Completed** button removes all completed tasks while keeping incomplete tasks.

### 7. Empty State

When there are no tasks to display, the application shows a helpful empty-state message.

---

## ⭐ Original Improvements

Two additional features were added to make the project different from a basic classroom Todo application.

### Task Priority

Each task can have one of three priority levels:

* Low
* Medium
* High

The selected priority is displayed on the task card.

### Active Task Count

The statistics section includes an **Active Tasks** counter.

It shows how many tasks are still incomplete.

---

## 🧩 React Concepts Demonstrated

This project demonstrates the concepts covered in React Sessions 1 and 2.

### JSX

JSX is used to create the application's user interface.

Example:

```jsx
<h1>Dynamic Task Manager</h1>
```

### Functional Components

The application uses React functional components:

```text
App
├── TaskForm
├── TaskFilter
├── TaskList
└── TaskItem
```

### Props

Data and functions are passed from parent components to child components using props.

Example:

```jsx
<TaskItem
  task={task}
  onToggleTask={toggleTask}
  onDeleteTask={deleteTask}
/>
```

### useState

React's `useState` hook is used to store changing application data.

Examples include:

* Tasks
* Task input
* Task priority
* Selected filter

Example:

```jsx
const [tasks, setTasks] = useState([]);
```

### Events

The application uses React event handlers such as:

```jsx
onChange
onClick
onSubmit
```

### Conditional Rendering

Conditional rendering is used for different application states.

For example:

```jsx
if (tasks.length === 0) {
  return <div>No tasks found</div>;
}
```

### List Rendering

Tasks are dynamically displayed using `map()`:

```jsx
tasks.map((task) => (
  <TaskItem
    key={task.id}
    task={task}
  />
))
```

### Stable Keys

Every task uses its unique ID as the React key:

```jsx
key={task.id}
```

The array index is not used as the key.

---

## 📁 Project Structure

```text
dynamic-task-manager/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskFilter.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠️ Technologies Used

* React
* JavaScript
* JSX
* HTML
* CSS
* Vite
* npm

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Visual Studio Code

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project

```bash
cd dynamic-task-manager
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Vite will provide a local development URL similar to:

```text
http://localhost:5173/
```

Open the URL in your browser.

---

## 🎯 How to Use

### Add a task

1. Enter a task in the input field.
2. Select a priority.
3. Click **+ Add Task**.

### Complete a task

Click the checkbox next to the task.

### Delete a task

Click the delete button on the task.

### Filter tasks

Choose one of:

```text
All
Completed
Not Completed
```

### Remove completed tasks

Click:

```text
Clear Completed
```

---

## 📊 Application Flow

```text
                App
                 │
        ┌────────┼─────────┐
        │        │         │
        ▼        ▼         ▼
   TaskForm   TaskFilter  TaskList
        │        │         │
        │        │         ▼
        │        │     TaskItem
        │        │         │
        └────────┴─────────┘
                 │
                 ▼
             App State
                 │
                 ▼
            React Re-render
                 │
                 ▼
            Updated UI
```

---

## 📚 Learning Objectives

By completing this project, the following React concepts are demonstrated:

* Building UI using JSX
* Creating reusable components
* Passing data through props
* Passing functions through props
* Handling user events
* Managing application state with `useState`
* Conditional rendering
* Rendering lists with `map()`
* Using stable keys
* Updating the UI through React state

---

## 📱 Responsive Design

The application is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile phone

CSS media queries are used to adapt the layout to smaller screens.

---

## 🧪 Testing Checklist

Before submitting the project, test the following:

* [ ] Application starts successfully
* [ ] A task can be added
* [ ] Empty tasks cannot be added
* [ ] Input clears after adding
* [ ] Tasks appear dynamically
* [ ] Tasks can be completed
* [ ] Tasks can be uncompleted
* [ ] Completed tasks look different
* [ ] Tasks can be deleted
* [ ] Total task count updates
* [ ] Completed task count updates
* [ ] Active task count updates
* [ ] All filter works
* [ ] Completed filter works
* [ ] Not Completed filter works
* [ ] Clear Completed works
* [ ] Empty state appears correctly
* [ ] Task priority works
* [ ] Application works on mobile screens

---

## 🎓 Assignment Requirements

This project was created according to the React Sessions 1 & 2 assignment requirements, including reusable components, props, state, events, conditional rendering, list rendering, stable keys, filtering, statistics, and original improvements.

---

## 👨‍💻 Author

**Biniam Girma**

Software Engineering Student

---

## 📄 License

This project was created for educational and learning purposes.

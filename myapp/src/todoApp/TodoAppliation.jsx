import React, { useState } from "react";
import "./style.css";

function TodoApplication() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditStart = (task) => {
    setEditingTask(task.id);
    setEditValue(task.text);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = (taskId) => {
    if (editValue.trim() !== "") {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, text: editValue } : task
        )
      );
      setEditingTask(null);
      setEditValue("");
    }
  };

  const handleEditCancel = () => {
    setEditingTask(null);
    setEditValue("");
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <form onSubmit={handleAddTask} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>

      <div className="todo-list">
        {tasks.length === 0 ? (
          <p className="empty-message">
            No tasks yet! Add a task to get started.
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`todo-item ${task.completed ? "completed" : ""}`}
            >
              {editingTask === task.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                    className="edit-input"
                    autoFocus
                  />
                  <div className="edit-buttons">
                    <button
                      onClick={() => handleEditSubmit(task.id)}
                      className="save-button"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleEditCancel}
                      className="cancel-button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                    className="todo-checkbox"
                  />
                  <span className="todo-text">{task.text}</span>
                  <div className="button-group">
                    <button
                      onClick={() => handleEditStart(task)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoApplication;

import { useReducer, useState } from "react";
import { useTheme } from "../context/ThemeContext";

// Counter reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "ADD":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

// Todos reducer
const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "CLEAR_TODOS":
      return [];
    default:
      return state;
  }
};

function UseReducerDemo() {
  const { darkMode } = useTheme();

  // Counter using useReducer
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 0,
  });

  // Todos using useReducer
  const [todos, todosDispatch] = useReducer(todosReducer, []);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim()) {
      todosDispatch({ type: "ADD_TODO", payload: todoInput });
      setTodoInput("");
    }
  };

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>useReducer Hook Demo</h2>

      <div className="reducer-example">
        <h3>Example 1: Counter with useReducer</h3>
        <p>Current count: {counterState.count}</p>
        <div className="button-group">
          <button onClick={() => counterDispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
          <button onClick={() => counterDispatch({ type: "RESET" })}>
            Reset
          </button>
          <button onClick={() => counterDispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <button onClick={() => counterDispatch({ type: "ADD", payload: 5 })}>
            Add 5
          </button>
        </div>
        <p className="note">
          useReducer gives us more control over complex state logic compared to
          useState.
        </p>
      </div>

      <div className="reducer-example">
        <h3>Example 2: Todo List with useReducer</h3>
        <form onSubmit={handleAddTodo}>
          <div className="input-group">
            <input
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              placeholder="Add a todo..."
            />
            <button type="submit">Add</button>
          </div>
        </form>

        {todos.length > 0 ? (
          <>
            <ul className="todos-list">
              {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                  <div
                    className="todo-text"
                    onClick={() =>
                      todosDispatch({
                        type: "TOGGLE_TODO",
                        payload: todo.id,
                      })
                    }
                  >
                    <span>{todo.text}</span>
                  </div>
                  <button
                    onClick={() =>
                      todosDispatch({
                        type: "DELETE_TODO",
                        payload: todo.id,
                      })
                    }
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="clear-button"
              onClick={() => todosDispatch({ type: "CLEAR_TODOS" })}
            >
              Clear All
            </button>
          </>
        ) : (
          <p className="no-todos">No todos yet. Add some!</p>
        )}

        <div className="code-explanation">
          <h4>When to use useReducer?</h4>
          <ul>
            <li>For complex state logic involving multiple sub-values</li>
            <li>When next state depends on previous state</li>
            <li>When you need more predictable state transitions</li>
            <li>
              When actions better describe state changes than direct setState
              calls
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseReducerDemo;

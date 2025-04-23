import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function UseStateDemo() {
  const { darkMode } = useTheme();
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>useState Hook Demo</h2>

      <div className="counter-demo">
        <h3>Counter Example</h3>
        <p>Current count: {count}</p>
        <div className="button-group">
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>Increment</button>
        </div>
      </div>

      <div className="form-demo">
        <h3>Form State Example</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="form-preview">
          <h4>Form Data Preview:</h4>
          <p>
            <strong>Name:</strong> {formData.name || "(empty)"}
          </p>
          <p>
            <strong>Email:</strong> {formData.email || "(empty)"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseStateDemo;

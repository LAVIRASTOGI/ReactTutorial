import { useTheme } from "../context/ThemeContext";

function ContextApiDemo() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>Context API Demo</h2>

      <div className="context-example">
        <h3>Current Theme Context</h3>
        <p>
          The theme context is being used throughout the application. It
          demonstrates how context can share state across components without
          prop drilling.
        </p>

        <div className="theme-info">
          <p>
            Current theme mode: <strong>{darkMode ? "Dark" : "Light"}</strong>
          </p>
          <button onClick={toggleTheme}>
            Switch to {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        <div className="theme-explanation">
          <h4>How Context Works:</h4>
          <ol>
            <li>
              <strong>Create Context</strong>: Using{" "}
              <code>createContext()</code> to create a context object
            </li>
            <li>
              <strong>Provider</strong>: Wrap components with Context.Provider
              and pass value
            </li>
            <li>
              <strong>Consumer</strong>: Use <code>useContext()</code> hook to
              access the context value
            </li>
          </ol>

          <div className="code-example">
            <pre>
              {`// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer hook
function useTheme() {
  return useContext(ThemeContext);
}`}
            </pre>
          </div>

          <p className="note">
            Context is excellent for global state like themes, authentication,
            or any data that needs to be accessible by many components at
            different nesting levels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContextApiDemo;

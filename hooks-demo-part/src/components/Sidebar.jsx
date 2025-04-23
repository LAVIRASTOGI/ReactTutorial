import { useTheme } from "../context/ThemeContext";

function Sidebar({ activeSection, setActiveSection }) {
  const { darkMode, toggleTheme } = useTheme();

  const sections = [
    { id: "useState", title: "useState Hook" },
    { id: "useEffect", title: "useEffect Hook" },
    { id: "useRef", title: "useRef Hook" },
    { id: "customHooks", title: "Custom Hooks" },
    { id: "contextApi", title: "Context API" },
  ];

  return (
    <aside className={`sidebar ${darkMode ? "dark" : "light"}`}>
      <div className="sidebar-header">
        <h1>React Hooks Demo</h1>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={`Switch to ${darkMode ? "Light" : "Dark"} Mode`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={activeSection === section.id ? "active" : ""}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <p>Created with Vite + React</p>
        <p className="version">v1.0.0</p>
      </div>
    </aside>
  );
}

export default Sidebar;

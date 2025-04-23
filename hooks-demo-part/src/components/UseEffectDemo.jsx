import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function UseEffectDemo() {
  const { darkMode } = useTheme();
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Effect 1: Document title effect - runs on every render
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  // Effect 2: Window resize effect - with cleanup
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array = only runs once

  // Effect 3: Fetch data effect - runs when resourceType changes
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.slice(0, 5)); // Take only first 5 items
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsLoading(false);
      });
  }, [resourceType]);

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>useEffect Hook Demo</h2>

      <div className="effect-example">
        <h3>Effect 1: Document Title</h3>
        <p>Click the button and check your browser tab title</p>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment Count
        </button>
      </div>

      <div className="effect-example">
        <h3>Effect 2: Window Resize Listener (with cleanup)</h3>
        <p>Current window width: {windowWidth}px</p>
        <p className="note">Try resizing your browser window</p>
      </div>

      <div className="effect-example">
        <h3>Effect 3: Data Fetching</h3>
        <div className="button-group">
          <button
            onClick={() => setResourceType("posts")}
            className={resourceType === "posts" ? "active" : ""}
          >
            Posts
          </button>
          <button
            onClick={() => setResourceType("users")}
            className={resourceType === "users" ? "active" : ""}
          >
            Users
          </button>
        </div>
        <p>
          Resource type: <strong>{resourceType}</strong>
        </p>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="data-list">
            {items.map((item) => (
              <li key={item.id}>
                {resourceType === "users" ? item.name : item.title || ""}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UseEffectDemo;

import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function UseRefDemo() {
  const { darkMode } = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  // Ref 1: For accessing DOM element
  const inputRef = useRef(null);

  // Ref 2: For storing previous value
  const previousInputValue = useRef("");

  // Ref 3: For persisting values between renders without causing re-renders
  const renderCountRef = useRef(1);

  // Ref 4: For interval ID storage
  const intervalRef = useRef(null);

  // Focus the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Track render count without causing re-renders
  useEffect(() => {
    renderCountRef.current++;
  });

  // Track re-renders caused by state updates
  useEffect(() => {
    setRenderCount((prevCount) => prevCount + 1);
  }, [inputValue]);

  // Store previous input value
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  // Timer functionality
  const startTimer = () => {
    if (isRunning) return;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>useRef Hook Demo</h2>

      <div className="ref-example">
        <h3>Ref Example 1: DOM Reference</h3>
        <div className="input-group">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
          <button onClick={focusInput}>Focus Input</button>
        </div>
        <p>Current value: {inputValue}</p>
        <p>Previous value: {previousInputValue.current}</p>
      </div>

      <div className="ref-example">
        <h3>Ref Example 2: Persisting Values</h3>
        <p>
          Component has rendered <strong>{renderCountRef.current}</strong> times
          (ref, doesn't cause re-renders)
        </p>
        <p>
          State render count: <strong>{renderCount}</strong> (state, causes
          re-renders)
        </p>
      </div>

      <div className="ref-example">
        <h3>Ref Example 3: Storing Interval ID</h3>
        <div className="timer">
          <p>Timer: {time} seconds</p>
          <div className="button-group">
            <button onClick={startTimer} disabled={isRunning}>
              Start
            </button>
            <button onClick={stopTimer} disabled={!isRunning}>
              Stop
            </button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
        <p className="note">
          The intervalRef stores the timer ID between renders so we can clear it
          later, even if the component re-renders.
        </p>
      </div>
    </div>
  );
}

export default UseRefDemo;

import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import UseStateDemo from "./components/UseStateDemo";
import UseEffectDemo from "./components/UseEffectDemo";
import UseRefDemo from "./components/UseRefDemo";
import UseReducerDemo from "./components/UseReducerDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import ReactMemoDemo from "./components/ReactMemoDemo";
import CustomHooksDemo from "./components/CustomHooksDemo";
import ContextApiDemo from "./components/ContextApiDemo";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("useState");

  // Render the active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case "useState":
        return <UseStateDemo />;
      case "useEffect":
        return <UseEffectDemo />;
      case "useRef":
        return <UseRefDemo />;
      case "useReducer":
        return <UseReducerDemo />;
      case "useCallback":
        return <UseCallbackDemo />;
      case "useMemo":
        return <UseMemoDemo />;
      case "reactMemo":
        return <ReactMemoDemo />;
      case "customHooks":
        return <CustomHooksDemo />;
      case "contextApi":
        return <ContextApiDemo />;
      default:
        return <UseStateDemo />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="content">{renderActiveSection()}</main>
      </div>
    </ThemeProvider>
  );
}

export default App;

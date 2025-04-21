import "./App.css";
import CustomExample1 from "./CustomHook/CustomExample1";
import { AuthProvider } from "./useContextExample/AuthenticationContext";
import ContextExample from "./useContextExample/ContextExample";
import Navbar from "./useContextExample/Navbar";
import { ThemeProvider } from "./useContextExample/ThemeContext";
import RefExample1 from "./useRefExample/RefExample1";
import RefExample2 from "./useRefExample/RefExample2";
// import Example1 from "./UseStateExamples/Example1";
import Example1 from "./UseEffect/Example1";
import Example3 from "./UseEffect/Example3";

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      {/* <AuthProvider>
        <Navbar />
        <ContextExample />
      </AuthProvider> */}
      {/* </ThemeProvider> */}
      {/* <RefExample1 /> */}
      {/* <RefExample2 /> */}

      <CustomExample1 />
      {/* <Example1 /> */}
      {/* <Example1 /> */}
      {/* <Example3 /> */}
    </>
  );
}

export default App;

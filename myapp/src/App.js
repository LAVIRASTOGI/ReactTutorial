import React, { useState } from "react";
import AgeComponent from "./AgeComponent";
import EventHandler from "./EventHandler";
import DynamicContent from "./DynamicContent";
import PropDrillExample from "./PropDrillExample";
import TicTacToe from "./TicTacToe/TicTacToe";
import TodoApplication from "./todoApp/TodoAppliation";
import EventPropagation from "./EventPropagation";
import DOMSelector from "./DOMSelector";
import Statelifting from "./Statelifting";
import Seconduseeffect from "./ReactHooks/Seconduseeffect";
import FirstUseState from "./ReactHooks/FirstUseState";
import ThirdUseLayoutEffect from "./ReactHooks/ThirdUseLayoutEffect";
import TODOAPP from "./TODOAPP";
import FourthSecondExampleUseReducer from "./ReactHooks/FourthSecondExampleUseReducer";
import FifthUseId from "./ReactHooks/FifthUseId";
import ThirdpartyLibararyuseRef from "./ReactHooks/ThirdpartyLibararyuseRef";
import "./App.css";
import FowardRefexample from "./ReactHooks/FowardRefexample";
import Example1Provider from "./ReactHooks/ContexAPI/Example1";
import CounterExample1 from "./ReactHooks/ContexAPI/CounterExample1";
import ThemeContextProvider from "./ReactHooks/ContexAPI/ThemeContext";
import AuthContextProvider from "./ReactHooks/AuthenticationContext";
import CustomHookExample from "./ReactHooks/CustomHook/CustomHookExample";
import Example from "./ReactHooks/useCallbackHook/Example";
import ExampleuseMemo from "./ReactHooks/useMemoHook/ExampleuseMemo";
import ReactMemoExample from "./ReactHooks/ReactMemo/ReactMemoExample";
import HOCexample from "./ReactHooks/HOC/HOCexample";
import AUTHExample from "./ReactHooks/HOC/AUTHExample";

export default function App() {
  let [age, setAge] = useState(30);
  const [obj, setObj] = useState({ name: "lavi", age: 30 });
  const [arr, setArr] = useState([1, 2, 3, 4]);

  const clickHandler = (name) => {
    // setAge(age + 1);
    // setObj((obj.name = "labi"));
    // setObj({ ...obj, age: age + 1, name: "lllll" });
    // let newArr = [1, ...arr];
    // setArr(arr.push(1, 2, 6));
    // arr.push(1, 2, 6);
    // setAge(30);
    // setAge(age + 1);
    // setAge(age + 1);
    // setAge(age + 1);
    // setAge(age + 2);
    // setAge((prev) => prev + 1);
    // setAge((prev) => prev + 1);
    // setAge((prev) => prev + 1);
    console.log(name, "name from parent");
    // setAge((prev) => prev + 1);
    // setArr(arr.push(1, 2, 6));
    // setObj({ ...obj, age: age + 1, name: "lllll" });
  };

  return (
    <div>
      {/* <TODOAPP /> */}
      {/* Props */}
      {/* <AgeComponent age={age} obj={obj} clickHandler={clickHandler} />
      <h1>{age}</h1> */}
      {/* <h2>{arr}</h2> */}
      {/* <button onClick={() => clickHandler()}> Click</button> */}

      {/* event handlers */}
      {/* <EventHandler clickHandler2={(name) => clickHandler(name)} /> */}

      {/* event propagation  */}
      {/* <EventPropagation /> */}

      {/* query selector */}
      {/* <DOMSelector /> */}

      {/* state lifting */}
      {/* <Statelifting /> */}

      {/* prop drilling */}
      {/* <PropDrillExample /> */}

      {/* display dymanic list content  */}
      {/* <DynamicContent /> */}

      {/* to do application  */}
      {/* <TodoApplication /> */}

      {/* tic tac toe application */}
      {/* <TicTacToe /> */}

      {/* react hooks */}
      {/* use state */}
      {/* <FirstUseState /> */}
      {/* useEffect */}
      {/* <Seconduseeffect /> */}

      {/* uselayouteffect */}
      {/* <ThirdUseLayoutEffect /> */}

      {/* useReducer */}
      {/* <FourthSecondExampleUseReducer /> */}

      {/* useId */}
      {/* <FifthUseId /> */}

      {/* use Ref */}
      {/* <ThirdpartyLibararyuseRef />
      <FowardRefexample /> */}

      {/* Context API */}
      {/* <AuthContextProvider>
        <ThemeContextProvider>
          <Example1Provider>
            <CounterExample1 />
          </Example1Provider>
        </ThemeContextProvider>
      </AuthContextProvider> */}

      {/* custom Hook */}

      {/* <CustomHookExample /> */}

      {/* useCallBack */}
      {/* <Example /> */}

      {/* useMemo */}
      {/* <ExampleuseMemo /> */}

      {/* Recat.memo - prevent rerendering */}
      {/* <ReactMemoExample /> */}

      {/* HOC */}
      <HOCexample message="hello" addtionalProp="world" />
      <AUTHExample />
    </div>
  );
}

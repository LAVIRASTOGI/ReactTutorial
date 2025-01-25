import React, { useState } from "react";
import EvetHandlerChild from "./EvetHandlerChild";

function EventHandler({ clickHandler2 }) {
  const [name, setName] = useState("");
  const changeHandler = (event) => {
    // console.log("change handler called");
    // console.log(event);
    setName(event.target.value);
    // console.log(event.target.value);
  };
  const clickHandler = (event, isflag, nameChild) => {
    event.preventDefault();
    if (isflag) {
      console.log("name", nameChild);
      console.log(event.target.value);
      clickHandler2(nameChild);
    }
  };
  const validateHandler = (event) => {
    if (event?.target.value.length < 3) {
      alert("name should be more than 3 characters");
    }
    // console.log(event);
    // console.log(event.target.value);
  };

  return (
    <div>
      {/* <form> */}
      <input
        type="text"
        name="firstName"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={changeHandler}
        onBlur={validateHandler}
      />
      {/* <button onClick={clickHandler}>Submit</button> */}
      {/* passing through child */}
      <EvetHandlerChild
        clickHandler={(event, flag, name) => clickHandler(event, flag, name)}
      />
      {/* </form> */}
    </div>
  );
}

export default EventHandler;

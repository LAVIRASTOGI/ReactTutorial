"use client";
import { useEffect, useRef, useState } from "react";

export default function SecondUseRefExample() {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);
  const inputRef = useRef([]);

  const clickHandler = () => {
    console.log(inputRef);
    inputRef.current.forEach((ele) => {
      console.log(ele.value);
    });
  };

  useEffect(() => {
    if (inputRef && inputRef?.current) {
      inputRef?.current[3].focus();
      inputRef.current[4].style.background = "red";
    }
  }, []);

  return (
    <>
      <div
        className="p-4 border rounded-md"
        style={{
          background: "lightblue",
          borderRadius: "10px",
          margin: "10px",
          padding: "5px",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-primary"
          style={{ borderRadius: "10px", padding: "5px" }}
        >
          {isOpen ? "Collapse" : "Expand"}
        </button>
        <div
          ref={divRef}
          className="overflow-hidden transition-all duration-500"
          style={{
            overflow: "hidden",
            transition: "all 0.5s ease-in-out",
            maxHeight: isOpen ? divRef.current?.scrollHeight + "px" : "0px",
          }}
        >
          <p className="p-2">
            This is a smoothly expanding section. The height is controlled via
            `useRef`.
          </p>
        </div>
      </div>

      <div>
        {new Array(5).fill(0).map((ele, index) => (
          <input
            type="text"
            ref={(ele) => (inputRef.current[index] = ele)}
            key={index}
            id={index}
          />
        ))}
        <button onClick={clickHandler}>Submit</button>
      </div>
    </>
  );
}

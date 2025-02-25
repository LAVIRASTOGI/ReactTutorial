import { useState } from "react";
import React from "react";
import styles from "./style.module.css";
function TODOAPP() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const clickHandler = () => {
    setList([
      ...list,
      { id: Math.random(), task: task, update: false, updatedTask: "" },
    ]);
    setTask("");
  };
  const deleteHandler = (id) => {
    const updatedList = list.filter((ele) => ele.id !== id);
    setList(updatedList);
  };
  const updateHandler = (id) => {
    const updatedList = list.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          task: ele.updatedTask,
          update: false,
          updatedTask: "",
        };
      }
      return ele;
    });
    setList(updatedList);
  };
  const updateValueHandler = (ele) => {
    setList(
      list.map((item) => {
        if (item.id === ele.id) {
          return { ...item, update: true, updatedTask: ele.task };
        }
        return item;
      })
    );
  };
  const updateTaskHandler = (value, ele) => {
    setList(
      list.map((item) => {
        if (item.id === ele.id) {
          return { ...item, updatedTask: value };
        }
        return item;
      })
    );
  };
  return (
    <div className={styles["todo-container"]}>
      <h1>TODOAPP</h1>
      <input
        type="text"
        placeholder="enter your task"
        value={task}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Add</button>
      {list?.length ? (
        list.map((ele) => (
          <div key={ele.id}>
            {ele?.update ? (
              <>
                <input
                  type="text"
                  placeholder="enter your task"
                  value={ele?.updatedTask}
                  onChange={(e) => updateTaskHandler(e.target.value, ele)}
                />
              </>
            ) : (
              <span onClick={() => updateValueHandler(ele)}>{ele?.task}</span>
            )}
            <button onClick={() => deleteHandler(ele?.id)}>Delete</button>
            <button onClick={() => updateHandler(ele?.id)}>Update</button>
          </div>
        ))
      ) : (
        <h1>No task</h1>
      )}
    </div>
  );
}

export default TODOAPP;

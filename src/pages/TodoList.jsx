import React from "react";
import SunImg from "../assets/images/icon-sun.svg";
import MoonImg from "../assets/images/icon-moon.svg";
import { useState } from "react";
import ListCard from "../component/ListCard";
import FooterCard from "../component/FooterCard";
function TodoList() {
  const [mode, setMode] = useState("light");
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const handleInputChange = (event) => {
    setNewTasks(event.target.value);
  };
  const addTask = () => {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  };

  const handleModeChange = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  const handleInputSumit = (e) => {
    e.preventDefault();
    addTask();
  };
  return (
    <>
      <section
        className="main-container"
        style={{
          backgroundImage:
            mode !== "light"
              ? 'url("/images/bg-desktop-dark.jpg")'
              : 'url("/images/bg-desktop-light.jpg")',
          backgroundColor: mode === "light" ? "white" : "hsl(235, 21%, 11%)",
        }}
      >
        <main>
          <div className="title-container">
            <h1> TODO </h1>
            <img
              src={mode === "light" ? MoonImg : SunImg}
              alt=""
              onClick={handleModeChange}
            />
          </div>
          <form
            className="searching-container"
            style={{
              backgroundColor: mode === "light" ? "hsl(0, 0%, 98%)" : "",
            }}
            onSubmit={handleInputSumit}
          >
            <button className="checkbox"></button>
            <input
              type="text"
              placeholder="Currently typing"
              style={{
                color: mode === "light" ? "hsl(236, 9%, 61%)" : "",
              }}
              value={newTasks}
              onChange={handleInputChange}
            />
            {/* <button className="add"> ADD</button> */}
          </form>
          <ul
            className="list-container"
            style={{
              backgroundColor: mode === "light" ? "hsl(0, 0%, 98%)" : "",
            }}
          >
            {tasks.map((task, index) => (
              <ListCard mode={mode} task={tasks} index={index} />
            ))}

            <FooterCard mode={mode} />
          </ul>
        </main>
        <p
          className="drag-and-drop"
          style={{
            color: mode === "light" ? "hsl(235, 24%, 19%)" : "",
          }}
        >
          Drag and drop to reorder list
        </p>
      </section>
    </>
  );
}

export default TodoList;

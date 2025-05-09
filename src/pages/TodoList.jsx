import React from "react";
import SunImg from "../assets/images/icon-sun.svg";
import MoonImg from "../assets/images/icon-moon.svg";
import { useState, useEffect } from "react";
import ListCard from "../component/ListCard";
import FooterCard from "../component/FooterCard";
import FormCard from "../component/FormCard";
function TodoList() {
  const [mode, setMode] = useState("light");
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [resize, setResize] = useState(1);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setResize(resize + 1);
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:440px)");
    console.log(mediaQuery)
    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
      console.log(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange)
    return () => {
      mediaQuery.removeEventListener("change",handleMediaChange);
    };
  }, [resize]);

  

  const handleInputChange = (event) => {
    setNewTasks(event.target.value);
  };
  const addTask = () => {
    if (newTasks.trim() !== "") {
      setTasks((t) => [newTasks, ...t]);
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
  const deleteTask = (index) => {
    const filtered = tasks.filter((tsk, idx) => {
      return index !== idx;
    });
    setTasks(filtered);
  };
  return (
    <>
      <section
        className="main-container"
        style={{
          backgroundImage: isMobile
            ? mode !== "light"
              ? 'url("/images/bg-mobile-dark.jpg")'
              : 'url("/images/bg-mobile-light.jpg")'
            : mode !== "light"
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
          <FormCard
            mode={mode}
            newTasks={newTasks}
            handleInputChange={handleInputChange}
            handleInputSumit={handleInputSumit}
          />
          <ul
            className="list-container"
            style={{
              backgroundColor: mode === "light" ? "hsl(0, 0%, 98%)" : "",
            }}
          >
            {tasks.map((task, index) => (
              <ListCard
                mode={mode}
                index={index}
                task={task}
                deleteTask={deleteTask}
              />
            ))}

            <FooterCard mode={mode} tasks={tasks} setTasks={setTasks} />
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

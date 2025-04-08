import React from "react";

function ListCard({ mode, task, index }) {
  return (
    <li
      className="todo-list"
      style={{
        color: mode === "light" ? "hsl(235, 24%, 19%)" : "",
      }}
      key={index}
    >
      {" "}
      <div className="checkbox"></div>
      {task}
    </li>
  );
}

export default ListCard;

import React from "react";

function ListCard({ mode, task, index, deleteTask }) {
  return (
    <li
      className="todo-list"
      style={{
        color: mode === "light" ? "hsl(235, 24%, 19%)" : "",
      }}
      key={index}
    >
      {" "}
      <div className="task-div">
        <div className="checkbox"></div> {task}
      </div>
      <div>
        <img
          src="/images/CANCEL-ICON.png"
          alt=""
          width={"20px"}
          className="cancel-icon"
          onClick={() => deleteTask(index)}
          style={{
            filter: mode === "light" ? "invert(0%)" : "",
          }}
        />
      </div>
    </li>
  );
}

export default ListCard;

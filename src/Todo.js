import React from "react";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div
      className={`todo bg-warning ${todo.checked ? "checked" : ""}`}
      onDoubleClick={() => onToggle(todo.id)}
    >
      <IconContext.Provider value={{ color: "crimson", cursor: "pointer" }}>
        <h3>
          {todo.name} <FaTimes onClick={() => onDelete(todo.id)} />
        </h3>
      </IconContext.Provider>
      <p className="fs-5 fw-bold">{todo.date}</p>
    </div>
  );
};

export default Todo;

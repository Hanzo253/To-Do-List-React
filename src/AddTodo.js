import React from "react";
import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [checked, setChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ name, date, checked });

    setName("");
    setDate("");
    setChecked(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <label className="form-label text-primary">To-Do Name</label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="todo-name">
          Name
        </span>
        <input
          type="text"
          className="form-control"
          id="todo-name-input"
          aria-describedby="todo-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
      </div>
      <label className="form-label text-info">To-Do Date and Time</label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="todo-date">
          Date and Time
        </span>
        <input
          type="text"
          className="form-control"
          id="todo-date-input"
          aria-describedby="todo-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        ></input>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <input type="submit" className="btn btn-secondary btn-block" />
      </div>
    </form>
  );
};

export default AddTodo;

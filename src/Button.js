import React from "react";

const Button = ({ onAdd, text, className, onClear }) => {
  return (
    <div className="d-flex justify-content-evenly buttons">
      <button type="button" className={className} onClick={onAdd}>
        {text}
      </button>
      <button type="button" className="btn btn-light" onClick={onClear}>
        Clear List
      </button>
    </div>
  );
};

export default Button;

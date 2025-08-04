import React from "react";
import "./styles.css";

function Input({ id, name, type = "text", placeholder, label }) {
  return (
    <div className="input_wrapper">
      <label className="input_label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input_field"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

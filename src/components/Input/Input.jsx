import React from "react";
import "./styles.css";

function Input({ name, type = "text", placeholder, label }) {
  return (
    <div className="input_wrapper">
      <label className="input_label">{label}</label>
      <input
        className="input_field"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

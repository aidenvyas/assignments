import React from "react";

let SelectBox = props => (
  <div>
    <label>{props.label}</label>:
    <select
      name={props.name}
      onChange={e => {
        props.onchange(e.target);
      }}
    >
      {props.options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectBox;

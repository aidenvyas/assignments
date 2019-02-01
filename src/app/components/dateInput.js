import React from "react";

let InputDate = props => {
  return (
    <div>
      <label>{props.name} :- </label>
      <input
        type={props.type}
        name={props.name}
        onChange={e => {
          props.onchange(e.target);
        }}
      />
    </div>
  );
};

export default InputDate;

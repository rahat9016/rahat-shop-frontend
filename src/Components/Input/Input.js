import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.class} invalid:border-red-500 `}
        onChange={props.handleChange}
        name={props.name}
        value={props.value}
        required={props.required}
      />
    </>
  );
};

export default Input;

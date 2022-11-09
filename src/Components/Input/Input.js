import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.class}
        onChange={props.handleChange}
        name={props.name}
      />
    </>
  );
};

export default Input;

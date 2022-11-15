import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type && props.type}
      className={props.class}
      onClick={props.handleClick}
    >
      {props.children && props.children}
    </button>
  );
};

export default Button;

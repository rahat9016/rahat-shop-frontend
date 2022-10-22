import React from "react";

const Button = (props) => {
  return (
    <button type={props.type && props.type} className={props.class}>
      {props.children && props.children}
    </button>
  );
};

export default Button;

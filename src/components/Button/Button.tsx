import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="button p-5 m-5">{props.label}</button>;
};

export default Button;

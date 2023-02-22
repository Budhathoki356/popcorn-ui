import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="button pt-5">{props.label}</button>;
};

export default Button;

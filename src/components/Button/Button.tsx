import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="button h-10 w-10 p-5 m-5">{props.label}</button>;
};

export default Button;

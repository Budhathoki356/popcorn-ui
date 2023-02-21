import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="button h-10 w-10">This is aso fafinealso changed Hero of the year {props.label}</button>;
};

export default Button;
import React from "react";
import "./Input.scss";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const Input = ({ value, onChange, ...rest }: InputProps) => {
  return (
    <input
      className="Input"
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
};

export default Input;
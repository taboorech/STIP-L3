import { ReactNode } from "react";
import "./Button.scss";
import classNames from "classnames";

interface ButtonProps {
  children: string | ReactNode | ReactNode[];
  className?: string;
  [key: string]: any;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={classNames("Button", className)} {...rest}>
      { children }
    </button>
  )
};

export default Button;
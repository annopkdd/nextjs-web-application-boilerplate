import { Button as BaseButton, ButtonProps } from "flowbite-react";
import React from "react";

interface IButton extends ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = (props) => {
  const { children, ...rest } = props;

  return <BaseButton {...rest}>{children}</BaseButton>;
};

export default Button;

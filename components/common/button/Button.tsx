import React from "react";
import { combine } from "@/utils";

interface IButton {
  title?: string;
  color?: "primary" | "success" | "warning" | "failure";
  disabled?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IButton> = (props) => {
  const {
    title,
    color,
    disabled,
    leftComponent,
    rightComponent,
    onClick,
    className,
    ...rest
  } = props;

  const handleOnClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  // let bgColor = "bg-primary";
  // if (color === "success") {
  //   bgColor = "bg-success";
  // } else if (color === "warning") {
  //   bgColor = "bg-warning";
  // } else if (color === "failure") {
  //   bgColor = "bg-failure";
  // }

  return (
    <div
      onClick={handleOnClick}
      className={combine([
        className,
        // bgColor,
        `bg-${color || "primary"}`,
        "hover:opacity-80 flex flex-row justify-center items-center px-4 py-2 rounded-lg",
        "disabled:bg-gray-500 disabled:hover:bg-gray-500 cursor-pointer disabled:cursor-not-allowed",
      ])}
      {...rest}
    >
      {leftComponent ? leftComponent : null}
      {title ? (
        <span className="text-white font-ibm-medium">{title}</span>
      ) : null}
      {rightComponent ? rightComponent : null}
    </div>
  );
};

export default Button;

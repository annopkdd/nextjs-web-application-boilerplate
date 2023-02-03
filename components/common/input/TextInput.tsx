import React from "react";
import { combine } from "@/utils";

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onChangeText?: (value: string) => void;
  required?: boolean;
}

const TextInput: React.FC<ITextInput> = (props) => {
  const {
    value,
    placeholder,
    type,
    onChangeText,
    required,
    className,
    ...rest
  } = props;

  return (
    <div className={combine(["relative", className])}>
      <input
        placeholder=" "
        type={type || "text"}
        value={value}
        onChange={
          onChangeText
            ? (e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeText(e.target.value)
            : undefined
        }
        className="block px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        {...rest}
      />
      {placeholder !== undefined ? (
        <label className="absolute text-xs text-textsecondary duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
          {`${placeholder} ${required && value === "" ? "*" : ""}`}
        </label>
      ) : null}
    </div>
  );
};

export default TextInput;

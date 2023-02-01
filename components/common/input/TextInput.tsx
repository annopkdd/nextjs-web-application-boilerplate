import React from "react";

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChangeText?: (value: string) => void;
}

const TextInput: React.FC<ITextInput> = (props) => {
  const { label, type, onChangeText, className, ...rest } = props;

  return (
    <div className={className}>
      {label ? (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      ) : null}
      <input
        type={type || "text"}
        onChange={
          onChangeText
            ? (e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeText(e.target.value)
            : undefined
        }
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...rest}
      />
    </div>
  );
};

export default TextInput;

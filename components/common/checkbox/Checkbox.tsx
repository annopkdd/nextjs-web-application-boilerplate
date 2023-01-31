import React from "react";

interface ICheckbox {
  checked: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

const Checkbox = (props: ICheckbox) => {
  const { checked, label, disabled, onChange } = props;

  return (
    <div className="flex items-center mr-4">
      <input
        checked={checked}
        type="checkbox"
        disabled={disabled}
        onClick={onChange ? () => onChange(!checked) : undefined}
        className="w-4 h-4 bg-white disabled:bg-gray-500 border-gray-300 rounded cursor-pointer disabled:cursor-not-allowed"
      />
      {label ? (
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Checkbox;

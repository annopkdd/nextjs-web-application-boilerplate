import React from "react";
import Select, { components, SingleValue } from "react-select";

interface IOption {
  label: string;
  value: any;
}

interface IDropdown {
  value: any;
  options: IOption[];
  placholder?: string;
  onChange: (value: any) => void;
}

const Dropdown = (props: IDropdown) => {
  const { value, options, placholder, onChange } = props;

  const handleOnChange = (selectedValue: SingleValue<any>) => {
    if (onChange) {
      onChange(selectedValue);
    }
  };

  const selectedValue = options.find((o: IOption) => o.value === value);

  return (
    <Select
      instanceId={"custom-dropdown"}
      value={selectedValue}
      isSearchable={false}
      onChange={handleOnChange}
      options={options}
      components={{
        Control: (props) => (
          <components.Control
            {...props}
            className="h-[42px] rounded-lg cursor-pointer"
          />
        ),
      }}
      className="w-full"
      styles={{
        // @ts-ignore
        indicatorSeparator: () => {}, // removes the "stick"
      }}
    />
  );
};

export default Dropdown;

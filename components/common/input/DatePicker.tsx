import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Icons } from "@/constants";
import TailwindDatepicker from "react-tailwindcss-datepicker";
import { Image } from "../image";
import { combine } from "@/utils";

interface IDatePicker {
  placeholder?: string;
  date: Dayjs | null;
  onChange: (date: Dayjs) => void;
  required?: boolean;
  className?: string;
}

const DatePicker: React.FC<IDatePicker> = (props) => {
  const { placeholder, date, onChange, required, className } = props;

  const formatDate = date ? date.toDate() : null;
  return (
    <div className={combine(["relative", className])}>
      <TailwindDatepicker
        inputId="TailwindDatepicker"
        placeholder={" "}
        i18n={"th"}
        displayFormat={"DD/MM/YYYY"}
        asSingle={true}
        useRange={false}
        value={{ startDate: formatDate, endDate: formatDate }}
        onChange={(value) =>
          onChange ? onChange(dayjs(value?.startDate)) : {}
        }
        toggleIcon={(open: boolean) => <Image src={Icons.arrowDownIcon} />}
        inputClassName="relative pl-2.5 px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      {placeholder !== undefined ? (
        <label className="absolute text-xs text-textsecondary duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
          {`${placeholder} ${required ? "*" : ""}`}
        </label>
      ) : null}
    </div>
  );
};

export default DatePicker;

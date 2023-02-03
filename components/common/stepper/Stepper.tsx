import { combine } from "@/utils";
import React from "react";

interface IStepper {
  index: number;
  steps: string[];
  className?: string;
}

const Stepper = (props: IStepper) => {
  const { index, steps, className } = props;

  return (
    <div className={combine([className, "flex flex-row"])}>
      {steps.map((step: string, stepperIndex: number) => (
        <React.Fragment key={`_stepper_${step}_${stepperIndex}`}>
          {stepperIndex > 0 ? (
            <div className="flex-1 h-[5px] bg-[#ededed] mt-3" />
          ) : null}
          <div className="flex flex-col justify-center items-center">
            <div
              className={combine([
                index === stepperIndex ? "bg-primary" : "bg-disabled",
                "w-[30px] h-[30px] rounded-full text-white flex justify-center items-center leading-[normal]",
              ])}
            >
              {stepperIndex}
            </div>
            <span className="mt-1 text-xs">{step}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;

import React from "react";
import { Icons } from "@/constants";
import { Image } from "../image";

interface IBottomSheetModal {
  open: boolean;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

const BottomSheetModal: React.FC<IBottomSheetModal> = (props) => {
  const { open, title, onClose, children } = props;

  if (open) {
    return (
      <div className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex flex-column items-end justify-center">
          <div className="bg-white w-full p-4 rounded-t-2xl">
            <div className="flex flex-row items-center mb-4 mt-2">
              <div className="flex-1" />
              <span className="flex-[3] font-bold text-center">{title}</span>
              <div className="flex-1 text-right">
                <Image
                  alt="close-icon"
                  src={Icons.closeIcon}
                  width={30}
                  height={30}
                  onClick={onClose}
                  className="inline cursor-pointer"
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default BottomSheetModal;

import React from "react";

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
            <div className="flex flex-row mb-4 mt-2">
              <div className="flex-1" />
              <span className="flex-[3] text-center">{title}</span>
              <div onClick={onClose} className="flex-1 text-right">
                Close
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

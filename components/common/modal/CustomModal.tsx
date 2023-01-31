import React from "react";

interface ICustomModal {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const CustomModal: React.FC<ICustomModal> = (props) => {
  const { open, children } = props;

  if (open) {
    return (
      <div className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex flex-column items-center justify-center">
          {children}
        </div>
      </div>
    );
  } else return null;
};

export default CustomModal;

import React from "react";

interface IImage
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Image: React.FC<IImage> = (props) => {
  const { width, height, ...rest } = props;

  return (
    <img
      {...rest}
      style={{ width: width || "auto", height: height || "auto" }}
    />
  );
};

export default Image;

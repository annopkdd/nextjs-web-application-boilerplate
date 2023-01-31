import React from "react";

interface IImage
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Image: React.FC<IImage> = (props) => {
  const { className, ...rest } = props;

  return <img {...rest} />;
};

export default Image;

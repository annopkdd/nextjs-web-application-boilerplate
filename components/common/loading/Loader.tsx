import { Spinner } from "flowbite-react";
import React from "react";

interface ILoader {
  size?: number;
}

const Loader: React.FC<ILoader> = (props) => {
  const { size } = props;

  return <Spinner size={size} />;
};

export default Loader;

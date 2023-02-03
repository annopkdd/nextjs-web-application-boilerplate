import { Icons } from "@/constants";
import React from "react";
import { Image } from "../image";

interface ILoader {
  size?: number;
}

const Loader: React.FC<ILoader> = (props) => {
  const { size } = props;

  return <Image src={Icons.spinner} />;
};

export default Loader;

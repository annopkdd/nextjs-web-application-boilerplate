import React from "react";
import { Images } from "@/constants";
import { CSSObject } from "@/types";
import { IAuthModel } from "@/modules/auth/model";
import { authStoreContext } from "@/RootStore";
import Image from "next/image";

const AuthLayout: React.FC<any> = ({ children }) => {
  const authStore: IAuthModel = React.useContext(authStoreContext);

  React.useEffect(() => {
    // @ts-ignore
    if (window !== undefined) {
      // @ts-ignore
      const vh = window.innerHeight * 0.01;
      // @ts-ignore
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  });

  return (
    <div className="overflow-y-auto" style={styles.container}>
      <div className="flex flex-row items-center">
        <Image src={Images.appLogo} alt="logo" width={50} height={50} />
      </div>
      {children}
    </div>
  );
};

const styles: CSSObject = {
  container: {
    height: "calc(var(--vh, 1vh) * 100)",
  },
};

export default AuthLayout;

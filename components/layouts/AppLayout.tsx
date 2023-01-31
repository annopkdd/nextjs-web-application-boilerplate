import React from "react";
import { use100vh } from "react-div-100vh";
import { IAuthModel } from "modules/auth/model";
import { IAppModel } from "modules/AppModel";
import { useRouter } from "next/router";
import { appStoreContext, authStoreContext } from "@/RootStore";

interface IAdminLayout {
  children?: React.ReactNode;
}

const AdminLayout: React.FC<IAdminLayout> = (props) => {
  const router = useRouter();
  const height100Vh = use100vh();

  const authStore: IAuthModel = React.useContext(authStoreContext);
  const appStore: IAppModel = React.useContext(appStoreContext);

  return (
    <div
      className={"overflow-y-auto"}
      style={{ height: height100Vh ? height100Vh : 0 }}
    >
      {props.children}
    </div>
  );
};

export default AdminLayout;

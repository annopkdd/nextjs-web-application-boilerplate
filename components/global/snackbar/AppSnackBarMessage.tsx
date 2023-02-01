import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { IAppModel } from "modules/AppModel";
import { appStoreContext } from "RootStore";
import { observer } from "mobx-react-lite";
import { Alert } from "flowbite-react";

const AppSnackBarMessage: React.FunctionComponent = (props) => {
  const appStore: IAppModel = React.useContext(appStoreContext);

  React.useEffect(() => {
    if (appStore.snackbarMessage.isShowSnackBar) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "hot-toast-animate-enter" : "hot-toast-animate-leave"
            }    shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <Alert color={appStore.snackbarMessage.snackBarType}>
              <span>{appStore.snackbarMessage.snackBarMessage}</span>
            </Alert>
          </div>
        ),
        { duration: 3000 }
      );

      setTimeout(() => appStore.snackbarMessage.hideSnackBar(), 3000);
    }
  }, [appStore.snackbarMessage.isShowSnackBar]);

  return <Toaster position="bottom-center" />;
};

export default observer(AppSnackBarMessage);

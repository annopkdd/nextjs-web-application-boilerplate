import { types } from "mobx-state-tree";
import { customtypes } from "utils";

export const SnackBarModel = types
  .model("SnackBarModel", {
    isShowSnackBar: customtypes.optional(types.boolean, false),
    snackBarMessage: customtypes.optional(types.string, ""),
    snackBarType: customtypes.optional(types.string, ""),
  })
  .views((self) => ({
    //
  }))
  .actions((self) => ({
    showSnackBar: (
      snackBarMessage: string,
      snackBarType: "failure" | "gray" | "info" | "success" | "warning"
    ) => {
      if (snackBarMessage) {
        self.isShowSnackBar = true;
        self.snackBarMessage = snackBarMessage;
        self.snackBarType = snackBarType;
      }
    },
    hideSnackBar: () => {
      self.isShowSnackBar = false;
    },
  }));

export type ISnackBarModel = typeof SnackBarModel.Type;

export const AppModel = types
  .model("AppModel", {
    loading: customtypes.optional(types.boolean, false),
    snackbarMessage: customtypes.optional(SnackBarModel, {}),
  })
  .views((self) => ({
    //
  }))
  .actions((self) => ({
    toggleLoading: () => {
      self.loading = !self.loading;
    },
    setField: (fieldName: string, value: any) => {
      // @ts-ignore
      self[fieldName] = value;
    },
  }));

export type IAppModel = typeof AppModel.Type;

import React from "react";
import Head from "next/head";
import { appStoreContext } from "@/RootStore";
import { IAppModel } from "@/modules/AppModel";
import {
  BottomSheetModal,
  Button,
  Checkbox,
  CustomModal,
  Dropdown,
  Image,
  TextInput,
} from "@/components/common";
import { Images } from "@/constants";

export default function Home() {
  const appStore: IAppModel = React.useContext(appStoreContext);

  const [dropdownValue, setDropdownValue] = React.useState<number>(0);
  const [isShowModal1, setIsShowModal1] = React.useState<boolean>(false);
  const [isShowBottomSheetModal, setIsShowBottomSheetModal] =
    React.useState<boolean>(false);

  const showAppLoading = () => {
    appStore.toggleLoading();
    setTimeout(() => appStore.toggleLoading(), 3000);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full p-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start bg-white shadow-md p-4 gap-4">
            <span className="font-bold">App State</span>
            <Button onClick={showAppLoading}>Show App Modal</Button>
            <Button
              color="success"
              onClick={() =>
                appStore.snackbarMessage.showSnackBar("Success!", "success")
              }
            >
              Show Success Snackbar
            </Button>
            <Button
              color="warning"
              onClick={() =>
                appStore.snackbarMessage.showSnackBar("Warning!", "warning")
              }
            >
              Show Warning Snackbar
            </Button>
            <Button
              color="failure"
              onClick={() =>
                appStore.snackbarMessage.showSnackBar("Failure!", "failure")
              }
            >
              Show Failure Snackbar
            </Button>
          </div>
          <div className="flex flex-col bg-white shadow-md p-4 gap-4">
            <span className="font-bold">Button</span>
            <div className="flex flex-row gap-4">
              <Button>Default</Button>
              <Button color="gray">Gray</Button>
              <Button color="dark">Dark</Button>
              <Button color="success">Success</Button>
              <Button color="failure">Failure</Button>
              <Button color="warning">Warning</Button>
              <Button color="purple">Purple</Button>
            </div>
          </div>
          <div className="flex flex-col bg-white shadow-md p-4 gap-4">
            <span className="font-bold">Input</span>
            <TextInput type="text" label="First name" placeholder="John" />
            <TextInput
              type="tel"
              label="Phone Number"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
            <TextInput label="Website" type="url" placeholder="flowbite.com" />
            <TextInput label="Number" type="number" placeholder="number" />
            <TextInput
              label="Email"
              type="email"
              placeholder="john.doe@company.com"
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="•••••••••"
            />
          </div>

          <div className="flex flex-col bg-white shadow-md p-4 gap-4">
            <span className="font-bold">Dropdown</span>
            <div className="flex flex-row gap-4">
              <Dropdown
                value={dropdownValue}
                onChange={(value) => setDropdownValue(value.value)}
                placholder="กรุณาเลือก"
                options={[
                  { label: "option 1", value: 1 },
                  { label: "option 2", value: 2 },
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md p-4 gap-4">
            <span className="font-bold">Image</span>
            <div className="flex flex-row gap-4">
              <Image
                src={Images.defaultUserProfileImage}
                alt="image description"
                width={250}
              />
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md p-4 gap-4">
            <span className="font-bold">Modal</span>
            <div className="flex flex-row gap-4">
              <Button onClick={() => setIsShowModal1(true)}>
                Open Modal 1
              </Button>
              <Button onClick={() => setIsShowBottomSheetModal(true)}>
                Open Bottom Sheet Modal
              </Button>
              <CustomModal open={isShowModal1}>
                <div onClick={() => setIsShowModal1(false)}>
                  <span>Hello from Modal 1</span>
                </div>
              </CustomModal>
              <BottomSheetModal
                open={isShowBottomSheetModal}
                title={"Hello BottomSheetModal"}
                onClose={() => setIsShowBottomSheetModal(false)}
              >
                <div className="flex flex-col items-center">
                  <span>Bottom Sheet Modal Content</span>
                  <Image
                    src={Images.defaultUserProfileImage}
                    alt="image description"
                    width={250}
                  />
                </div>
              </BottomSheetModal>
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md p-4 gap-4">
            <span className="font-bold">Checkbox</span>
            <div className="flex flex-row gap-4">
              <Checkbox checked={false} />
              <Checkbox checked />
              <Checkbox checked label="Checkbox 3" />
              <Checkbox checked={false} label="Checkbox 4" disabled />
              <Checkbox checked label="Checkbox 5" disabled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

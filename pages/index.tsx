import React from "react";
import Head from "next/head";
import dayjs, { Dayjs } from "dayjs";
import { appStoreContext } from "@/RootStore";
import { IAppModel } from "@/modules/AppModel";
import {
  BottomSheetModal,
  Button,
  Checkbox,
  CustomModal,
  DatePicker,
  Dropdown,
  Image,
  RadioButton,
  TextInput,
} from "@/components/common";
import { Images } from "@/constants";

export default function Home() {
  const appStore: IAppModel = React.useContext(appStoreContext);

  const [dropdownValue, setDropdownValue] = React.useState<number>(0);
  const [dateInputValue, setDateInputValue] = React.useState<Dayjs | null>(
    null
  );
  const [isShowModal1, setIsShowModal1] = React.useState<boolean>(false);
  const [isShowBottomSheetModal, setIsShowBottomSheetModal] =
    React.useState<boolean>(false);

  const showAppLoading = () => {
    appStore.setLoading(true);
    setTimeout(() => appStore.setLoading(false), 3000);
  };

  return (
    <div className="w-full p-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start bg-white shadow-md p-4 gap-4">
          <span className="font-bold">App State</span>
          <Button title="Show App Modal" onClick={showAppLoading} />
          <Button
            title="Show Success Snackbar"
            color="success"
            onClick={() =>
              appStore.snackbarMessage.showSnackBar("Success!", "success")
            }
          />
          <Button
            title="Show Warning Snackbar"
            color="warning"
            onClick={() =>
              appStore.snackbarMessage.showSnackBar("Warning!", "warning")
            }
          />

          <Button
            title="Show Failure Snackbar"
            color="failure"
            onClick={() =>
              appStore.snackbarMessage.showSnackBar("Failure!", "error")
            }
          />
        </div>

        <div className="flex flex-col bg-white shadow-md p-4 gap-4">
          <span className="font-bold">Button</span>
          <div className="flex flex-row gap-4 flex-wrap">
            <Button title="Default" />
            <Button title="Success" color="success" />
            <Button title="Failure" color="failure" />
            <Button title="Warning" color="warning" />
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-md p-4 gap-4 overflow-x-auto">
          <span className="font-bold">Typography</span>

          <div className="flex flex-row gap-4">
            <span className="text-xs text-gray-900">Aa</span>
            <span className="text-sm text-gray-900">Aa</span>
            <span className="text-base text-gray-900">Aa</span>
            <span className="text-lg text-gray-900">Aa</span>
            <span className="text-xl text-gray-900">Aa</span>
            <span className="text-2xl text-gray-900">Aa</span>
            <span className="text-3xl text-gray-900">Aa</span>
            <span className="text-4xl text-gray-900">Aa</span>
            <span className="text-5xl text-gray-900">Aa</span>
            <span className="text-6xl text-gray-900">Aa</span>
            <span className="text-gray-900 text-7xl">Aa</span>
          </div>

          <div className="flex flex-row gap-4">
            <span className="text-blue-600">
              This text is in the blue color.
            </span>
            <span className="text-green-500">
              This text is in the green color.
            </span>
            <span className="text-red-600">This text is in the red color.</span>
            <span className="text-purple-600">
              This text is in the purple color.
            </span>
            <span className="text-teal-600">
              This text is in the teal color.
            </span>
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-md p-4 gap-4">
          <span className="font-bold">Input</span>
          <TextInput type="text" placeholder="First name" />
          <TextInput
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <TextInput placeholder="Website" type="url" />
          <TextInput placeholder="Number" type="number" />
          <TextInput placeholder="Email" type="email" />
          <TextInput placeholder="Password" type="password" />
        </div>

        <div className="flex flex-col bg-white shadow-md p-4 gap-4">
          <span className="font-bold">Dropdown</span>
          <div className="flex flex-row gap-4">
            <Dropdown
              value={dropdownValue}
              onChange={(value) => setDropdownValue(value.value)}
              placeholder="กรุณาเลือก"
              options={[
                { label: "option 1", value: 1 },
                { label: "option 2", value: 2 },
              ]}
            />
            <Dropdown
              value={dropdownValue}
              onChange={(value) => setDropdownValue(value.value)}
              placeholder="กรุณาเลือก"
              options={[
                { label: "option 1", value: 1 },
                { label: "option 2", value: 2 },
              ]}
              disabled
            />
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-md p-4 gap-4">
          <span className="font-bold">DatePicker</span>
          <div className="flex flex-row gap-4">
            <DatePicker
              placeholder="วันที่"
              date={dateInputValue}
              onChangeDate={(date) => setDateInputValue(date)}
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
            <Button
              title=" Open Modal 1"
              onClick={() => setIsShowModal1(true)}
            />
            <Button
              title="Open Bottom Sheet Modal"
              onClick={() => setIsShowBottomSheetModal(true)}
            />
            <CustomModal open={isShowModal1}>
              <div onClick={() => setIsShowModal1(false)}>
                <span>Close Modal 1</span>
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
          <div className="flex flex-row gap-4 flex-wrap">
            <Checkbox checked={false} />
            <Checkbox checked />
            <Checkbox checked={false} label="Checkbox 4" />
            <Checkbox checked label="Checkbox 3" />
            <Checkbox checked disabled />
            <Checkbox checked={false} disabled />
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-md p-4 gap-4">
          <span className="font-bold">Radio</span>
          <div className="flex flex-row gap-4 flex-wrap">
            <RadioButton checked={false} />
            <RadioButton checked />
            <RadioButton checked={false} label="Radio Button 4" />
            <RadioButton checked label="Radio Button 3" />
            <RadioButton checked disabled />
            <RadioButton checked={false} disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

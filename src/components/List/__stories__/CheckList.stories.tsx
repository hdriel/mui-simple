import React from "react";
import {
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
} from "@mui/icons-material";

import CheckList from "../CheckList";

export default {
  title: "Data-Display/CheckList",
  component: CheckList,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "400px",
          height: "500px",
          padding: "0.5em",
          backgroundColor: "#E7EBF0",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <CheckList />;
};

export const CheckboxListAlignStart = () => {
  const items = [
    { title: "Line item 1", checked: true },
    { title: "Line item 2", checked: false },
    { divider: true },
    { title: "Line item 3" },
    "Line item 4",
  ];

  return (
    <CheckList
      items={items}
      alignCheck="start"
      controlType="checkbox"
      sx={{ minWidth: 35 }}
    />
  );
};

export const CheckboxListAlignEnd = () => {
  const items = [
    {
      checked: true,
      avatar: { image: "1.jpg" },
      title: "Line item 1",
    },
    {
      checked: false,
      avatar: { image: "2.jpg" },
      title: "Line item 2",
    },
    { avatar: { image: "3.jpg" }, title: "Line item 3" },
    {
      divider: true,
    },
    "Line item 4",
    { title: "Line item 5", subtitle: "inset title", inset: true },
  ];

  return <CheckList items={items} alignCheck="end" controlType="checkbox" />;
};
export const SwitchListAlignEnd = () => {
  const items = [
    {
      checked: true,
      startIcon: <WifiIcon />,
      title: "Wi-Fi",
    },
    {
      startIcon: <BluetoothIcon />,
      title: "Bluetooth",
    },
  ];

  return (
    <CheckList
      buttonItems={false}
      disablePaddingItems={false}
      title="Setting"
      items={items}
      alignCheck="end"
      controlType="switch"
    />
  );
};

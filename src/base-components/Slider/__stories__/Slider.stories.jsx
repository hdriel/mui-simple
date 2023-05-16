import React from "react";
import { action } from "@storybook/addon-actions";
import {
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import Slider from "../Slider";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default {
  title: "Inputs/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "500px",
          height: "450px",
          border: "1px dashed black",
          padding: "1em",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Slider {...actions} />;
};

export const VolumeExample = () => {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Stack spacing={3}>
      <Slider
        label={"Volume"}
        startIcon={<VolumeDownIcon />}
        endIcon={<VolumeUpIcon />}
        value={value}
        onChange={handleChange}
        {...actions}
      />
      <Slider
        startIcon={<VolumeDownIcon />}
        endIcon={<VolumeUpIcon />}
        value={value}
        onChange={handleChange}
        {...actions}
      />
      <Slider
        label={"Volume"}
        startIcon={<VolumeDownIcon />}
        endIcon={<VolumeUpIcon />}
        value={45}
        onChange={handleChange}
        disabled
        {...actions}
      />
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack>
      <Slider muiColor="primary" label="primary" />
      <Slider muiColor="secondary" label="secondary" />
      <Slider muiColor="info" label="info" />
      <Slider muiColor="error" label="error" />
      <Slider label="Default" />
      <Slider label="#D050CC" customColor="#D050CC" />
    </Stack>
  );
};

export const Sized = () => {
  return (
    <Stack spacing={3}>
      <Slider label="small" defaultValue={45} size="small" />
      <Slider label="medium" defaultValue={80} size="medium" />
      <Slider label="default" />
    </Stack>
  );
};

export const ValueLabel = () => {
  return (
    <Stack spacing={3}>
      <Slider label="auto" displayValue="auto" defaultValue={45} />
      <Slider label="on" displayValue="on" defaultValue={80} />
      <Slider label="off" displayValue="off" defaultValue={45} />
      <Slider label="default" defaultValue={80} />
      <Slider
        label="disabled-auto"
        displayValue="auto"
        defaultValue={45}
        disabled
      />
      <Slider
        label="disabled-on"
        displayValue="on"
        defaultValue={80}
        disabled
      />
      <Slider
        label="disabled-off"
        displayValue="off"
        defaultValue={45}
        disabled
      />
      <Slider label="disabled-default" defaultValue={45} disabled />
    </Stack>
  );
};

export const RangesObject = () => {
  return (
    <Stack spacing={3}>
      <Slider
        label="min: 150, max: 200, step: 2.5"
        range={{ min: 150, max: 200, step: 2.5, marks: true }}
        defaultValue={180}
        displayValue="on"
      />
      <Slider
        label="min: 50, step: 15"
        range={{ min: 50, step: 15, marks: true }}
        defaultValue={65}
        displayValue="on"
      />
      <Slider
        label="max: 50, step: 10"
        range={{ max: 50, step: 10, marks: true }}
        defaultValue={100}
        displayValue="on"
      />
      <Slider
        label="max: 50, step: 8"
        range={{
          min: 10,
          max: 20,
          step: 2,
          marks: [
            {
              label: "12L",
              value: 12,
            },
            {
              label: "16L",
              value: 16,
            },
            {
              label: "18M",
              value: 18,
            },
          ],
        }}
        defaultValue={40}
        displayValue="on"
      />
    </Stack>
  );
};
export const RangesArray = () => {
  return (
    <Stack spacing={3}>
      <Slider
        label="[min: 150, max: 200, step: 2.5, marks: true]"
        range={[150, 200, 2.5, true]}
        defaultValue={180}
        displayValue="on"
      />
      <Slider
        label="[50, undefined, 15, true]"
        range={[50, undefined, 15, true]}
        defaultValue={80}
        displayValue="on"
      />
      <Slider
        label="[undefined, 50, 10, true]"
        range={[undefined, 50, 10, true]}
        defaultValue={50}
        displayValue="on"
      />
      <Slider
        label="[-50, 50, 10, true]"
        range={[-50, 50, 10, true]}
        defaultValue={0}
        displayValue="on"
      />
      <Slider
        label="[undefined, undefined, 10, true]"
        range={[undefined, undefined, 10, true]}
        defaultValue={90}
        displayValue="on"
      />
    </Stack>
  );
};

export const Marks = () => {
  return (
    <Stack spacing={3}>
      <Slider marks defaultValue={50} displayValue="on" />
      <Slider
        marks={[
          { label: "0", value: 0 },
          { label: "100", value: 100 },
          { label: "25-hi", value: 25 },
          { label: "60C", value: 60 },
        ]}
        defaultValue={180}
        displayValue="on"
      />
      <Slider
        label={"chooseFromMarksList"}
        marks={[
          { label: "0", value: 0 },
          { label: "100", value: 100 },
          { label: "25-hi", value: 25 },
          { label: "60C", value: 60 },
        ]}
        chooseFromMarksList
        defaultValue={180}
        displayValue="on"
      />
    </Stack>
  );
};

export const Disabled = () => {
  return (
    <Stack spacing={3}>
      <Slider defaultValue={40} />
      <Slider defaultValue={40} disabled />
    </Stack>
  );
};

export const ValueLabelFormat = () => {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Stack spacing={3}>
      <Slider defaultValue={40} valueLabelFormat={(n) => `${n}MB`} />
      <Slider
        defaultValue={40}
        value={value}
        onChange={handleChange}
        valueLabelFormat={(n) => (n >= 50 ? `${n} UP` : `${n} DOWN`)}
      />
    </Stack>
  );
};

export const TrackBarPosition = () => {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Stack spacing={3}>
      <Slider
        label={"normal"}
        defaultValue={40}
        valueLabelFormat={(n) => `${n} Normal`}
        trackBarLinePosition="normal"
      />
      <Slider
        label={"inverted"}
        defaultValue={40}
        valueLabelFormat={(n) => `${n} opposite`}
        trackBarLinePosition="inverted"
      />
      <Slider
        label={"none"}
        defaultValue={40}
        valueLabelFormat={(n) => `${n} none`}
        trackBarLinePosition={"none"}
      />
      <Slider
        label={"false"}
        defaultValue={40}
        valueLabelFormat={(n) => `${n} false`}
        trackBarLinePosition={false}
      />
    </Stack>
  );
};

const marks = [
  { value: 0, label: "0°C" },
  { value: 20, label: "20°C" },
  { value: 37, label: "37°C" },
  { value: 100, label: "100°C" },
];
export const Orientation = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <Slider
        startIcon={<VolumeDownIcon />}
        endIcon={<VolumeUpIcon />}
        label="horizontal"
        defaultValue={40}
        orientation="horizontal"
        marks={marks}
      />
      <div style={{ height: 300 }}>
        <Slider
          startIcon={<VolumeDownIcon />}
          endIcon={<VolumeUpIcon />}
          label="vertical"
          defaultValue={40}
          orientation="vertical"
          marks={marks}
        />
      </div>
    </div>
  );
};

export const InputField = () => {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    action("onChangeInput")(newValue);
  };
  const handleInputChange = (event) => {
    const v = event.target.value;
    setValue(v === "" ? "" : Number(v));
    action("onChangeInput")(v);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
      action("onChangeInput")(0);
    } else if (value > 100) {
      setValue(100);
      action("onChangeInput")(100);
    }
  };

  return (
    <>
      <Slider
        defaultValue={40}
        startIcon={<VolumeUpIcon />}
        endIcon={<VolumeDownIcon />}
      />
      <Slider
        defaultValue={40}
        startIcon={<VolumeUpIcon />}
        value={value}
        onChange={handleChange}
        inputCmp={
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
            }}
          />
        }
      />
      <Slider
        defaultValue={40}
        startIcon={<VolumeUpIcon />}
        endIcon={<VolumeDownIcon />}
        value={value}
        onChange={handleChange}
        inputCmp={
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
            }}
          />
        }
      />
    </>
  );
};

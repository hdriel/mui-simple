import React from "react";
import { action } from "@storybook/addon-actions";
import {
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import RangeSlider from "../RangeSlider";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default {
  title: "Inputs/RangeSlider",
  component: RangeSlider,
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
  return <RangeSlider {...actions} />;
};
export const DisableSwap = () => {
  const [value1, setValue1] = React.useState(30);
  const [value2, setValue2] = React.useState(40);
  const handleChangeValue1 = (event, newValue) => setValue1(newValue);
  const handleChangeValue2 = (event, newValue) => setValue2(newValue);

  return (
    <Stack spacing={3}>
      <RangeSlider
        label="swap"
        fromValue={value1}
        toValue={value2}
        onChangeFromValue={handleChangeValue1}
        onChangeToValue={handleChangeValue2}
        minDistance={10}
      />
      <RangeSlider
        label="DisableSwap - locking"
        disableSwap="locking"
        fromValue={value1}
        toValue={value2}
        onChangeFromValue={handleChangeValue1}
        onChangeToValue={handleChangeValue2}
        minDistance={10}
      />
      <RangeSlider
        label="DisableSwap - trailing"
        disableSwap="trailing"
        fromValue={value1}
        toValue={value2}
        onChangeFromValue={handleChangeValue1}
        onChangeToValue={handleChangeValue2}
        minDistance={10}
      />
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack>
      <RangeSlider muiColor="primary" label="primary" displayValue={[10, 50]} />
      <RangeSlider
        muiColor="secondary"
        label="secondary"
        displayValue={[10, 50]}
      />
      <RangeSlider muiColor="info" label="info" displayValue={[10, 50]} />
      <RangeSlider muiColor="error" label="error" displayValue={[10, 50]} />
      <RangeSlider label="Default" displayValue={[10, 50]} />
      <RangeSlider
        label="#D050CC"
        customColor="#D050CC"
        displayValue={[10, 50]}
      />
    </Stack>
  );
};

export const Sized = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider label="small" defaultValue={[45, 80]} size="small" />
      <RangeSlider label="medium" defaultValue={[80, 100]} size="medium" />
      <RangeSlider label="default" />
    </Stack>
  );
};

export const ValueLabel = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider label="auto" displayValue="auto" defaultValue={[45, 50]} />
      <RangeSlider label="on" displayValue="on" defaultValue={[80, 90]} />
      <RangeSlider label="off" displayValue="off" defaultValue={[45, 60]} />
      <RangeSlider label="default" defaultValue={[20, 50]} />
      <RangeSlider
        label="disabled-auto"
        displayValue="auto"
        defaultValue={[45, 80]}
        disabled
      />
      <RangeSlider
        label="disabled-on"
        displayValue="on"
        defaultValue={[50, 80]}
        disabled
      />
      <RangeSlider
        label="disabled-off"
        displayValue="off"
        defaultValue={[45, 49]}
        disabled
      />
      <RangeSlider label="disabled-default" defaultValue={[5, 45]} disabled />
    </Stack>
  );
};

export const RangesObject = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider
        label="min: 150, max: 200, step: 2.5"
        range={{ min: 150, max: 200, step: 2.5, marks: true }}
        defaultValue={[160, 180]}
        displayValue="on"
      />
      <RangeSlider
        label="min: 50, step: 15"
        range={{ min: 50, step: 15, marks: true }}
        defaultValue={[65, 90]}
        displayValue="on"
      />
      <RangeSlider
        label="max: 50, step: 10"
        range={{ max: 50, step: 10, marks: true }}
        defaultValue={[10, 100]}
        displayValue="on"
      />
      <RangeSlider
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
        defaultValue={[40, 90]}
        displayValue="on"
      />
    </Stack>
  );
};
export const RangesArray = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider
        label="[min: 150, max: 200, step: 2.5, marks: true]"
        range={[150, 200, 2.5, true]}
        defaultValue={180}
        displayValue="on"
      />
      <RangeSlider
        label="[50, undefined, 15, true]"
        range={[50, undefined, 15, true]}
        defaultValue={80}
        displayValue="on"
      />
      <RangeSlider
        label="[undefined, 50, 10, true]"
        range={[undefined, 50, 10, true]}
        defaultValue={50}
        displayValue="on"
      />
      <RangeSlider
        label="[-50, 50, 10, true]"
        range={[-50, 50, 10, true]}
        defaultValue={0}
        displayValue="on"
      />
      <RangeSlider
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
      <RangeSlider marks defaultValue={50} displayValue="on" />
      <RangeSlider
        marks={[
          { label: "0", value: 0 },
          { label: "100", value: 100 },
          { label: "25-hi", value: 25 },
          { label: "60C", value: 60 },
        ]}
        defaultValue={180}
        displayValue="on"
      />
      <RangeSlider
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
      <RangeSlider defaultValue={40} />
      <RangeSlider defaultValue={40} disabled />
    </Stack>
  );
};

export const ValueLabelFormat = () => {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Stack spacing={3}>
      <RangeSlider defaultValue={40} valueLabelFormat={(n) => `${n}MB`} />
      <RangeSlider
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
      <RangeSlider
        label={"normal"}
        defaultValue={40}
        valueLabelFormat={(n) => `${n} Normal`}
        trackBarLinePosition="normal"
      />
      <RangeSlider
        label={"inverted"}
        defaultValue={40}
        valueLabelFormat={(n) => `${n} opposite`}
        trackBarLinePosition="inverted"
      />
      <RangeSlider
        label={"none"}
        defaultValue={40}
        valueLabelFormat={(n) => `${n} none`}
        trackBarLinePosition={"none"}
      />
      <RangeSlider
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
      <RangeSlider
        label="horizontal"
        defaultValue={40}
        orientation="horizontal"
        marks={marks}
      />
      <div style={{ height: 300 }}>
        <RangeSlider
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
      <RangeSlider
        defaultValue={40}
        startIcon={<VolumeUpIcon />}
        endIcon={<VolumeDownIcon />}
      />
      <RangeSlider
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
      <RangeSlider
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

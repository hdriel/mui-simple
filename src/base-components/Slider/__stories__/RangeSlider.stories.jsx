import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import {
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import RangeSlider from "../RangeSlider";
import Slider from "../Slider";
import { SLIDER_STYLES } from "../Slider.consts";

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

function useValue(v1 = 0, v2 = 0) {
  const [fromValue, setFromValue] = React.useState(v1);
  const [toValue, setToValue] = React.useState(v2);
  const onChangeFromValue = (event, newValue) => setFromValue(newValue);
  const onChangeToValue = (event, newValue) => setToValue(newValue);

  return {
    fromValue,
    toValue,
    onChangeFromValue,
    onChangeToValue,
  };
}

export const DisableSwap = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider label="swap" {...useValue(30, 50)} minDistance={10} />
      <RangeSlider
        label="DisableSwap - locking"
        disableSwap="locking"
        {...useValue(30, 50)}
        minDistance={10}
      />
      <RangeSlider
        label="DisableSwap - trailing"
        disableSwap="trailing"
        {...useValue(30, 50)}
        minDistance={10}
      />
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack>
      <RangeSlider color="primary" label="primary" defaultValue={[10, 50]} />
      <RangeSlider
        color="secondary"
        label="secondary"
        defaultValue={[10, 50]}
      />
      <RangeSlider color="info" label="info" defaultValue={[10, 50]} />
      <RangeSlider color="error" label="error" defaultValue={[10, 50]} />
      <RangeSlider label="Default" defaultValue={[10, 50]} />
      <RangeSlider label="#D050CC" color="#D050CC" defaultValue={[10, 50]} />
    </Stack>
  );
};

export const SliderStyle = () => {
  return (
    <Stack>
      <Slider
        label={SLIDER_STYLES.IOS}
        defaultValue={[25, 75]}
        sliderStyle={SLIDER_STYLES.IOS}
      />
      <Slider
        label={SLIDER_STYLES.PRETTO}
        defaultValue={[25, 75]}
        sliderStyle={SLIDER_STYLES.PRETTO}
      />
      <Slider
        label={SLIDER_STYLES.AIRBNB}
        defaultValue={[25, 75]}
        sliderStyle={SLIDER_STYLES.AIRBNB}
      />
      <Slider
        label={SLIDER_STYLES.TOOLTIP_VALUE}
        defaultValue={[25, 75]}
        sliderStyle={SLIDER_STYLES.TOOLTIP_VALUE}
      />
      <Slider label="custom style" defaultValue={[25, 75]} color={"#D050CC"} />
      <Slider label="default" defaultValue={[25, 75]} />
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
        label="min: 10, max: 50, step: 2"
        range={{
          min: 10,
          max: 50,
          step: 2,
          marks: [
            { label: "12L", value: 12 },
            { label: "16L", value: 16 },
            { label: "18M", value: 18 },
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
        defaultValue={[170, 180]}
        displayValue="on"
      />
      <RangeSlider
        label="[50, undefined, 15, true]"
        range={[50, undefined, 15, true]}
        defaultValue={[60, 75]}
        displayValue="on"
      />
      <RangeSlider
        label="[undefined, 50, 10, true]"
        range={[undefined, 50, 10, true]}
        defaultValue={[30, 40]}
        displayValue="on"
      />
      <RangeSlider
        label="[-50, 50, 10, true]"
        range={[-50, 50, 10, true]}
        defaultValue={[-15, -5]}
        displayValue="on"
      />
      <RangeSlider
        label="[undefined, undefined, 10, true]"
        range={[undefined, undefined, 10, true]}
        defaultValue={[12, 18]}
        displayValue="on"
      />
    </Stack>
  );
};

export const Marks = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider marks defaultValue={[25, 40]} displayValue="on" />
      <RangeSlider
        marks={[
          { label: "0", value: 0 },
          { label: "100", value: 100 },
          { label: "25-hi", value: 25 },
          { label: "60C", value: 60 },
        ]}
        defaultValue={[25, 40]}
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
        defaultValue={[25, 40]}
        displayValue="on"
      />
    </Stack>
  );
};

export const Disabled = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider defaultValue={[25, 40]} />
      <RangeSlider defaultValue={[25, 40]} disabled />
    </Stack>
  );
};

export const ValueLabelFormat = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider defaultValue={[25, 30]} valueLabelFormat={(n) => `${n}MB`} />
      <RangeSlider
        defaultValue={[25, 30]}
        valueLabelFormat={(n) => (n >= 50 ? `${n} UP` : `${n} DOWN`)}
      />
    </Stack>
  );
};

export const TrackBarPosition = () => {
  return (
    <Stack spacing={3}>
      <RangeSlider
        label={"normal"}
        defaultValue={[30, 60]}
        valueLabelFormat={(n) => `${n} Normal`}
        trackBarLinePosition="normal"
      />
      <RangeSlider
        label={"inverted"}
        defaultValue={[30, 60]}
        valueLabelFormat={(n) => `${n} opposite`}
        trackBarLinePosition="inverted"
      />
      <RangeSlider
        label={"none"}
        defaultValue={[30, 60]}
        valueLabelFormat={(n) => `${n} none`}
        trackBarLinePosition={"none"}
      />
      <RangeSlider
        label={"false"}
        defaultValue={[30, 60]}
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
        startIcon={<VolumeDownIcon />}
        endIcon={<VolumeUpIcon />}
        label="horizontal"
        defaultValue={[30, 60]}
        orientation="horizontal"
        marks={marks}
      />
      <div style={{ height: 300 }}>
        <RangeSlider
          startIcon={<VolumeDownIcon />}
          endIcon={<VolumeUpIcon />}
          label="vertical"
          defaultValue={[30, 60]}
          orientation="vertical"
          marks={marks}
        />
      </div>
    </div>
  );
};

function useHandlerInputChange(handler, event) {
  const v = event.target.value;
  const value = v === "" ? "" : Number(v);
  handler(event, value);
}
export const InputField = () => {
  const { fromValue, onChangeFromValue, onChangeToValue, toValue } = useValue(
    30,
    50
  );

  const handleInputChangeFrom = useHandlerInputChange.bind(
    null,
    onChangeFromValue
  );
  const handleInputChangeTo = useHandlerInputChange.bind(null, onChangeToValue);

  const handleBlur = () => {
    if (fromValue < 0) {
      onChangeFromValue(0);
      action("onChangeFromValue")(0);
    } else if (toValue > 100) {
      onChangeToValue(100);
      action("onChangeToValue")(100);
    }
  };

  return (
    <>
      <RangeSlider
        defaultValue={[40, 60]}
        startIcon={<VolumeUpIcon />}
        endIcon={<VolumeDownIcon />}
      />
      <RangeSlider
        defaultValue={[40, 60]}
        startIcon={<VolumeUpIcon />}
        fromValue={fromValue}
        onChangeFromValue={onChangeFromValue}
        onChangeToValue={onChangeToValue}
        toValue={toValue}
        inputCmp={
          <>
            <Input
              value={fromValue}
              size="small"
              onChange={handleInputChangeFrom}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
              }}
            />
            <Input
              value={toValue}
              size="small"
              onChange={handleInputChangeTo}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
              }}
            />
          </>
        }
      />
      <RangeSlider
        defaultValue={[40, 60]}
        startIcon={<VolumeUpIcon />}
        endIcon={<VolumeDownIcon />}
        fromValue={fromValue}
        onChangeFromValue={onChangeFromValue}
        onChangeToValue={onChangeToValue}
        toValue={toValue}
        inputCmp={
          <>
            <Input
              value={fromValue}
              size="small"
              onChange={handleInputChangeFrom}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
              }}
            />
            <Input
              value={toValue}
              size="small"
              onChange={handleInputChangeTo}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
              }}
            />
          </>
        }
      />
    </>
  );
};

export const MultiValue = () => {
  const [value, setValue] = useState([30, 60, 90, 100]);
  const onChange = (event, newValue) => setValue(newValue);

  return <RangeSlider label="MultiValue" value={value} onChange={onChange} />;
};

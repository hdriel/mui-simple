import React, { useState } from "react";
import TextField from "../TextField";
import { Clear as ClearIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

export default {
  title: "Inputs/TextField",
  component: TextField,
  decorators: [
    (Story) => (
      <div
        style={{ width: "450px", padding: "1em", border: "1px dashed black" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <TextField />;
};

export const StartIcon = () => {
  return (
    <TextField
      label="Start Icon Input"
      startCmp="kg"
      variant="outlined"
      type="number"
    />
  );
};

export const EndIcon = () => {
  return (
    <TextField
      label="End Icon Input"
      endCmp={<ClearIcon />}
      variant="standard"
    />
  );
};

export const Password = () => {
  return (
    <TextField
      label="End Icon Input"
      endCmp={<ClearIcon />}
      variant="standard"
      type="password"
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("Hello world");

  return (
    <TextField
      label="Disabled Input"
      disabled
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const ReadOnly = () => {
  const [value, setValue] = useState("Hello world");

  return (
    <TextField
      label="Read Only Input"
      readOnly
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Multiline = () => {
  const [value, setValue] = useState("Hello world");

  return (
    <TextField
      label="Multiline input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      multiline
      maxRows={4}
    />
  );
};

export const Required = () => {
  const [value, setValue] = useState("Hello world");

  return (
    <TextField
      label="username"
      required
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Error = () => {
  const [value, setValue] = useState("3#%32");

  return (
    <TextField
      label="username"
      error
      helperText="Invalid username"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const HelperText = () => {
  const [value, setValue] = useState("Test");

  return (
    <TextField
      label="username"
      helperText="username for credentials"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const NotFullwith = () => {
  return (
    <TextField
      fullWidth={false}
      label="End Icon Input"
      endCmp={<ClearIcon />}
      variant="standard"
    />
  );
};

export const Focused = () => {
  return (
    <TextField
      fullWidth={false}
      label="auto focused input"
      variant="outlined"
      autoFocus
    />
  );
};

export const MuiltipleInputs = () => {
  const [value, setValue] = useState("Test");

  return (
    <>
      <div style={{ display: "flex", gap: "16px" }}>
        <TextField
          fullWidth={false}
          label="First Input"
          endCmp={<ClearIcon />}
          variant="standard"
          helperText={" "}
        />
        <TextField
          fullWidth={false}
          label="Second Input"
          endCmp={<ClearIcon onClick={() => setValue("")} />}
          error={!value}
          helperText={!value ? "Hi it's second input" : " "}
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <TextField
          fullWidth={false}
          label="First Input"
          endCmp={<ClearIcon />}
          variant="standard"
          error
        />
        <TextField
          fullWidth={false}
          label="Second Input"
          endCmp={<ClearIcon />}
          variant="standard"
        />
      </div>
    </>
  );
};

export const ThemedAndColored = () => {
  const [value, setValue] = useState("Hello World");

  return (
    <Stack spacing={2}>
      <TextField
        label={"default color"}
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextField
        color="secondary"
        label="default color"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {[
        "primary",
        "secondary",
        "info",
        "warning",
        "success",
        "error",
        "primary.dark",
        "secondary.dark",
        "info.dark",
        "warning.dark",
        "success.dark",
        "error.dark",
        "#014299",
        "#4a4a02",
        "#ff59f3",
        "REDS", // text invalid color
      ].map((customColor, index, arr) => (
        <TextField
          key={customColor}
          label={`${customColor} color`}
          startCmp={index % 2 === 0 && "COLOR:"}
          endCmp={index % 4 === 0 && <ClearIcon />}
          variant="outlined"
          colorActive={arr[index - 1]}
          colorLabel={customColor}
          colorText={arr[index + 1]}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ))}
    </Stack>
  );
};
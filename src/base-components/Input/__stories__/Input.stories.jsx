import React, { useState } from "react";
import Input from "../Input";
import { Clear as ClearIcon } from "@mui/icons-material";

export default {
  title: "base-components/Input",
  component: Input,
};

export const Default = () => {
  return <Input />;
};

export const StartIcon = () => {
  return (
    <Input
      label="Start Icon Input"
      startCmp="kg"
      variant="outlined"
      type="number"
    />
  );
};

export const EndIcon = () => {
  return (
    <Input label="End Icon Input" endCmp={<ClearIcon />} variant="standard" />
  );
};

export const Password = () => {
  return (
    <Input
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
    <Input
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
    <Input
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
    <Input
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
    <Input
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
    <Input
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
    <Input
      label="username"
      helperText="username for credentials"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const NotFullwith = () => {
  return (
    <Input
      fullWidth={false}
      label="End Icon Input"
      endCmp={<ClearIcon />}
      variant="standard"
    />
  );
};

export const Focused = () => {
  return (
    <Input
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
        <Input
          fullWidth={false}
          label="First Input"
          endCmp={<ClearIcon />}
          variant="standard"
          helperText={" "}
        />
        <Input
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
        <Input
          fullWidth={false}
          label="First Input"
          endCmp={<ClearIcon />}
          variant="standard"
          error
        />
        <Input
          fullWidth={false}
          label="Second Input"
          endCmp={<ClearIcon />}
          variant="standard"
        />
      </div>
    </>
  );
};

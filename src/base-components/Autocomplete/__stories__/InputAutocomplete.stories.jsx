import React, { useState } from "react";
import InputAutocomplete from "../InputAutocomplete";
import { Box, Stack } from "@mui/material";
import {
  FormatColorFill as FormatColorFillIcon,
  Airplay as AirplayIcon,
} from "@mui/icons-material";
import Button from "../../Button/Button";
import {
  countries,
  timeSlots,
  top100Films,
  top100FilmsWithFirstLetters,
} from "./InputAutocomplete.mocks";

export default {
  title: "Inputs/Inputs/InputAutocomplete",
  component: InputAutocomplete,
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
  return <InputAutocomplete />;
};

const iconsProps = {
  startCmpExternal: (
    <Button icon={<AirplayIcon />} onClick={(e) => e.stopPropagation()} />
  ),
  endCmpExternal: (
    <Button
      icon={<FormatColorFillIcon />}
      onClick={(e) => e.stopPropagation()}
    />
  ),
};

export const FilmOptions = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputAutocomplete
          key={variant}
          label="Movie"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          getOptionLabel={(option) => option.title}
          variant={variant}
          options={top100Films}
          {...iconsProps}
        />
      ))}
    </Stack>
  );
};

export const CountrySelect = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant, index) => (
        <InputAutocomplete
          key={variant}
          label="Choose a country"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          {...iconsProps}
        />
      ))}
    </Stack>
  );
};

export const ControllableStates = () => {
  const options = [
    { id: 123, label: "Option 1" },
    { id: 222, label: "Option 2" },
  ];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Stack spacing={4}>
      {["filled" /*, "standard", "outlined"*/].map((variant, index) => (
        <InputAutocomplete
          key={variant}
          label="Controllable"
          variant={variant}
          options={options}
          value={value}
          onChange={(event, newValue) => {
            console.log("onChange", newValue);
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            console.log("onInputChange", newInputValue);
            setInputValue(newInputValue);
          }}
          autoHighlight
          getOptionLabel={(option) => option.label}
          {...iconsProps}
        />
      ))}
    </Stack>
  );
};

export const HelperText = () => {
  const options = [
    { id: 123, label: "Option 1" },
    { id: 222, label: "Option 2" },
  ];

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputAutocomplete
          key={variant}
          label="Input Helper Text"
          variant={variant}
          options={options}
          helperText="choose some option"
          error={Math.random() * 10 > 5}
          {...iconsProps}
        />
      ))}
    </Stack>
  );
};

export const GroupedByCategories = () => {
  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputAutocomplete
          key={variant}
          id="grouped-demo"
          label="With categories"
          options={top100FilmsWithFirstLetters}
          groupBy={(option) => option.firstLetter}
          sortBy="title"
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
        />
      ))}
    </Stack>
  );
};

export const DisabledOptions = () => {
  const _options = timeSlots
    .slice(0)
    .map((option, index) => ({ time: option, disabled: index % 4 === 0 }));
  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputAutocomplete
          key={variant}
          variant={variant}
          id="grouped-demo"
          label="Disabled options"
          options={_options}
          getOptionLabel={(option) => option.time}
          sx={{ width: 300 }}
        />
      ))}
    </Stack>
  );
};

import React, { useState } from "react";
import InputAutocomplete from "../InputAutocomplete";
import { Stack } from "@mui/material";
import {
  FormatColorFill as FormatColorFillIcon,
  Airplay as AirplayIcon,
} from "@mui/icons-material";
import Button from "../../Button/Button";

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

export const FilmOptions = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
  ];
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant, index) => (
        <InputAutocomplete
          key={variant}
          label="Movie"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          options={top100Films}
          startCmp={
            <Button
              icon={<AirplayIcon />}
              onClick={(e) => e.stopPropagation()}
            />
          }
          startCmpExternal={
            <Button
              icon={<AirplayIcon />}
              onClick={(e) => e.stopPropagation()}
            />
          }
          endCmp={
            <Button
              icon={<FormatColorFillIcon />}
              onClick={(e) => e.stopPropagation()}
            />
          }
          endCmpExternal={
            <Button
              icon={<FormatColorFillIcon />}
              onClick={(e) => e.stopPropagation()}
            />
          }
        />
      ))}
    </Stack>
  );
};

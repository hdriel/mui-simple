import React, { useState } from "react";
import { Stack } from "@mui/material";

import Accordion from "../Accordion";
import Slider from "../../Slider/Slider";

export default {
  title: "Surfaces/Accordion",
  component: Accordion,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "500px",
          height: "500px",
          padding: "0.5em",
          border: "1px dashed black",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <Accordion />;
};

export const BasicAccordion = () => {
  const accordionProps = [
    {
      id: "panel0",
      label: "Accordion 0",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel1",
      label: "Accordion 1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      detailsMaxRows: 1,
    },
    {
      id: "panel2",
      label: "Accordion 2",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      detailsMaxRows: 2,
    },
    {
      id: "panel3",
      label: "Disabled Accordion",
      details: undefined,
      disabled: true,
    },
  ];
  return (
    <div>
      {accordionProps.map(
        ({ id, label, details, disabled, detailsMaxRows }) => (
          <Accordion
            key={id}
            id={id}
            label={label}
            details={details}
            disabled={disabled}
            detailsMaxRows={detailsMaxRows}
          />
        )
      )}
    </div>
  );
};

export const Expanded = () => {
  const [expanded, setExpended] = useState(false);
  const onChange = (accordionId) => {
    console.log("onChangeHandler", accordionId);
    setExpended(accordionId);
  };

  const accordionProps = [
    {
      id: "panel0",
      label: "Accordion 0",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel1",
      label: "Accordion 1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      detailsMaxRows: 1,
    },
    {
      id: "panel2",
      label: "Accordion 2",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      detailsMaxRows: 2,
    },
    {
      id: "panel3",
      label: "Disabled Accordion",
      details: undefined,
      disabled: true,
    },
  ];
  return (
    <div>
      {accordionProps.map(
        ({ id, label, details, disabled, detailsMaxRows }, index) => (
          <Accordion
            key={id}
            id={id}
            label={label}
            details={details}
            disabled={disabled}
            detailsMaxRows={detailsMaxRows}
            {...(index && { expanded, onChange })}
          />
        )
      )}
    </div>
  );
};

export const SecondLabelAccordion = () => {
  const accordionProps = [
    {
      id: "panel0",
      label: "General settings",
      secondaryLabel: "I am an accordion",
      details:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      id: "panel1",
      label: "Users",
      secondaryLabel: "You are currently not an owner",
      details:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
      detailsMaxRows: 1,
    },
    {
      id: "panel2",
      label: "Advanced settings",
      secondaryLabel:
        "Filtering has been entirely disabled for whole web server",
      details:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
      detailsMaxRows: 2,
    },
    {
      id: "panel3",
      label: "Personal data",
      secondaryLabel: undefined,
      details:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
      disabled: true,
    },
  ];
  return (
    <div>
      {accordionProps.map(
        ({ id, label, details, disabled, secondaryLabel, detailsMaxRows }) => (
          <Accordion
            key={id}
            id={id}
            label={label}
            secondaryLabel={secondaryLabel}
            details={details}
            disabled={disabled}
            detailsMaxRows={detailsMaxRows}
          />
        )
      )}
    </div>
  );
};

export const CustomDetails = () => {
  return (
    <div>
      <Accordion id={"panel0"} label={"Children as details"}>
        Hello custom children
        <Slider />
      </Accordion>
      <Accordion
        id={"panel1"}
        label={"Details String Prop"}
        details={
          "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
        }
        detailsMaxRows={2}
      />
    </div>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Accordion muiColor="primary">primary</Accordion>
      <Accordion muiColor="secondary">secondary</Accordion>
      <Accordion>Default</Accordion>
      <Accordion color={"#D050CC"}>Colored</Accordion>;
    </Stack>
  );
};

export const CustomStyle = () => {
  return (
    <div>
      <Accordion
        id={"panel11"}
        label={"Details String Prop"}
        details={
          "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
        }
        detailsMaxRows={2}
        useCustomStyle
      />
      <Accordion
        id={"panel12"}
        label={"Details String Prop"}
        details={
          "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
        }
        detailsMaxRows={2}
        useCustomStyle
      />

      <Accordion
        id={"panel21"}
        label={"Details String Prop"}
        details={
          "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
        }
        detailsMaxRows={2}
      />

      <Accordion
        id={"panel22"}
        label={"Details String Prop"}
        details={
          "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
        }
        detailsMaxRows={2}
      />
    </div>
  );
};

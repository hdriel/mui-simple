import React from "react";

import AppBar from "../AppBar";

export default {
  title: "Surfaces/AppBar",
  component: AppBar,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "500px",
          width: "800px",
          backgroundColor: "#e2e2e2",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <AppBar />;
};

import React from "react";

import { RippleBox } from "../RippleBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Others/RippleBox",
  component: RippleBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div
        style={{ width: "300px", height: "300px", border: "1px solid black" }}
      >
        <Story />
      </div>
    ),
  ],
};

const dummyProps = {
  color: "#1010DD",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <RippleBox {...args} />;
}

export const Custom = Template.bind({});
Custom.args = { ...dummyProps };

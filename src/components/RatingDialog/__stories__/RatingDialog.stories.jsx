import React, { useState } from "react";
import RatingDialog from "../RatingDialog";
import { Button, Tooltip } from "../../../base-components";

export default {
  title: "components/RatingDialog",
  component: RatingDialog,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  const onCloseHandler = ({ rating, reason }) => {
    console.table({ rating, reason });
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Given a feedback dialog">
        <Button onClick={() => setOpen(!open)}>Feedback</Button>
      </Tooltip>
      <RatingDialog open={open} onClose={onCloseHandler} />
    </>
  );
};

import "./App.css";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import { Button, Tooltip, AppBar } from "./base-components";
import { RatingDialog } from "./components";

function App() {
  const [open, setOpen] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);

  const onCloseHandler = ({ rating, reason }) => {
    if (reason !== undefined) setIsFeedback(true);

    console.table({ rating, reason });
    setOpen(false);
  };

  return (
    <>
      <AppBar />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.hadriel",
        }}
      >
        {isFeedback ? (
          <Typography>Thanks for your feedback</Typography>
        ) : (
          <Tooltip title="Given a feedback dialog">
            <Button onClick={() => setOpen(!open)}>Feedback</Button>
          </Tooltip>
        )}

        <RatingDialog open={open} onClose={onCloseHandler} />
      </Box>
    </>
  );
}

export default App;

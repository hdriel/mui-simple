import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Rating, Dialog, Input, Avatar } from "../../base-components";

const MIN_POSITIVE_RATING = 3;

export default function RatingDialog({ open, onClose }) {
  const [rating, setRating] = useState(5);
  const [reason, setReason] = useState("");

  const onCloseHandler = () => {
    onClose?.({
      rating,
      reason: rating <= MIN_POSITIVE_RATING ? reason : "",
    });
  };

  return (
    <Dialog
      title={
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Avatar username="Hadriel Benjo" />
          <p>Rating My Lesson</p>
        </div>
      }
      open={open}
      // onClose={onCloseHandler}
      draggable={false} // NOTICE: using draggable mode will lose focus and reset position on each setState changed, dont use it in these case
      actions={[
        {
          label: "cancel",
          color: "secondary",
          onClick: () => onClose({ rating: undefined, reason: undefined }),
        },
        {
          label: "submit",
          color: "primary",
          onClick: onCloseHandler,
        },
      ]}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Rating value={rating} onChange={setRating} showLabel />
        </Grid>
        <Grid item xs={12} sm={6}>
          {rating <= MIN_POSITIVE_RATING && (
            <Input
              label="Reason"
              required
              multiline
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          )}
        </Grid>
      </Grid>
    </Dialog>
  );
}

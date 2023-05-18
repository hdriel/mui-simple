import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Box, Grid, Stack } from "@mui/material";

import Avatar from "../../Avatar/Avatar";

import Skeleton from "../Skeleton";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";

export default {
  title: "Feedback/Skeleton",
  component: Skeleton,
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
  return <Skeleton loading />;
};

export const TextSkeleton = () => {
  return (
    <Stack spacing={3} direction={"row"}>
      <Skeleton loading>
        <Typography>Typography text</Typography>
      </Skeleton>
      <Skeleton loading>original text</Skeleton>
      <Skeleton loading>
        <span>span text</span>
      </Skeleton>
    </Stack>
  );
};

export const AvatarSkeleton = () => {
  return (
    <Stack spacing={3} direction={"row"}>
      <Skeleton loading>
        <Avatar size={"50px"} />
      </Skeleton>
      <Skeleton loading>
        <Avatar size={"100px"} />
      </Skeleton>
      <Skeleton loading>
        <Avatar />
      </Skeleton>
    </Stack>
  );
};

export const Dynamic = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button onClick={() => setLoading(!loading)}>
          {loading ? "Hide" : "Show"} Skeleton
        </Button>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs>
          <Skeleton loading={loading}>
            <Avatar size={"50px"} />
          </Skeleton>
        </Grid>
        <Grid item xs={10}>
          <Skeleton loading={loading}>
            <Typography>Typography text</Typography>
          </Skeleton>
          <Skeleton loading={loading}>
            <Typography>
              a long long long long text text text text text
            </Typography>
          </Skeleton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const Timeout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000 * 1.5);
  }, []);

  return (
    <Grid container>
      <Grid item container xs={12}>
        <Grid item xs>
          <Skeleton loading={loading}>
            <Avatar size={"50px"} />
          </Skeleton>
        </Grid>
        <Grid item xs={10}>
          <Skeleton loading={loading}>
            <Typography>Typography text</Typography>
          </Skeleton>
          <Skeleton loading={loading}>
            <Typography>
              a long long long long text text text text text
            </Typography>
          </Skeleton>
        </Grid>
      </Grid>
    </Grid>
  );
};

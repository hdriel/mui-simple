import React from "react";
import { Stack } from "@mui/material";

import CircularProgress from "../CircularProgress";

export default {
  title: "Feedback/CircularProgress",
  component: CircularProgress,
};

const actions = {};

export const Default = () => {
  return <CircularProgress {...actions} />;
};

export const Themed = () => {
  return (
    <Stack>
      <CircularProgress {...actions} muiColor="primary">
        primary
      </CircularProgress>
      <CircularProgress {...actions} muiColor="secondary">
        secondary
      </CircularProgress>
      <CircularProgress {...actions}>Default</CircularProgress>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <CircularProgress {...actions} customColor={"#12bfb0"}>
      Colored
    </CircularProgress>
  );
};

export const Sized = () => {
  return (
    <Stack spacing={4}>
      <CircularProgress {...actions} size={10} />
      <CircularProgress {...actions} size={20} />
      <CircularProgress {...actions} size={50} />
      <CircularProgress {...actions} />
    </Stack>
  );
};

export const Variant = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={4}>
        <CircularProgress {...actions} variant="determinate" value={10} />
        <CircularProgress {...actions} variant="determinate" value={20} />
        <CircularProgress {...actions} variant="determinate" value={30} />
        <CircularProgress {...actions} variant="determinate" value={40} />
        <CircularProgress {...actions} variant="determinate" value={50} />
        <CircularProgress {...actions} variant="determinate" value={60} />
        <CircularProgress {...actions} variant="determinate" value={70} />
        <CircularProgress {...actions} variant="determinate" value={80} />
        <CircularProgress {...actions} variant="determinate" value={90} />
        <CircularProgress {...actions} variant="determinate" value={100} />
        <CircularProgress {...actions} variant="indeterminate" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <CircularProgress {...actions} />
      </Stack>
    </Stack>
  );
};

export const Thickness = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={4}>
        <CircularProgress
          {...actions}
          variant="determinate"
          value={10}
          thickness={1}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={20}
          thickness={2}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={30}
          thickness={3}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={40}
          thickness={4}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={50}
          thickness={5}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={60}
          thickness={6}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={70}
          thickness={7}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={80}
          thickness={8}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={90}
          thickness={9}
        />
        <CircularProgress
          {...actions}
          variant="determinate"
          value={100}
          thickness={10}
        />
        <CircularProgress {...actions} variant="indeterminate" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <CircularProgress {...actions} />
      </Stack>
    </Stack>
  );
};

export const ShowProgress = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={4}>
        <CircularProgress value={progress} showProgress />
        <CircularProgress
          value={progress}
          showProgress
          variant="indeterminate"
        />
      </Stack>
      <Stack direction="row" spacing={4}>
        <CircularProgress value={progress} showProgress={false} />
        <CircularProgress
          value={progress}
          showProgress={false}
          variant="indeterminate"
        />
      </Stack>
    </Stack>
  );
};

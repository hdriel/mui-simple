import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Snackbar as MuiSnackbar, Grow, Slide } from "./Snackbar.styled";
import Button from "../Button/Button";
import { Close as CloseIcon } from "@mui/icons-material";
import Alert from "../Alert/Alert";

export default function Snackbar({
  open,
  autoHideDuration,
  resumeHideDuration,
  onClose,
  onClickAway,
  vertical,
  horizontal,
  variant,
  title,
  message,
  messageId,
  actions,
  animation,
  animationDuration,
  animationProps,
  slideDirection,
  fullWidth,
  ...props
}) {
  const action = useMemo(
    () =>
      []
        .concat(
          actions,
          onClose
            ? [<Button muiColor="inherit" size="small" icon={<CloseIcon />} />]
            : []
        )
        ?.map((action, index) =>
          React.isValidElement(action) ? (
            React.cloneElement(action, { key: index })
          ) : (
            <Button
              key={index}
              {...(typeof action === "object" ? action : undefined)}
            >
              {action?.label ?? action}
            </Button>
          )
        ),
    [actions, onClose]
  );

  const transition = useMemo(() => {
    const SlideTransition = (props) => (
      <Slide direction={slideDirection ?? "up"} {...props}>
        {props.children}
      </Slide>
    );
    const GrowTransition = (props) => <Grow {...props}>{props.children}</Grow>;
    const FadeTransition = (props) => <Grow {...props}>{props.children}</Grow>;

    return {
      fade: FadeTransition,
      slide: SlideTransition,
      grow: GrowTransition,
    }[animation ?? "slide"];
  }, [slideDirection, animation]);

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      resumeHideDuration={resumeHideDuration}
      onClose={(event, reason) => {
        if (reason === "clickaway") return onClickAway?.();
        return onClose?.(event, reason);
      }}
      key={messageId}
      anchorOrigin={
        (vertical || horizontal) && {
          vertical: vertical ?? "top",
          horizontal: horizontal ?? "right",
        }
      }
      message={message}
      title={title}
      fullWidth={fullWidth}
      TransitionComponent={transition}
      transitionDuration={
        animationDuration ?? (animation !== "slide" ? 1000 : undefined)
      }
      TransitionProps={animationProps}
      {...props}
      action={action} // 'action' end after props, to prevent bugs from storybook, that any props has storybook action field
    >
      {["success", "error", "warning", "info"].includes(variant) ? (
        <Alert
          onClose={onClose}
          severity={variant}
          action={action}
          title={title}
        >
          {props.children ?? message}
        </Alert>
      ) : null}
    </MuiSnackbar>
  );
}

Snackbar.propTypes = {
  fullWidth: PropTypes.bool,
  open: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  resumeHideDuration: PropTypes.number,
  onClose: PropTypes.func,
  onClickAway: PropTypes.func,
  vertical: PropTypes.oneOf(["top", "bottom"]),
  horizontal: PropTypes.oneOf(["left", "center", "right"]),
  variant: PropTypes.oneOf(["success", "error", "warning", "info"]),
  title: PropTypes.string,
  message: PropTypes.string,
  messageId: PropTypes.string,
  actions: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  animation: PropTypes.oneOf(["grow", "fade", "slide"]),
  animationDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  animationProps: PropTypes.object,
  slideDirection: PropTypes.oneOf(["left", "up", "right", "down"]),
};

Snackbar.defaultProps = {
  open: undefined,
  autoHideDuration: undefined,
  resumeHideDuration: undefined,
  onClose: undefined,
  onClickAway: undefined,
  vertical: undefined,
  horizontal: undefined,
  title: undefined,
  message: undefined,
  messageId: undefined,
  action: undefined,
  animation: undefined,
  animationDuration: undefined,
  animationProps: undefined,
  slideDirection: undefined,
};

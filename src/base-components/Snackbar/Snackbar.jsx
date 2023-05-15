import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  Alert as MuiAlert,
  Snackbar as MuiSnackbar,
  Grow,
  Fade,
  Slide,
} from "./Snackbar.styled";
import Button from "../Button/Button";
import { Close as CloseIcon } from "@mui/icons-material";

export default function Snackbar({
  open,
  autoHideDuration,
  resumeHideDuration,
  onClose,
  onClickAway,
  onExited,
  vertical,
  horizontal,
  variant,
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
        ?.map((action) =>
          React.isValidElement(action) ? (
            action
          ) : (
            <Button {...action}>{action?.label ?? action}</Button>
          )
        ),
    [actions]
  );

  const transition = useMemo(() => {
    const SlideTransition = (props) => (
      <Slide direction={slideDirection ?? "up"} {...props}>
        {props.children}
      </Slide>
    );
    const GrowTransition = (props) => <Grow {...props}>{props.children}</Grow>;

    return {
      fade: Fade,
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
      onExited={onExited}
      anchorOrigin={
        (vertical || horizontal) && {
          vertical: vertical ?? "top",
          horizontal: horizontal ?? "right",
        }
      }
      message={message}
      fullWidth={fullWidth}
      TransitionComponent={transition}
      transitionDuration={
        animationDuration ?? (animation !== "slide" ? 1000 : undefined)
      }
      TransitionProps={animationProps}
      {...props}
      action={action} // 'action' end after props, to prevent bugs from storybook, that any props has storybook action field
    >
      {["success", "error", "warning", "info"].includes(variant) && (
        <MuiAlert onClose={onClose} severity={variant} action={action}>
          {props.children ?? message}
        </MuiAlert>
      )}
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
  onExited: PropTypes.func,
  vertical: PropTypes.oneOf(["top", "bottom"]),
  horizontal: PropTypes.oneOf(["left", "center", "right"]),
  message: PropTypes.string,
  variant: PropTypes.oneOf(["success", "error", "warning", "info"]),
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
  onExited: undefined,
  vertical: undefined,
  horizontal: undefined,
  message: undefined,
  messageId: undefined,
  action: undefined,
  animation: undefined,
  animationDuration: undefined,
  animationProps: undefined,
  slideDirection: undefined,
};

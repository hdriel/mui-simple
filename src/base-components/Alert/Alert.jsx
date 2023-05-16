import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Alert as MuiAlert, AlertTitle } from "./Alert.styled";
import Button from "../Button/Button";

export default function Alert({
  severity,
  variant,
  onClose,
  icon,
  muiColor,
  customColor,
  action,
  title,
  actionLabel,
  children,
  ...props
}) {
  const actionCmp = useMemo(() => {
    const actionList = []
      .concat(action, actionLabel)
      .filter(Boolean)
      .map((action) => {
        return typeof action === "string" ? (
          <Button muiColor="inherit" size="small">
            {action}
          </Button>
        ) : (
          action
        );
      });

    return actionList.length ? actionList : undefined;
  }, [action, actionLabel]);

  return (
    <MuiAlert
      severity={severity}
      variant={variant}
      onClose={onClose}
      icon={icon}
      color={muiColor}
      customColor={customColor}
      {...props}
      action={actionCmp} // 'action' end after props, to prevent bugs from storybook, that any props has storybook action field
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );
}

Alert.propTypes = {
  severity: PropTypes.oneOf(["error", "info", "success", "warning"]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  onClose: PropTypes.func,
  icon: PropTypes.node,
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  actionLabel: PropTypes.string,
  action: PropTypes.node,
};

Alert.defaultProps = {
  severity: undefined,
  variant: undefined,
  onClose: undefined,
  icon: undefined,
  muiColor: undefined,
  customColor: undefined,
  actionLabel: undefined,
  action: undefined,
};

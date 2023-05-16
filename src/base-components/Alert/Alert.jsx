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
  actions,
  title,
  children,
  ...props
}) {
  const actionCmp = useMemo(() => {
    const actionList = []
      .concat(actions)
      .filter(Boolean)
      .map((action, index) => {
        return React.isValidElement(action) ? (
          React.cloneElement(action, { key: index })
        ) : (
          <Button
            key={index}
            muiColor="inherit"
            size="small"
            onClick={(event) => action?.onClick?.(event) ?? onClose?.(event)}
            {...(typeof action === "object" ? action : undefined)}
          >
            {action?.label ?? action}
          </Button>
        );
      });

    return actionList.length ? actionList : undefined;
  }, [actions]);

  return (
    <MuiAlert
      severity={severity}
      variant={variant}
      onClose={onClose}
      icon={icon}
      color={muiColor}
      customColor={customColor}
      title={title}
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
  actions: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func }),
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func }),
        PropTypes.string,
      ])
    ),
  ]),
};

Alert.defaultProps = {
  severity: undefined,
  variant: undefined,
  onClose: undefined,
  icon: undefined,
  muiColor: undefined,
  customColor: undefined,
  actions: undefined,
};

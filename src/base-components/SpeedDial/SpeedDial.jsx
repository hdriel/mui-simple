import React from "react";
import PropTypes from "prop-types";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
} from "./SpeedDial.styled";

export default function SpeedDial({
  top,
  bottom,
  right,
  left,
  icon,
  hidden,
  direction,
  actions,
  ...props
}) {
  return (
    <MuiSpeedDial
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      hidden={hidden}
      direction={direction}
      {...props}
    >
      {actions?.map((action) => (
        <MuiSpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </MuiSpeedDial>
  );
}

SpeedDial.propTypes = {
  hidden: PropTypes.bool,
  icon: PropTypes.node,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
  direction: PropTypes.oneOf(["down", "left", "right", "up"]),
};

SpeedDial.defaultProps = {
  hidden: <SpeedDialIcon />,
  icon: <SpeedDialIcon />,
  actions: [],
  top: undefined,
  bottom: undefined,
  right: undefined,
  left: undefined,
  direction: undefined,
};

import React from "react";
import PropTypes from "prop-types";
import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
  SpeedDialIcon,
} from "./SpeedDial.styled";
import Backdrop from "../Backdrop/Backdrop";

export default function SpeedDial({
  customColor,
  muiColor,
  top,
  bottom,
  right,
  left,
  openIcon,
  closeIcon,
  hidden,
  direction,
  actions,
  onClose,
  onOpen,
  open,
  showOnBackdrop,
  ...props
}) {
  return (
    <MuiSpeedDial
      ariaLabel={props.ariaLabel ?? ""}
      customColor={customColor}
      muiColor={muiColor}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      hidden={hidden}
      direction={direction}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      icon={openIcon && <SpeedDialIcon openIcon={closeIcon} icon={openIcon} />}
      {...props}
    >
      {showOnBackdrop && <Backdrop open={open} />}
      {actions?.map((action) => (
        <MuiSpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen={action.showTooltip}
          onClick={action.onClick?.()}
        />
      ))}
    </MuiSpeedDial>
  );
}

SpeedDial.propTypes = {
  customColor: PropTypes.string,
  muiColor: PropTypes.string,
  hidden: PropTypes.bool,
  icon: PropTypes.node,
  openIcon: PropTypes.node,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.node,
      showTooltip: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
  direction: PropTypes.oneOf(["down", "left", "right", "up"]),
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  showOnBackdrop: PropTypes.bool,
};

SpeedDial.defaultProps = {
  hidden: undefined,
  openIcon: <SpeedDialIcon />,
  closeIcon: undefined,
  actions: [],
  top: undefined,
  bottom: undefined,
  right: undefined,
  left: undefined,
  direction: undefined,
  onClose: undefined,
  onOpen: undefined,
  open: undefined,
  showOnBackdrop: undefined,
};

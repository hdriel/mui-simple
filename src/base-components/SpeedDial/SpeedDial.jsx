import React from "react";
import PropTypes from "prop-types";
import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
  SpeedDialIcon,
} from "./SpeedDial.styled";
// import Backdrop from "../Backdrop/Backdrop";
import { Backdrop, darken } from "@mui/material";

export default function SpeedDial({
  customColor,
  muiColor,
  top,
  bottom,
  right,
  left,
  icon,
  openIcon,
  hidden,
  direction,
  actions,
  onClose,
  onOpen,
  open,
  showOnBackdrop,
  showTooltip,
  ...props
}) {
  const getCustomColor = (suffix) =>
    customColor
      ? suffix.includes("dark")
        ? darken(customColor, 0.2)
        : customColor
      : undefined;

  const getMuiColor = (suffix) =>
    muiColor
      ? muiColor?.endsWith(suffix)
        ? muiColor
        : `${muiColor}${suffix}`
      : undefined;

  const color = (suffix) => getCustomColor(suffix) ?? getMuiColor(suffix);

  return (
    <>
      {showOnBackdrop && <Backdrop open={open} />}
      <MuiSpeedDial
        ariaLabel={props.ariaLabel ?? ""}
        top={top}
        bottom={bottom}
        right={right}
        left={left}
        hidden={hidden}
        direction={direction}
        onClose={onClose}
        onOpen={onOpen}
        open={open}
        showTooltip={showTooltip}
        icon={<SpeedDialIcon openIcon={openIcon} icon={icon} />}
        FabProps={{
          sx: {
            bgcolor: color(".main"),
            "&:hover": { bgcolor: color(".dark") },
          },
        }}
        {...props}
      >
        {actions?.map((action) => (
          <MuiSpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={showTooltip}
            onClick={() => action.onClick?.()}
          />
        ))}
      </MuiSpeedDial>
    </>
  );
}

SpeedDial.propTypes = {
  customColor: PropTypes.string,
  muiColor: PropTypes.string,
  hidden: PropTypes.bool,
  showTooltip: PropTypes.bool,
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
  showTooltip: true,
  icon: undefined,
  openIcon: undefined,
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

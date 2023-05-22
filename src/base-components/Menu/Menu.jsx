import React, { cloneElement, isValidElement, useState } from "react";
import PropTypes from "prop-types";
import { Check as CheckIcon } from "@mui/icons-material";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Popper as MuiPopper,
  Menu as MuiMenu,
  MenuWrapper,
} from "./Menu.styled";
import Typography from "../Typography/Typography";
import Divider from "../Divider/Divider";
import { Grow } from "@mui/material";

export default function Menu({
  width,
  maxHeight,
  id,
  disableRipple,
  open,
  dense,
  options,
  onClose,
  onClick,
  anchorPosition,
  anchorElement,
  elevation,
  children,
  ...props
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    const res = onClose?.();
    if (res === undefined || res === true) setAnchorEl(null);
  };

  const handleClick = (option) => {
    const res = (option?.onClick ?? onClick)?.(option?.id);
    if (res === undefined || res === true) handleClose();
  };

  const buttonChildren = children?.[0] ?? children;
  const buttonCmp =
    isValidElement(buttonChildren) &&
    cloneElement(buttonChildren, {
      onClick: (event, ...args) => {
        setAnchorEl(event?.currentTarget);
        buttonChildren.props.onClick(event, ...args);
      },
    });

  const position =
    anchorPosition?.vertical || anchorPosition?.horizontal
      ? {
          vertical: anchorPosition.vertical ?? "bottom",
          horizontal: anchorPosition.horizontal ?? "left",
        }
      : undefined;

  return (
    <>
      {buttonCmp ?? children}
      <MenuWrapper>
        <MuiMenu
          elevation={elevation}
          width={width}
          maxHeight={maxHeight}
          id={id}
          anchorEl={anchorElement ?? anchorEl}
          open={open ?? false}
          onClose={handleClose}
          onClick={handleClose}
          {...(position && {
            anchorOrigin: position,
            transformOrigin: position,
          })}
          TransitionComponent={Grow}
          {...props}
        >
          <MenuList dense={dense}>
            {options?.map(({ divider, ...option }, index) =>
              divider ? (
                <Divider key={index} variant="fullWidth" {...option} />
              ) : (
                <MenuItem
                  key={`${index}-${option.id}`}
                  onClick={() => handleClick(option)}
                  disableRipple={disableRipple}
                >
                  {option.icon || option.check ? (
                    <ListItemIcon>
                      {(React.isValidElement(option.icon) &&
                        React.cloneElement(option.icon, {
                          fontSize: "small",
                        })) ||
                        (option.check && <CheckIcon />)}
                    </ListItemIcon>
                  ) : null}

                  <ListItemText>{option.label}</ListItemText>
                  {option.shortcut ? (
                    <Typography variant="body2" muiColor="text.secondary">
                      {option.shortcut}
                    </Typography>
                  ) : null}
                </MenuItem>
              )
            )}
          </MenuList>
        </MuiMenu>
      </MenuWrapper>
    </>
  );
}

Menu.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  dense: PropTypes.bool,
  disableRipple: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  anchorElement: PropTypes.object,
  elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        icon: PropTypes.node,
        id: PropTypes.string,
        onClick: PropTypes.func,
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        shortcut: PropTypes.node,
        check: PropTypes.bool,
      }),
      PropTypes.shape({
        divider: PropTypes.bool,
        variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        thickness: PropTypes.number,
        color: PropTypes.string,
        muiColor: PropTypes.string,
      }),
    ])
  ),
  anchorPosition: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "center", "right"]),
  }),
};

Menu.defaultProps = {
  width: undefined,
  maxHeight: undefined,
  id: undefined,
  dense: undefined,
  open: undefined,
  onClose: undefined,
  onClick: undefined,
  elevation: undefined,
  options: undefined,
  anchorPosition: undefined,
  anchorElement: undefined,
};

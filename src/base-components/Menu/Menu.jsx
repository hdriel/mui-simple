import React, { useState } from "react";
import PropTypes from "prop-types";
import { Check as CheckIcon } from "@mui/icons-material";
import {
  ListItemIcon,
  ListItemText,
  Menu as MuiMenu,
  MenuItem,
  MenuList,
  MenuWrapper,
} from "./Menu.styled";
import Typography from "../Typography/Typography";
import Divider from "../Divider/Divider";
import { Grow } from "@mui/material";
import { useAnchorProps, useChildrenComponentBinding } from "./Menu.hooks";

export default function Menu({
  width,
  height,
  maxHeight,
  arrow,
  id,
  disableRipple,
  open,
  dense,
  options,
  onClose,
  onClick,
  anchorPosition,
  anchorElementRef,
  boundChildrenId,
  boundChildrenIndex,
  contextMenu,
  elevation,
  alternativeContent,
  children,
  ...props
}) {
  const [openControlled, setOpenControlled] = useState(false);

  const { anchorProps, setAnchorEl } = useAnchorProps({
    contextMenu,
    anchorElementRef,
    anchorPosition,
  });
  const boundingChildren = useChildrenComponentBinding({
    boundChildrenId,
    boundChildrenIndex,
    children,
    setAnchorEl,
    anchorElementRef,
    onClickControlled:
      open === undefined ? () => setOpenControlled(true) : undefined,
  });

  const handleClose = (event) => {
    setOpenControlled(false);
    const res = onClose?.();
    if (res === undefined || res === true) setAnchorEl(null);
  };

  const handleClick = (event, option) => {
    event.stopPropagation();
    setOpenControlled(false);
    const res = (option?.onClick ?? onClick)?.(option?.id);
    if (res === undefined || res === true) handleClose();
  };

  return (
    <>
      {boundingChildren}
      {(anchorProps.anchorEl || contextMenu) && (
        <MenuWrapper arrow={arrow}>
          <MuiMenu
            elevation={elevation}
            height={height}
            width={width}
            maxHeight={maxHeight}
            id={id}
            open={open ?? openControlled}
            onClose={handleClose}
            onClick={handleClick}
            TransitionComponent={Grow}
            {...anchorProps}
            {...props}
          >
            {alternativeContent || (
              <MenuList dense={dense}>
                {options?.map(({ divider, ...option }, index) =>
                  divider ? (
                    <Divider key={index} variant="fullWidth" {...option} />
                  ) : (
                    <MenuItem
                      key={`${index}-${option.id}`}
                      onClick={(event) => handleClick(event, option)}
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
            )}
          </MuiMenu>
        </MenuWrapper>
      )}
    </>
  );
}

Menu.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  boundChildrenId: PropTypes.string,
  boundChildrenIndex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  id: PropTypes.string,
  alternativeContent: PropTypes.any,
  dense: PropTypes.bool,
  arrow: PropTypes.bool,
  disableRipple: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  anchorElementRef: PropTypes.object,
  contextMenu: PropTypes.object,
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
  boundChildrenId: undefined,
  boundChildrenIndex: 0,
  dense: undefined,
  open: undefined,
  onClose: undefined,
  onClick: undefined,
  elevation: undefined,
  options: undefined,
  contextMenu: undefined,
  anchorPosition: undefined,
  anchorElementRef: undefined,
};

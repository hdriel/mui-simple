import React from "react";
import PropTypes from "prop-types";
import { Check as CheckIcon } from "@mui/icons-material";
import {
  Menu as MuiMenu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "./Menu.styled";
import Typography from "../Typography/Typography";
import Divider from "../Divider/Divider";

export default function Menu({
  width,
  id,
  open,
  options,
  onClose,
  onClick,
  anchorPosition,
  children,
  ...props
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    const res = onClose?.();
    if (res === undefined || res === true) {
      setAnchorEl(null);
    }
  };

  const handleClick = (option) => {
    const res = (option?.onClick ?? onClick)?.(option?.id);
    if (res === undefined || res === true) {
      handleClose();
    }
  };

  const buttonChildren = children?.[0] ?? children;
  const buttonCmp =
    React.isValidElement(buttonChildren) &&
    React.cloneElement(buttonChildren, {
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
      <MuiMenu
        width={width}
        id={id}
        anchorEl={anchorEl}
        open={open ?? false}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={position}
        transformOrigin={position}
        {...props}
      >
        {options?.map(({ divider, ...option }, index) =>
          divider ? (
            <Divider key={index} variant="fullWidth" {...option} />
          ) : (
            <MenuItem
              key={`${index}-${option.id}`}
              onClick={() => handleClick(option)}
            >
              {option.icon || option.check ? (
                <ListItemIcon>
                  {(React.isValidElement(option.icon) &&
                    React.cloneElement(option.icon, { fontSize: "small" })) ||
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
      </MuiMenu>
    </>
  );
}

Menu.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
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
  open: undefined,
  onClose: undefined,
  onClick: undefined,
  options: undefined,
};

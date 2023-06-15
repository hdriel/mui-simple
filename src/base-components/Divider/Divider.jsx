import React from "react";
import PropTypes from "prop-types";
import { Divider as MuiDivider } from "./Divider.styled";
import { useCustomColor } from "../../utils/helpers";

export default function Divider({
  orientation,
  light,
  flexItem,
  textAlign,
  variant,
  component,
  label,
  thickness,
  color,
  children,
  ...props
}) {
  const [customColor, muiColor] = useCustomColor(color);

  const content = [label]
    .concat(children ?? [])
    .map((child, index) => {
      return React.isValidElement(child)
        ? React.cloneElement(child, {
            key: `DC${index}`,
            ...{ color: child.props.color ?? color },
          })
        : child;
    })
    .filter(Boolean);

  return (
    <MuiDivider
      orientation={orientation}
      light={light}
      flexItem={flexItem ?? (orientation === "vertical" ? true : undefined)}
      textAlign={textAlign}
      variant={variant}
      component={component}
      thickness={thickness}
      customColor={muiColor ? undefined : customColor}
      muiColor={muiColor}
      {...props}
    >
      {content.length ? content : undefined}
    </MuiDivider>
  );
}

Divider.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  light: PropTypes.bool,
  flexItem: PropTypes.bool,
  textAlign: PropTypes.oneOf(["center", "left", "right"]),
  variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),
  component: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  thickness: PropTypes.number,
  color: PropTypes.string,
};

Divider.defaultProps = {
  orientation: undefined,
  light: undefined,
  flexItem: undefined,
  textAlign: undefined,
  variant: "middle",
  component: undefined,
  label: undefined,
  thickness: undefined,
  color: undefined,
};

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Skeleton as MuiSkeleton } from "./Skeleton.styled";
import useElementSize from "../../hooks/useElementSize";

const SKELETON_VARIANT = {
  TEXT: "text",
  CIRCULAR: "circular",
  RECTANGULAR: "rectangular",
  ROUNDED: "rounded",
  NONE: undefined,
};
export default function Skeleton({
  loading,
  animation,
  variant,
  children,
  ...props
}) {
  const [ref, { width, height }] = useElementSize(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted && ref.current) {
      setMounted(!mounted && ref.current);
    }
  }, [ref.current]);

  useEffect(() => {
    if (!loading) {
      ref.current = null;
      setMounted(false);
    }
  }, [loading]);

  if (!loading) return children;
  if (!ref.current && !mounted)
    return (
      <div ref={ref} style={{ width: "max-content", height: "max-content" }}>
        {children}
      </div>
    );

  const component = React.isValidElement(children)
    ? React.cloneElement(children, { children: null })
    : typeof children === "string"
    ? null
    : children;

  const type = children?.type?.name ?? children?.type?.render?.name ?? "string";
  const avatarProps = { animation, width, height, variant };

  if (avatarProps.variant === undefined) {
    console.log("type", type);
    switch (type) {
      case "Avatar":
        avatarProps.variant = SKELETON_VARIANT.CIRCULAR;
        break;
      case "Typography":
      case "string":
        avatarProps.variant = SKELETON_VARIANT.TEXT;
        break;
      case "CardMedia":
        avatarProps.variant = SKELETON_VARIANT.RECTANGULAR;
        break;
      default:
        debugger;
        avatarProps.variant = SKELETON_VARIANT.ROUNDED;
        break;
    }
    console.log("variant", avatarProps.variant);
  }

  return (
    <MuiSkeleton {...avatarProps} {...props}>
      {component}
    </MuiSkeleton>
  );
}

Skeleton.propTypes = {
  loading: PropTypes.bool,
  animation: PropTypes.oneOf(["pulse", "wave", false]),
  variant: PropTypes.oneOf(["circular", "rectangular", "rounded", "text"]),
};

Skeleton.defaultProps = {
  loading: undefined,
  animation: undefined,
  variant: undefined,
};

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
export default function Skeleton({ loading, children, ...props }) {
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

  const type = children?.type?.name ?? "string";
  const avatarProps = { width, height, variant: SKELETON_VARIANT.ROUNDED };

  switch (type) {
    case "Avatar":
      avatarProps.variant = SKELETON_VARIANT.CIRCULAR;
      break;
    case "Typography":
      avatarProps.variant = SKELETON_VARIANT.TEXT;
      break;
    default:
      avatarProps.variant = SKELETON_VARIANT.ROUNDED;
      break;
  }

  return <MuiSkeleton {...avatarProps}>{component}</MuiSkeleton>;
}

Skeleton.propTypes = {
  loading: PropTypes.bool,
};

Skeleton.defaultProps = {
  loading: undefined,
};

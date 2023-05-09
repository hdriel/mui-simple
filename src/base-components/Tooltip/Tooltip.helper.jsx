import React, { forwardRef } from "react";

const MyCustomChildrenComponent = ({ innerRef, children, ...props }) => {
  return (
    <div {...props} ref={innerRef} style={{ width: "max-content" }}>
      {children}
    </div>
  );
};

export const CustomChildTooltipWrapper = forwardRef(function WrappedMyComponent(
  props,
  ref
) {
  return <MyCustomChildrenComponent {...props} innerRef={ref} />;
});

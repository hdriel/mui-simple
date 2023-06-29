import React, { ComponentType, forwardRef } from 'react';

const MyCustomChildrenComponent = ({ innerRef, children, ...props }) => {
    return (
        <div {...props} ref={innerRef} style={{ width: 'max-content' }}>
            {children}
        </div>
    );
};

export const CustomChildTooltipWrapper: ComponentType<any> = forwardRef(function WrappedMyComponent(props, ref) {
    return <MyCustomChildrenComponent {...props} innerRef={ref} />;
});

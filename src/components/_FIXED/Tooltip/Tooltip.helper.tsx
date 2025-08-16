import React, { forwardRef } from 'react';
import type { Ref, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, PropsWithChildren } from 'react';

const MyCustomChildrenComponent: React.FC<PropsWithChildren<{ wrapperWidth?: string; innerRef: Ref<any> }>> = ({
    innerRef,
    children,
    wrapperWidth,
    ...props
}) => {
    return (
        <div {...props} ref={innerRef} style={{ width: wrapperWidth }}>
            {children}
        </div>
    );
};

export const CustomChildTooltipWrapper: ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<any>> =
    // eslint-disable-next-line react/display-name
    forwardRef((props, ref) => <MyCustomChildrenComponent {...props} innerRef={ref} />);

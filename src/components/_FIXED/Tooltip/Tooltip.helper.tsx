import React, { forwardRef } from 'react';
import type { Ref, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, PropsWithChildren } from 'react';

const MyCustomChildrenComponent: React.FC<PropsWithChildren<{ innerRef: Ref<any> }>> = ({
    innerRef,
    children,
    ...props
}) => {
    return (
        <div {...props} ref={innerRef} style={{ width: 'max-content' }}>
            {children}
        </div>
    );
};

export const CustomChildTooltipWrapper: ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<any>> =
    // eslint-disable-next-line react/display-name
    forwardRef((props, ref) => <MyCustomChildrenComponent {...props} innerRef={ref} />);

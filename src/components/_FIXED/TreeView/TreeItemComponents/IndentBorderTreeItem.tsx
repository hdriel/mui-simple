import React, { forwardRef } from 'react';
import { IndentBorderTreeItemStyled } from '../TreeView.styled';
import { CloseSquare, MinusSquare, PlusSquare } from '../TreeView.icons';

interface IndentBorderTreeItemProps {
    bgColor?: string;
    color?: string;
    label: string;
}

const IndentBorderTreeItem: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<IndentBorderTreeItemProps> & React.RefAttributes<unknown>
    // eslint-disable-next-line react/display-name
> = forwardRef((props, ref) => {
    const { bgColor, color, icon, label, ...other } = props ?? {};

    return (
        props && (
            <IndentBorderTreeItemStyled
                ref={ref}
                {...other}
                label={label}
                style={{
                    '--tree-view-color': color,
                    '--tree-view-bg-color': bgColor,
                }}
            />
        )
    );
});

IndentBorderTreeItem.defaultProps = {
    bgColor: undefined,
    color: undefined,
    label: undefined,
};

export default IndentBorderTreeItem;

export const IndentBorderTreeItemIcons = {
    collapseIcon: <MinusSquare />,
    expandIcon: <PlusSquare />,
    endIcon: <CloseSquare />,
};

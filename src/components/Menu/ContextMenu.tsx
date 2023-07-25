import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import Menu from './Menu';
import type { ContextMenuProps } from '../decs';
import { ContextMenuWrapper } from './Menu.styled';

const ContextMenu: React.FC<PropsWithChildren<ContextMenuProps>> = ({ children, reopen, ...props }) => {
    const [contextMenu, setContextMenu] = useState(null);

    const handleClose = (): void => setContextMenu(null);
    const handleContextMenu = (event: any): void => {
        event.preventDefault();
        const { clientX: mouseX, clientY: mouseY } = event;
        if (reopen) setContextMenu({ mouseX, mouseY });
        else setContextMenu(contextMenu === null ? { mouseX, mouseY } : null);
        // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
        // Other native context menus might behave different.
        // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
    };

    return (
        <ContextMenuWrapper onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
            {children}
            <Menu
                {...props}
                open={contextMenu !== null}
                contextMenu={contextMenu}
                onClose={() => {
                    props.onClose?.();
                    handleClose();
                    return true;
                }}
            />
        </ContextMenuWrapper>
    );
};

ContextMenu.defaultProps = {
    reopen: undefined,
};

export type { ContextMenuProps } from '../decs';
export default ContextMenu;

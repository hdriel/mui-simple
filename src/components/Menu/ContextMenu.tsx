import React, { useState, PropsWithChildren } from 'react';
import Menu, { MenuProps } from './Menu';
import { ContextMenuWrapper } from './Menu.styled';

export default function ContextMenu({ children, ...props }: PropsWithChildren<MenuProps>) {
    const [contextMenu, setContextMenu] = useState(null);

    const handleClose = () => setContextMenu(null);

    const handleContextMenu = (event) => {
        event.preventDefault();
        const { clientX: mouseX, clientY: mouseY } = event;
        setContextMenu(contextMenu === null ? { mouseX, mouseY } : null);
        // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
        // Other native context menus might behave different.
        // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
    };

    return (
        <ContextMenuWrapper onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
            {children}
            <Menu
                {...props}
                width={250}
                open={contextMenu !== null}
                contextMenu={contextMenu}
                onClose={() => {
                    props.onClose?.();
                    handleClose();
                }}
            />
        </ContextMenuWrapper>
    );
}

// ContextMenu.propTypes = {};

ContextMenu.defaultProps = {};

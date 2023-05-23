import React, { useState } from "react";
import Menu from "./Menu";
import { ContextMenuWrapper } from "./Menu.styled";

export default function ContextMenu({ children, ...props }) {
  const [contextMenu, setContextMenu] = useState(null);

  const handleClose = () => setContextMenu(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX + 2, mouseY: event.clientY - 6 }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  return (
    <ContextMenuWrapper
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu" }}
    >
      {children}
      <Menu
        {...props}
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

ContextMenu.propTypes = {};

ContextMenu.defaultProps = {};

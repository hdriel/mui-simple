import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import {
  Divider,
  List as MuiList,
  ListItem,
  ListSubheader,
  ListItemText,
  Collapse,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
} from "./List.styled";
import Avatar from "../Avatar/Avatar";
import Typography from "../Typography/Typography";

const ListItemWrapper = ({
  item,
  index,
  onClick,
  buttonItems,
  alignItems,
  children,
  ...props
}) => {
  if (!item) return children;

  const onClickHandler = onClick?.bind(null, index, item.onClick);
  const itemButton =
    alignItems !== "flex-start" &&
    item.align !== "flex-start" &&
    (item.link ??
      item.onClick ??
      item.selected ??
      item.items?.length ??
      item.buttonItem ??
      buttonItems);

  return itemButton ? (
    <ListItemButton
      component={item.link ? "a" : undefined}
      href={item.link}
      onClick={item.items?.length ? onClickHandler : item.onClick}
      selected={item.selected}
      {...props}
    >
      {children}
    </ListItemButton>
  ) : (
    children
  );
};

export default function List({
  useTransition,
  component,
  width,
  dense,
  buttonItems,
  alignItems,
  enableSubtitle,
  disablePaddingItems,
  disablePadding,
  title,
  items,
  ...props
}) {
  const [open, setOpen] = useState({});
  const onClick = (index, cb, event) => {
    open[index] = open[index] === undefined ? true : !open[index];
    setOpen(open);
    cb?.(event);
  };

  return (
    <MuiList
      useTransition={useTransition}
      disablePadding={disablePadding}
      dense={dense}
      sx={{ width, bgcolor: "background.paper" }}
      component={component}
      subheader={<ListSubheader component="div">{title}</ListSubheader>}
      {...props}
    >
      {items
        ?.map((item, index) => {
          const { divider, ...itemProps } =
            typeof item === "string" ? { title: item } : item || {};

          const isOpen = open[index];
          const listItem = !!Object.keys(itemProps).length;

          return (
            <>
              {listItem && (
                <ListItem
                  key={index}
                  disablePadding
                  disableGutters={item.disablePadding ?? disablePaddingItems}
                  secondaryAction={itemProps.actions}
                  alignItems={itemProps.align ?? alignItems}
                >
                  <ListItemWrapper
                    index={index}
                    item={itemProps}
                    onClick={onClick}
                    buttonItems={buttonItems}
                    alignItems={alignItems}
                  >
                    {itemProps.startIcon && (
                      <ListItemIcon>{itemProps.startIcon}</ListItemIcon>
                    )}
                    {itemProps.avatar && (
                      <ListItemAvatar>
                        <Avatar {...itemProps.avatar} />
                      </ListItemAvatar>
                    )}
                    <ListItemText
                      inset={itemProps.inset}
                      primary={itemProps.title}
                      secondary={
                        enableSubtitle && itemProps.subtitle ? (
                          <Typography
                            rows={2}
                            component="span"
                            variant="body2"
                            muiColor="text.primary"
                          >
                            {itemProps.subtitle}
                          </Typography>
                        ) : undefined
                      }
                    />
                    {itemProps.items?.length ? (
                      isOpen ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )
                    ) : undefined}
                  </ListItemWrapper>
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List
                      items={itemProps.items}
                      component={"div"}
                      useTransition={false}
                    />
                  </Collapse>
                </ListItem>
              )}
              {divider && (
                <Divider
                  key={index}
                  variant="fullWidth"
                  {...divider}
                  component="li"
                />
              )}
            </>
          );
        })
        .map((cmp, key) => (
          <Collapse in key={key}>
            {cmp}
          </Collapse>
        ))}
    </MuiList>
  );
}

List.propTypes = {
  useTransition: PropTypes.bool,
  component: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dense: PropTypes.bool,
  buttonItems: PropTypes.bool,
  disablePadding: PropTypes.bool,
  disablePaddingItems: PropTypes.bool,
  enableSubtitle: PropTypes.bool,
  title: PropTypes.string,
  alignItems: PropTypes.oneOf(["flex-start"]),
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        divider: PropTypes.object,
        selected: PropTypes.bool,
        inset: PropTypes.bool,
        disablePadding: PropTypes.bool,
        startIcon: PropTypes.node,
        avatar: PropTypes.object,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        link: PropTypes.string,
        items: PropTypes.array,
        actions: PropTypes.array,
        align: PropTypes.oneOf(["flex-start"]),
      }),
    ])
  ),
};

List.defaultProps = {
  useTransition: true,
  dense: undefined,
  buttonItems: true,
  enableSubtitle: true,
  disablePadding: true,
  alignItems: undefined,
  component: "nav",
  width: undefined,
  title: undefined,
  items: [],
};

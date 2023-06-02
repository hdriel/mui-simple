import React, { cloneElement, useState } from "react";
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

const List = ({
  useTransition,
  component,
  width,
  dense,
  buttonItems,
  alignItems,
  enableSubtitle,
  disablePaddingItems,
  disableGuttersItems,
  disablePadding,
  title,
  items,
  insetItems,
  ...props
}) => {
  const [open, setOpen] = useState({});
  const onClick = (index, cb, event) => {
    event.stopPropagation();
    setOpen((o) => ({
      ...o,
      [index]: o[index] === undefined ? true : !o[index],
    }));
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
      {
        items?.map((item, index) => {
          const { divider, alignControl, controlType, ...itemProps } =
            typeof item === "string" ? { title: item } : item || {};

          const isControl = ["checkbox", "switch"].includes(controlType);
          const isOpen = open[index];
          const listItem = !!Object.keys(itemProps).length;

          return (
            <>
              {listItem && (
                <ListItem
                  key={`i-${index}`}
                  disablePadding={
                    item.disablePadding ?? disablePaddingItems ?? true
                  }
                  disableGutters={item.disableGutters ?? disableGuttersItems}
                  alignItems={itemProps.align ?? alignItems}
                >
                  <ListItemWrapper
                    index={index}
                    item={itemProps}
                    onClick={onClick}
                    buttonItems={buttonItems}
                    alignItems={alignItems}
                  >
                    {itemProps.startIcon &&
                      (isControl && alignControl === "start" ? (
                        itemProps.startIcon
                      ) : (
                        <ListItemIcon>{itemProps.startIcon}</ListItemIcon>
                      ))}
                    {itemProps.avatar && (
                      <ListItemAvatar>
                        <Avatar {...itemProps.avatar} />
                      </ListItemAvatar>
                    )}
                    <ListItemText
                      inset={itemProps.inset ?? insetItems}
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

                    <ListItemSecondaryAction>
                      {itemProps.actions}
                    </ListItemSecondaryAction>
                  </ListItemWrapper>

                  <Collapse
                    in={isOpen && itemProps.items?.length}
                    timeout="auto"
                    unmountOnExit
                    addEndListener={undefined}
                  >
                    <List items={itemProps.items} />
                    <Divider variant="fullWidth" {...divider} component="li" />
                  </Collapse>
                </ListItem>
              )}
              {divider && (
                <Divider
                  key={`d-${index}`}
                  variant="fullWidth"
                  {...divider}
                  component="li"
                />
              )}
            </>
          );
        })
        // .map((cmp, key) => (
        //   <Collapse in key={key}>
        //     {cmp}
        //   </Collapse>
        // ))
      }
    </MuiList>
  );
};

List.propTypes = {
  useTransition: PropTypes.bool,
  component: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dense: PropTypes.bool,
  buttonItems: PropTypes.bool,
  disablePadding: PropTypes.bool,
  disablePaddingItems: PropTypes.bool,
  disableGuttersItems: PropTypes.bool,
  enableSubtitle: PropTypes.bool,
  title: PropTypes.string,
  alignItems: PropTypes.oneOf(["flex-start"]),
  insetItems: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        divider: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        selected: PropTypes.bool,
        inset: PropTypes.bool,
        disablePadding: PropTypes.bool,
        disableGutters: PropTypes.bool,
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

export default List;

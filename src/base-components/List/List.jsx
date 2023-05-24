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

export default function List({
  useTransition,
  component,
  width,
  dense,
  enableSubtitle,
  disablePaddingItems,
  disablePadding,
  title,
  items,
  ...props
}) {
  const [open, setOpen] = useState({});
  const onClick = (index) => {
    open[index] = open[index] === undefined ? true : !open[index];
    setOpen(open);
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
          const onClickHandler = onClick.bind(null, index);
          const listItem = !!Object.keys(itemProps).length;

          return (
            <>
              {listItem && (
                <ListItem
                  disablePadding
                  disableGutters={item.disablePadding ?? disablePaddingItems}
                  secondaryAction={itemProps.actions}
                >
                  <ListItemButton
                    component={itemProps.link ? "a" : undefined}
                    href={itemProps.link}
                    onClick={
                      itemProps.items?.length ? onClickHandler : undefined
                    }
                    selected={itemProps.selected}
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
                        enableSubtitle ? (
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
                  </ListItemButton>
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
                  variant={itemProps.avatar ? "inset" : undefined}
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
  disablePadding: PropTypes.bool,
  disablePaddingItems: PropTypes.bool,
  enableSubtitle: PropTypes.bool,
  title: PropTypes.string,
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
      }),
    ])
  ),
};

List.defaultProps = {
  useTransition: true,
  dense: undefined,
  enableSubtitle: true,
  disablePadding: true,
  component: "nav",
  width: undefined,
  title: undefined,
  items: [],
};

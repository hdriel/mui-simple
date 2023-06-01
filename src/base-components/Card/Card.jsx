import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Card as MuiCard,
  Button,
  CardActions,
  CardMedia,
  CardHeader,
  CardContent,
  Collapse,
  CardActionArea,
  ExpandMore,
  Box,
} from "./Card.styled";

import Menu from "../Menu/Menu";

export default function Card({
  optionsMenu,
  title,
  subtitle,
  actions,
  avatar,
  image,
  imageTitle,
  width,
  maxWidth,
  flexDirection,
  mediaOnTop,
  contentPadding,
  children,
  ...props
}) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => setExpanded(!expanded);
  mediaOnTop =
    mediaOnTop === undefined && ["row", "row-reverse"].includes(flexDirection)
      ? true
      : mediaOnTop;

  children = [].concat(children);
  const cardContentExpendedIndex = children.findIndex(
    (box) => box?.type?.name === "CardContentExpended"
  );
  const cardContentExpended =
    cardContentExpendedIndex >= 0
      ? children[cardContentExpendedIndex]
      : undefined;
  children = children.filter((_, index) => index !== cardContentExpendedIndex);

  const options = Array.isArray(optionsMenu)
    ? optionsMenu
    : optionsMenu?.options ?? [];
  const optionsProps = Array.isArray(optionsMenu) ? {} : optionsMenu;

  const imageSrc = typeof image === "object" ? image.src : image;
  const imageProps = typeof image === "object" ? image : {};

  return (
    <MuiCard {...props} sx={{ maxWidth, width }}>
      {!mediaOnTop && title && (
        <CardHeader
          avatar={avatar}
          title={title}
          subheader={subtitle}
          action={
            options?.length ? (
              <Menu options={options} {...optionsProps} open>
                <Button icon={<MoreVertIcon />} />
              </Menu>
            ) : undefined
          }
        />
      )}
      <Box
        sx={{
          ...(flexDirection && {
            display: "flex",
            flexDirection: flexDirection,
          }),
        }}
      >
        {image && (
          <CardMedia
            component="img"
            image={imageSrc}
            alt={"card image media"}
            sx={{ width: imageProps?.width }}
            {...imageProps}
          />
        )}

        <Box>
          {mediaOnTop && title && (
            <CardHeader
              avatar={avatar}
              title={title}
              subheader={subtitle}
              action={
                options?.length ? (
                  <Menu options={options} {...optionsProps} open>
                    <Button icon={<MoreVertIcon />} />
                  </Menu>
                ) : undefined
              }
            />
          )}
          <CardContent
            sx={{
              height: mediaOnTop && title ? "auto" : "100%",
              boxSizing: "border-box",
              padding: contentPadding,
            }}
          >
            {children}
          </CardContent>

          <CardActions disableSpacing>
            {actions?.filter(Boolean).map((action, index) =>
              isValidElement(action) ? (
                cloneElement(action, { key: index })
              ) : (
                <Button key={index} {...action} icon={action?.icon}>
                  {action.label}
                </Button>
              )
            )}

            {cardContentExpended && (
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                icon={<ExpandMoreIcon />}
              />
            )}
          </CardActions>
        </Box>
      </Box>
      {cardContentExpended && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{cardContentExpended}</CardContent>
        </Collapse>
      )}
    </MuiCard>
  );
}

Card.propTypes = {
  raised: PropTypes.bool,
  optionsMenu: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          icon: PropTypes.node,
          id: PropTypes.string,
          onClick: PropTypes.func,
          label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
          shortcut: PropTypes.node,
          check: PropTypes.bool,
        }),
        PropTypes.shape({
          divider: PropTypes.bool,
          variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),
          label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
          thickness: PropTypes.number,
          color: PropTypes.string,
          muiColor: PropTypes.string,
        }),
      ])
    ),
    PropTypes.shape(Menu.propTypes),
  ]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.shape({})]),
  avatar: PropTypes.node,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mediaOnTop: PropTypes.bool,
  contentPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
};

Card.defaultProps = {
  raised: undefined,
  optionsMenu: undefined,
  title: undefined,
  subtitle: undefined,
  actions: undefined,
  avatar: undefined,
  image: undefined,
  width: "auto",
  maxWidth: "max-content",
  mediaOnTop: undefined,
  contentPadding: undefined,
  flexDirection: undefined,
};

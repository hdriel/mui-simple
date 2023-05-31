import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Card as MuiCard,
  Button,
  CardActions,
  Paper,
  Typography,
  CardMedia,
  CardHeader,
  CardContent,
  Collapse,
  CardActionArea,
  ExpandMore,
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
  optionsMenuProps,
  children,
  ...props
}) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  children = [].concat(children);
  const cardContentExpendedIndex = children.findIndex(
    (box) => box?.type?.name === "CardContentExpended"
  );
  const cardContentExpended =
    cardContentExpendedIndex >= 0
      ? children[cardContentExpendedIndex]
      : undefined;
  children = children.filter((_, index) => index !== cardContentExpendedIndex);

  return (
    <MuiCard {...props} sx={{ maxWidth, width }}>
      {title && (
        <CardHeader
          avatar={avatar}
          title={title}
          subheader={subtitle}
          action={
            <Menu options={optionsMenu} {...optionsMenuProps} open>
              <Button icon={<MoreVertIcon />} />
            </Menu>
          }
        />
      )}
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={imageTitle ?? "card image"}
          title={imageTitle}
        />
      )}

      <CardContent>{children}</CardContent>

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
  imageTitle: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Card.defaultProps = {
  raised: undefined,
  imageTitle: undefined,
  width: undefined,
  maxWidth: undefined,
};

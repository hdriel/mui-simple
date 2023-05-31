import React from "react";
import PropTypes from "prop-types";
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
} from "./Card.styled";

export default function Card({ test, ...props }) {
  return <MuiCard {...props} />;
}

Card.propTypes = {
  test: PropTypes.string,
};

Card.defaultProps = {
  test: undefined,
};

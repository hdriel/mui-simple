import { styled } from "@mui/material/styles";
import {
  Card as MuiCard,
  CardActionArea as MuiCardActionArea,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
  CardMedia as MuiCardMedia,
  Collapse as MuiCollapse,
  Box as MuiBox,
} from "@mui/material";
import MuiPaper from "../Paper/Paper";
import MuiTypography from "../Typography/Typography";
import MuiButton from "../Button/Button";

export const Card = styled(MuiCard)``;

export const CardActionArea = MuiCardActionArea;
export const CardActions = MuiCardActions;
export const CardContent = MuiCardContent;
export const CardHeader = MuiCardHeader;
export const CardMedia = MuiCardMedia;
export const Collapse = MuiCollapse;
export const Box = MuiBox;

export const Paper = MuiPaper;
export const Typography = MuiTypography;
export const Button = MuiButton;

export const ExpandMore = styled(({ expand, icon, ...props }) => (
  <Button icon={icon} {...props} />
))(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

import { styled, alpha } from "@mui/material/styles";
import { TreeView as MuiTreeView } from "@mui/lab";
import MuiTreeItem, { treeItemClasses } from "@mui/lab/TreeItem";

export const TreeView = styled(MuiTreeView, {
  shouldForwardProp: (propName) => !["maxWidth", "height"].includes(propName),
})`
  height: ${(props) => props.height};
  flex-grow: 1;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : undefined)};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TreeItem = styled(MuiTreeItem)``;

export const LabelIconTreeItemStyled = styled(MuiTreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    width: "auto",
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

export const IndentBorderTreeItemStyled = styled(MuiTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

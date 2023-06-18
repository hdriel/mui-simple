import { alpha, css } from "@mui/material/styles";
import { treeItemClasses } from "@mui/lab/TreeItem";

export function borderedStyles(props) {
  if (!props.bordered) return css``;

  return css`
    & .${treeItemClasses.group} {
      margin-left: 15px;
      padding-left: 18px;
      border-left: 1px dashed ${alpha(props.theme.palette.text.primary, 0.4)};
    }
  `;
}

export function closeIconFade(props) {
  if (!props.closeIconFade) return css``;

  return css`
    & .${treeItemClasses.iconContainer} {
      & .close {
        opacity: 0.3;
      }
    }
  `;
}

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

export function selectedColor(props) {
  return css`
    color: ${(props) => props.theme.palette.text.secondary};
    & .${treeItemClasses.content} {
      color: ${(props) => props.theme.palette.text.secondary};

      &.Mui-focused,
      &.Mui-selected,
      &.Mui-selected.Mui-focused {
        color: var(--tree-view-color);
        background-color: var(
          --tree-view-bg-color,
          ${(props) => props.theme.palette.action.selected}}
        );
      }

      &:hover {
        background-color: ${(props) => props.theme.palette.action.hover};
      }
    }
  `;
}

import _ from "lodash";
import { styled } from "@mui/material/styles";
import { Tabs as MuiTabs, Tab as MuiTab, Box as MuiBox } from "@mui/material";

export const Tabs = styled(MuiTabs, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  & .MuiTabs-indicator {
    background-color: ${(props) =>
      _.get(props, `theme.palette.${props.customColor}.main`) ??
      _.get(props, `theme.palette.${props.customColor}`) ??
      props.customColor};
  }
  & .MuiTab-root {
    &.Mui-selected {
      color: ${(props) =>
        _.get(props, `theme.palette.${props.customColor}.main`) ??
        _.get(props, `theme.palette.${props.customColor}`) ??
        props.customColor};
    }
  }
`;

export const Tab = styled(MuiTab)``;

export const TabPanel = styled(MuiBox, {
  shouldForwardProp: (propName) =>
    !["iconPosition", "disableRipple"].includes(propName),
})`
  width: 100%;
  height: 100%;
  background-color: #61dafb;
`;

export const Box = MuiBox;

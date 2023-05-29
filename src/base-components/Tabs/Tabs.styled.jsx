import { Tabs as MuiTabs, Tab as MuiTab, Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Tabs = styled(MuiTabs, {
  shouldForwardProp: (propName) => !["muiTextColor"].includes(propName),
})``;

export const Tab = styled(MuiTab, {
  shouldForwardProp: (propName) =>
    !["iconPosition", "disableRipple"].includes(propName),
})``;

export const TabPanel = styled(MuiBox)`
  width: 100%;
  height: 100%;
  background-color: #61dafb;
`;

export const Box = MuiBox;

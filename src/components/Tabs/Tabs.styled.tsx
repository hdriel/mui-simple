import { get } from 'lodash-es';
import { styled, css } from '@mui/material/styles';
import { Tabs as MuiTabs, Tab as MuiTab, Box as MuiBox } from '@mui/material';

export const Tabs = styled(MuiTabs, {
    shouldForwardProp: (propName) => !['fillActiveTab', 'customColor'].includes(propName as string),
})`
  & .MuiTabs-indicator {
    background-color: ${(props) => props.customColor};
  }
  & .MuiTab-root {
    &.Mui-selected {
       ${(props) => {
           const color = props.customColor ?? get(props, `theme.palette.primary.main`);

           return props.fillActiveTab
               ? css`
                     background-color: ${color};
                     color: #ffffff; // TODO: GET CONTRAST COLOR
                 `
               : css`
                     color: ${color};
                 `;
       }}
  }
`;

export const Tab = styled(MuiTab)``;

export const TabPanel = styled(MuiBox, {
    shouldForwardProp: (propName) => !['iconPosition', 'disableRipple'].includes(propName as string),
})`
    width: 100%;
    height: 100%;
    flex-grow: 1;
`;

export const Box = MuiBox;

import type { ComponentType } from 'react';
import { get } from 'lodash-es';
import { styled, css } from '@mui/material/styles';
import { Tabs as MuiTabs, Tab as MuiTab, Box as MuiBox } from '@mui/material';
import type { TabsProps, BoxProps } from '@mui/material';

interface TabsStyledProps {
    customColor?: string;
    fillActiveTab?: boolean;
}

type TabsStyledPropsType = TabsProps & TabsStyledProps & any;

export const Tabs = styled(MuiTabs, {
    shouldForwardProp: (propName) => !['reverse', 'fillActiveTab', 'customColor'].includes(propName as string),
})<TabsStyledPropsType>`
    & .MuiTabs-indicator {
        background-color: ${(props) => props.customColor};
    }
    & .MuiTab-root {
        &.Mui-selected {
            ${(props) => {
                const color = props.customColor ?? get(props, `theme.palette.primary.main`);
                const borderLeft = props.orientation === 'vertical' && props.reverse;

                return props.fillActiveTab
                    ? css`
                          background-color: ${color};
                          color: #ffffff; // TODO: GET CONTRAST COLOR
                      `
                    : css`
                          color: ${color};
                      `;
            }};
            ${(props) => {
                return props.orientation === 'vertical'
                    ? css`
                          border-left: ${props.reverse ? '2px solid' : 'unset'};
                          border-right: ${props.reverse ? 'unset' : '2px solid'};
                      `
                    : css``;
            }};
        }
    }
` as ComponentType<TabsStyledPropsType>;

export const Tab = MuiTab;

interface TabPanelStyledProps {
    iconPosition?: string;
    disableRipple?: boolean;
}

type TabPanelStyledPropsType = BoxProps & TabPanelStyledProps & any;

export const TabPanel = styled(MuiBox, {
    shouldForwardProp: (propName) => !['iconPosition', 'disableRipple'].includes(propName as string),
})<TabPanelStyledPropsType>`
    width: 100%;
    height: 100%;
    flex-grow: 1;
` as ComponentType<TabPanelStyledPropsType>;

export const Box = MuiBox;

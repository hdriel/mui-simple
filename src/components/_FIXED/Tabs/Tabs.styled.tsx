import type { ComponentType } from 'react';
import { get } from 'lodash-es';
import { styled, css } from '@mui/material/styles';
import { Tabs as MuiTabs, Tab as MuiTab, Box as MuiBox } from '@mui/material';
import type { TabsProps, BoxProps } from '@mui/material';
import { numberToPx } from '../../../utils/helpers';

interface TabsStyledProps {
    customColor?: string;
    fillActiveTab?: boolean;
}

type TabsStyledPropsType = TabsProps & TabsStyledProps & any;

export const Tabs = styled(MuiTabs, {
    shouldForwardProp: (propName: string) =>
        !['wrap', 'reverse', 'fillActiveTab', 'customColor'].includes(propName as string),
})<TabsStyledPropsType>`
    padding: 0;

    & .MuiTabs-indicator {
        background-color: ${(props: any) => props.customColor};
    }

    & .MuiTab-root {
        position: relative;

        &.Mui-selected {
            ${(props: any) => {
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
            ${(props: any) => {
                return props.orientation === 'vertical'
                    ? css`
                          border-left: ${props.reverse ? '2px solid' : 'unset'};
                          border-right: ${props.reverse ? 'unset' : '2px solid'};
                      `
                    : css``;
            }};

            ${(props: any) => {
                const color = props.customColor ?? get(props, `theme.palette.primary.main`);
                return props.wrap
                    ? css`
                          ::after {
                              position: absolute;
                              content: ' ';
                              background-color: ${color};
                              ${props.orientation === 'vertical'
                                  ? {
                                        left: props.reverse ? 0 : 'unset',
                                        right: props.reverse ? 'unset' : 0,
                                        width: '2px',
                                        height: '100%',
                                    }
                                  : {
                                        bottom: 0,
                                        width: '100%',
                                        height: '2px',
                                    }}
                          }
                      `
                    : css``;
            }}
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
    shouldForwardProp: (propName: string) => !['iconPosition', 'disableRipple'].includes(propName as string),
})<TabPanelStyledPropsType>`
    width: 100%;
    height: 100%;
    padding: 0;
    flex-grow: 1;
` as ComponentType<TabPanelStyledPropsType>;

export const Box = MuiBox;

interface TabWrapperProps {
    reverse?: boolean;
    orientation?: 'vertical' | 'horizontal';
    verticalMaxFixedHeight?: string;
}

type TabWrapperType = BoxProps & TabWrapperProps & any;

export const TabWrapper = styled(MuiBox, {
    shouldForwardProp: (propName: string) =>
        !['reverse', 'orientation', 'verticalMaxFixedHeight'].includes(propName as string),
})<TabWrapperType>`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: ${(props: any) => (props.reverse ? 'column-reverse' : 'column')};
    ${(props: any) => {
        if (props.orientation === 'vertical') {
            return css`
                flex-direction: ${props.reverse ? 'row-reverse' : 'row'};
                max-height: ${numberToPx(props.verticalMaxFixedHeight) ?? 'inherit'};
            `;
        }
    }}
` as ComponentType<TabWrapperType>;

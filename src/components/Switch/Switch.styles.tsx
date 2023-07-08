import { css } from '@mui/material/styles';

import { SWITCH_STYLES } from './Switch.consts';

export function customColor(props) {
    if (!props.color) return css``;
    const opacity = props.theme.palette?.action?.hoverOpacity;
    const color = props.color;

    return css`
    & .MuiSwitch-switchBase.Mui-checked {
      color: ${color};
      &:hover { background-color: alpha(${color}, ${opacity}) },
    },
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${color};
  },`;
}

export function antSwitchStyle(props) {
    if (props.switchStyle !== SWITCH_STYLES.ANT) return css``;

    const { theme, color } = props;
    const { palette: { mode } = {}, transitions } = theme ?? {};

    return css`
        width: 28px;
        height: 16px;
        padding: 0;
        display: flex;
        &:active {
            & .MuiSwitch-thumb {
                width: 15px;
            }
            & .MuiSwitch-switchBase.Mui-checked {
                transform: translateX(9px);
            }
        }
        & .MuiSwitch-switchBase {
            padding: 2px;
            &.Mui-checked {
                transform: translateX(12px);
                color: #fff;
                & + .MuiSwitch-track {
                    opacity: 1;
                    background-color: ${color};
                }
            }
        }
        & .MuiSwitch-thumb {
            box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
            width: 12px;
            height: 12px;
            border-radius: 6px;
            transition: ${transitions.create(['width'], { duration: 200 })};
        }
        & .MuiSwitch-track {
            border-radius: 16 / 2;
            opacity: 1;
            background-color: ${mode === 'dark' ? 'rgba(255, 255, 255, .35)' : 'rgba(0, 0, 0, .25)'};
            box-sizing: border-box;
        }
    `;
}

export function androidSwitchStyle(props) {
    if (props.switchStyle !== SWITCH_STYLES.ANDROID12) return css``;

    const { theme, color } = props;

    return css`
    padding: 8px;
    & .MuiSwitch-track {
      border-radius: 12px;
      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
      },
      &:before {
        left: 12px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${
            color ? encodeURIComponent(theme.palette.getContrastText(color)) : '#000000'
        }" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>');
      },
      &:after {
        right: 12px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
            '#FFFFFF' // theme.palette.getContrastText(color)
        )}" d="M19,13H5V11H19V13Z" /></svg>'); 
      },
  },
  & .MuiSwitch-thumb {
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.15);
    width: 16px;
    height: 16px;
    margin: 1px 2px 4px 1px;
  }
  `;
}

export function iosSwitchStyle(props) {
    if (props.switchStyle !== SWITCH_STYLES.IOS) return css``;

    const { theme, color } = props;

    return css`
        width: 42px;
        height: 26px;
        padding: 0;
        & .MuiSwitch-switchBase {
            padding: 0;
            margin: 2px;
            transition-duration: 300ms;
            &.Mui-checked {
                transform: translateX(16px);
                color: #fff;
                & + .MuiSwitch-track {
                    background-color: ${color};
                    opacity: 1;
                    border: 0;
                }
                &.Mui-disabled + .MuiSwitch-track {
                    opacity: 0.5;
                }
            }
            &.Mui-focusVisible .MuiSwitch-thumb {
                color: ${color};
                border: 6px solid #fff;
            }
            &.Mui-disabled .MuiSwitch-thumb {
                color: ${theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]};
            }
            ,
            &.Mui-disabled + .MuiSwitch-track {
                opacity: ${theme.palette.mode === 'light' ? 0.7 : 0.3};
            }
        }
        & .MuiSwitch-thumb {
            box-sizing: border-box;
            width: 22px;
            height: 22px;
        }
        & .MuiSwitch-track {
            border-radius: 20px;
            background-color: ${theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D'};
            opacity: 1;
            transition: ${theme.transitions.create(['background-color'], {
                duration: 500,
            })};
        }
    `;
}

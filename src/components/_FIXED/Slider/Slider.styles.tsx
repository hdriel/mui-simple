import { get } from 'lodash-es';
import { css } from '@mui/material/styles';
import { alpha } from '@mui/material';
import type { SerializedStyles } from '@emotion/serialize';
import { SLIDER_STYLES } from './Slider.consts';

export function sliderStyleCustomColor(props): SerializedStyles {
    if (props.sliderStyle || !props.customColor) return css``;

    const { track: trackColor, thumb: thumbColor } =
        typeof props.customColor === 'string'
            ? { thumb: props.customColor, track: props.customColor }
            : props.customColor ?? {};

    return css`
        & .MuiSlider-track,
        & .MuiSlider-rail {
            color: ${trackColor} !important;
        }
        & .MuiSlider-thumb {
            color: ${thumbColor} !important;
        }

        & .MuiSlider-thumb:hover,
        & .Mui-focusVisible {
            box-shadow: ${thumbColor && `0px 0px 0px 8px ${alpha(thumbColor, 0.16)}`} !important;
        }

        & .MuiSlider-thumb.Mui-active {
            box-shadow: ${thumbColor && `0px 0px 0px 14px ${alpha(thumbColor, 0.16)}`} !important;
        }
    `;
}

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

export function sliderStyleIOS(props): SerializedStyles {
    if (props.sliderStyle !== SLIDER_STYLES.IOS) return css``;

    const { theme, customColor } = props;
    const primary = get(theme, `palette.primary.main`);
    const color = customColor ?? primary;

    return css`
        color: ${color};
        height: 2px;
        padding: 15px 0;
        & .MuiSlider-thumb {
            height: 28px;
            width: 28px;
            background-color: #fff;
            box-shadow: ${iOSBoxShadow};
            &:focus,
            &:hover,
            &.Mui-active {
                box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.02);
                // Reset on touch devices, it doesn't add specificity
                @media (hover: none) {
                    box-shadow: ${iOSBoxShadow};
                }
            }
        }
        & .MuiSlider-valueLabel {
            font-size: 12px;
            font-weight: normal;
            top: -6px;
            background-color: unset;
            color: ${theme.palette.text.primary};
            &:before {
                display: none;
            }
            & * {
                background: transparent;
                color: ${color};
            }
        }
        & .MuiSlider-track {
            border: none;
        }
        & .MuiSlider-rail {
            opacity: 0.5;
            background-color: #bfbfbf;
        }
        ,
        & .MuiSlider-mark {
            background-color: #bfbfbf;
            height: 8px;
            width: 1px;
            &.MuiSlider-markActive {
                opacity: 1;
                background-color: currentColor;
            }
        }
    `;
}

export function sliderStylePretto(props): SerializedStyles {
    if (props.sliderStyle !== SLIDER_STYLES.PRETTO) return css``;

    const { theme, customColor } = props;
    const primary = get(theme, `palette.primary.main`);
    const trackColor = typeof customColor === 'string' ? customColor : customColor?.track ?? primary;
    const labelColor = typeof customColor === 'string' ? customColor : customColor?.thumb ?? primary;

    return css`
        color: ${trackColor};
        height: 8px;
        & .MuiSlider-track {
            border: none;
        }
        & .MuiSlider-thumb {
            height: 24px;
            width: 24px;
            background-color: #fff;
            border: 2px solid currentColor;
            &:focus,
            &:hover,
            &.Mui-active,
            &.Mui-focusVisible {
                box-shadow: inherit;
            }
            ,
            &:before {
                display: none;
            }
        }
        & .MuiSlider-valueLabel {
            line-height: 1.2;
            font-size: 12px;
            background: unset;
            padding: 0;
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            background-color: ${labelColor};
            transform-origin: bottom left;
            transform: translate(50%, -100%) rotate(-45deg) scale(0);
            &:before {
                display: none;
            }
            ,
            &.MuiSlider-valueLabelOpen {
                transform: translate(50%, -100%) rotate(-45deg) scale(1);
            }
            ,
            & > * {
                transform: rotate(45deg);
            }
        }
    `;
}

export function sliderStyleAirBNB(props): SerializedStyles {
    if (props.sliderStyle !== SLIDER_STYLES.AIRBNB) return css``;

    const { theme, customColor } = props;
    const primary = get(theme, `palette.primary.main`);
    const color = customColor ?? primary;

    return css`
        color: ${color};
        height: 3px;
        padding: 13px 0;
        & .MuiSlider-thumb {
            height: 27px;
            width: 27px;
            background-color: #fff;
            border: 1px solid currentColor;
            &:hover {
                box-shadow: 0 0 0 8px rgba(58, 133, 137, 0.16);
            }
            & .airbnb-bar {
                height: 9px;
                width: 1px;
                background-color: currentColor;
                margin-left: 1px;
                margin-right: 1px;
            }
        }
        & .MuiSlider-track {
            height: 3px;
        }
        & .MuiSlider-rail {
            color: ${theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8'};
            opacity: ${theme.palette.mode === 'dark' ? undefined : 1};
            height: 3px;
        }
    `;
}

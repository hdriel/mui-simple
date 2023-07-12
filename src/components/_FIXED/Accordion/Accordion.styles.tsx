import { css } from '@mui/material/styles';
import type { Theme } from '@mui/material';
import type { SerializedStyles } from '@emotion/serialize';

export function customStyleAccordion(props: { useCustomStyle: boolean; theme: Theme }): SerializedStyles {
    if (!props.useCustomStyle) return css``;
    const { theme } = props;

    return css`
        border: 1px solid ${theme.palette.divider};
        &:not(:last-child) {
            border-bottom: 0;
        }
        &:before {
            display: none;
        }
    `;
}

export function customStyleSummary(props: { useCustomStyle: boolean; theme: Theme }): SerializedStyles {
    if (!props.useCustomStyle) return css``;
    const { theme } = props;

    return css`
        &.MuiAccordionSummary-root {
            background-color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)'};

            flex-direction: row-reverse;

            & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
                transform: rotate(90deg);
            }

            & .MuiAccordionSummary-content {
                margin-left: ${theme.spacing(1)};
            }
        }
    `;
}

export function customStyleDetails(props: { useCustomStyle: boolean; theme: Theme }): SerializedStyles {
    if (!props.useCustomStyle) return css``;

    const { theme } = props;
    return css`
        padding: ${theme.spacing(2)};
        border-top: 1px solid rgba(0, 0, 0, 0.125);
    `;
}

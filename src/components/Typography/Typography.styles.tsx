import { css } from '@mui/material/styles';

export function ellipsisRow1(props) {
    if (props.noWrap || props.rows !== 1) return css``;

    return css`
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: ${props.rows};
        -webkit-box-orient: vertical;
        & > * {
            white-space: unset !important;
        }
    `;
}

export function ellipsisRows(props) {
    if (props.noWrap || !props.rows || (props.rows && props.rows <= 1)) {
        return css``;
    }

    return css`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: normal;
        display: -webkit-box !important;
        -webkit-line-clamp: ${props.rows};
        -webkit-box-orient: vertical;
        & > * {
            white-space: unset !important;
        }
    `;
}

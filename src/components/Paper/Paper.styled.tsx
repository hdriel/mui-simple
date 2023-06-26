import { get } from 'lodash-es';
import { Paper as MuiPaper } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { numberToPx } from '../../utils/helpers';

function imageStyle(props) {
    if (!props.imageSrc) return css``;

    return css`
        background-color: unset;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('${props.imageSrc}');
            background-size: ${props.imageLayout};
            opacity: ${props.imageOpacity};
            z-index: -1;
        }
    `;
}

export const Paper = styled(MuiPaper, {
    shouldForwardProp: (propName) =>
        !['muiColor', 'customColor', 'textColor', 'imageSrc', 'imageOpacity', 'imageOpacity', 'imageLayout'].includes(
            propName
        ),
})`
    width: ${(props) => numberToPx(props.width)};

    height: ${(props) => numberToPx(props.height)};

    background-color: ${(props) => get(props, `theme.palette.${props.muiColor}.main`, props.customColor)};

    color: ${(props) => props.textColor ?? get(props, `theme.palette.${props.muiColor}.contrastText`)};

    position: relative;
    z-index: 0;
    ${imageStyle};
`;

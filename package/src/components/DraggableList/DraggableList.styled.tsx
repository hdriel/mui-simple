import { styled, css } from '@mui/material/styles';
import { Box } from '@mui/material';

type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
interface DraggableListULProps {
    flexGap?: number | string;
    flexDirection?: FlexDirectionType;
}
export const DraggableListUL = styled('ul')<DraggableListULProps>`
    display: flex;
    gap: ${(props) => props.flexGap};
    list-style-type: none;
    margin: 0;
    padding: 0;
    ${(props) =>
        props.flexDirection === 'row'
            ? css`
                  flex-direction: row;
                  width: max-content;
              `
            : css`
                  flex-direction: column;
                  width: 100%;
              `};
`;

export const DraggableListULItem = styled(Box)`
    width: 100%;
`;

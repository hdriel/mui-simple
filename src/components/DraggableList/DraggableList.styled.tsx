import { styled, css } from '@mui/material/styles';

type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
interface DraggableListULProps {
    flexGap?: number | string;
    flexDirection?: FlexDirectionType;
}
export const DraggableListUL = styled('ul')<DraggableListULProps>`
    display: flex;
    gap: ${(props) => props.flexGap};

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

    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const DraggableListULItem = styled('li')`
    width: 100%;
`;

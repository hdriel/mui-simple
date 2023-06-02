import { styled, css } from '@mui/material/styles';

export const DraggableListUL = styled('ul')`
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

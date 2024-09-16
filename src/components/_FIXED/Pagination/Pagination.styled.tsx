import { Pagination as MuiPagination, PaginationItem as MuiPaginationItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Pagination = styled(MuiPagination, {
    shouldForwardProp: (propName: string) => !['customColor'].includes(propName as string),
})<{ customColor: string }>`
    .MuiPaginationItem-root.Mui-selected {
        background-color: ${(props: any) => props.customColor};
    }
`;

export const PaginationItem = MuiPaginationItem;

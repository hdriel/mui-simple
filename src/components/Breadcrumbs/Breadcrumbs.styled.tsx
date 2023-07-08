import type { ComponentType } from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import type { BreadcrumbsProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { numberToPx } from '../../utils/helpers';

export const Breadcrumbs = styled(MuiBreadcrumbs)<BreadcrumbsProps>`
    & .MuiBreadcrumbs-separator {
        font-size: ${(props) => numberToPx(props.size)};
    }
` as ComponentType<BreadcrumbsProps>;

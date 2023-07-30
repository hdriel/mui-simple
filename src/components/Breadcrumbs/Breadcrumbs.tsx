import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
//	import PropTypes from 'prop-types';
import { Breadcrumbs as MuiBreadcrumbs } from './Breadcrumbs.styled';
import Link from '../_FIXED/Link/Link';
import Chip from '../_FIXED/Chip/Chip';
import Typography from '../_FIXED/Typography/Typography';

type Underline = 'always' | 'hover' | 'none';
interface BreadcrumbLink {
    url?: string;
    label?: string;
    icon?: ReactNode;
    underline?: Underline;
    color?: string;
    onClick?: () => void;
    onDelete?: () => void;
    customColor?: string;
    size?: string | number;
    startIcon?: ReactNode | string;
    endIcon?: ReactNode | string;
}
interface BreadcrumbsProps {
    color?: string;
    maxItems?: number;
    separator?: string | ReactNode;
    size?: string | number;
    links?: Array<string | BreadcrumbLink>;
    chips?: Array<string | BreadcrumbLink>;
    chipBreadCrumbsStyle?: boolean;
    [key: string]: any;
}
export default function Breadcrumbs(props: PropsWithChildren<BreadcrumbsProps>): ReactNode {
    const { maxItems, size, separator, color, links, chips, chipBreadCrumbsStyle, children, ...rest } = props;

    return (
        <MuiBreadcrumbs size={size} maxItems={maxItems} separator={separator} {...rest}>
            {links?.map((link, index) => {
                return typeof link === 'string' ? (
                    <Typography key={`${link}-${index}`} color={color} tooltip={false} size={size}>
                        {link}
                    </Typography>
                ) : (
                    <Link
                        {...link}
                        key={`${link?.label}-${index}`}
                        color={link?.color ?? color ?? 'inherit'}
                        customColor={link?.customColor ?? color}
                        underline={link?.underline ?? 'hover'}
                        size={link?.size ?? size}
                    >
                        {link?.icon}
                        {link?.label}
                    </Link>
                );
            })}
            {chips?.map((chip, index) => {
                return typeof chip === 'string' ? (
                    <Typography key={`${chip}-${index}`} color={color} tooltip={false} size={size} wrap={false}>
                        {chip}
                    </Typography>
                ) : (
                    <Chip
                        {...chip}
                        key={`${chip?.label}-${index}`}
                        color={chipBreadCrumbsStyle ? undefined : chip?.customColor ?? color}
                        size={chip?.size ?? size}
                        label={chip?.label}
                        startIcon={chip?.startIcon}
                        endIcon={chip?.endIcon}
                        onClick={chip?.onClick}
                        // Todo: check if need to fill function or login inside this empty arrow func
                        onDelete={chip?.onDelete ?? (chip?.endIcon && (() => {}))}
                        breadCrumbsStyle={chipBreadCrumbsStyle}
                    />
                );
            })}
            {children}
        </MuiBreadcrumbs>
    ) as ReactNode;
}

//	Breadcrumbs.propTypes = {
//    color: PropTypes.string,
//    maxItems: PropTypes.number,
//    separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//    links: PropTypes.arrayOf(
//        PropTypes.oneOfType([
//            PropTypes.string,
//            PropTypes.shape({
//                url: PropTypes.string,
//                label: PropTypes.string,
//                icon: PropTypes.node,
//                underline: PropTypes.oneOf(['always', 'hover', 'none']),
//                color: PropTypes.string,
//                onClick: PropTypes.func,
//            }),
//        ])
//    ),
//    chips: PropTypes.arrayOf(
//        PropTypes.oneOfType([
//            PropTypes.string,
//            PropTypes.shape({
//                url: PropTypes.string,
//                label: PropTypes.string,
//                startIcon: PropTypes.node,
//                endIcon: PropTypes.node,
//                color: PropTypes.string,
//                onClick: PropTypes.func,
//            }),
//        ])
//    ),
//    chipBreadCrumbsStyle: PropTypes.bool,
//	};

Breadcrumbs.defaultProps = {
    chipBreadCrumbsStyle: true,
    chips: undefined,
    color: undefined,
    links: undefined,
    maxItems: undefined,
    separator: undefined,
    size: undefined,
};

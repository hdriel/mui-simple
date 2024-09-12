import React from 'react';
import type { ReactElement, PropsWithChildren } from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from './Breadcrumbs.styled';
import Link from '../Link/Link';
import Chip from '../Chip/Chip';
import Typography from '../Typography/Typography';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { BreadcrumbsProps } from '../../decs';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const EMPTY_CB = (): void => {};

const Breadcrumbs: React.FC<PropsWithChildren<BreadcrumbsProps>> = ({
    maxItems,
    size,
    separator: _separator,
    color,
    links,
    chips,
    children,
    ...rest
}): ReactElement | React.ReactNode => {
    const separator = typeof _separator === 'string' ? <SVGIcon>{_separator}</SVGIcon> : _separator;

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
                        color={link?.color ?? color}
                        underline={link?.underline ?? 'hover'}
                        size={link?.size ?? size}
                        label={link?.label}
                        icon={link?.icon}
                    />
                );
            })}

            {chips?.map((chip, index) => {
                return typeof chip === 'string' ? (
                    <Chip key={`${chip}-${index}`} color={color} size={size as any} label={chip} />
                ) : (
                    <Chip
                        {...chip}
                        key={`${chip?.label}-${index}`}
                        color={chip?.color ?? color}
                        size={chip?.size ?? (size as any)}
                        label={chip?.label}
                        startIcon={chip?.startIcon}
                        endIcon={chip?.endIcon}
                        onClick={chip?.onClick}
                        onDelete={chip?.onDelete ?? (chip?.endIcon && EMPTY_CB)}
                    />
                );
            })}

            {children}
        </MuiBreadcrumbs>
    );
};
Breadcrumbs.displayName = 'Breadcrumbs';

export type { BreadcrumbsProps } from '../../decs';
export default Breadcrumbs;

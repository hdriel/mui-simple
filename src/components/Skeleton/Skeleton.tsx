import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Skeleton as MuiSkeleton } from './Skeleton.styled';
import { useElementSize } from '../../hooks/useElementSize';

const SKELETON_VARIANT: Record<string, 'circular' | 'rectangular' | 'rounded' | 'text' | undefined> = {
    TEXT: 'text',
    CIRCULAR: 'circular',
    RECTANGULAR: 'rectangular',
    ROUNDED: 'rounded',
    NONE: undefined,
};

interface SkeletonProps {
    loading?: boolean;
    animation?: 'pulse' | 'wave' | false;
    variant?: 'circular' | 'rectangular' | 'rounded' | 'text' | undefined;
    [key: string]: any
}

const Skeleton: React.FC<PropsWithChildren<SkeletonProps>> = ({ loading, animation, variant, children, ...props }) => {
    const [ref, { width, height }] = useElementSize(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted && ref.current) {
            setMounted(!mounted && ref.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted, ref.current]);

    useEffect(() => {
        if (!loading) {
            ref.current = null;
            setMounted(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    if (!loading) return children;
    if (!ref.current && !mounted)
        return (
            <div ref={ref} style={{ width: 'max-content', height: 'max-content' }}>
                {children}
            </div>
        );

    const component = React.isValidElement(children)
        ? // @ts-ignore
          React.cloneElement(children, { children: null })
        : typeof children === 'string'
        ? null
        : children;

    // @ts-ignore
    const type = children?.type?.name ?? children?.type?.render?.name ?? 'string';
    const avatarProps = { animation, width, height, variant };

    if (avatarProps.variant === undefined) {
        switch (type) {
            case 'Avatar':
                avatarProps.variant = SKELETON_VARIANT.CIRCULAR;
                break;
            case 'Typography':
            case 'string':
                avatarProps.variant = SKELETON_VARIANT.TEXT;
                break;
            case 'CardMedia':
                avatarProps.variant = SKELETON_VARIANT.RECTANGULAR;
                break;
            default:
                avatarProps.variant = SKELETON_VARIANT.ROUNDED;
                break;
        }
    }

    return (
        <MuiSkeleton {...avatarProps} {...props}>
            {component}
        </MuiSkeleton>
    );
};

export default Skeleton;

import React, { useEffect, PropsWithChildren } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { StyledEngineProvider } from '@mui/material/styles';

const cacheRTL = createCache({ key: 'muirtl', stylisPlugins: [rtlPlugin] });
const cacheLTR = createCache({ key: 'muiltr' });

type DirectionProviderProps = {
    direction: 'rtl' | 'ltr';
    className?: string;
};

export const DirectionProvider: React.FC<PropsWithChildren<DirectionProviderProps>> = ({
    direction,
    className,
    children,
}) => {
    const dir = direction === 'rtl' ? 'rtl' : 'ltr';

    useEffect(() => {
        document.body.dir = dir;
    }, [dir]);

    return (
        <StyledEngineProvider injectFirst>
            <CacheProvider value={dir === 'rtl' ? cacheRTL : cacheLTR}>
                {className ? <div className={className}>{children}</div> : children}
            </CacheProvider>
        </StyledEngineProvider>
    );
};

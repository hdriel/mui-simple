import React, { useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { StyledEngineProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';

const cacheRTL = createCache({ key: 'muirtl', stylisPlugins: [prefixer, rtlPlugin] });
const cacheLRT = createCache({ key: 'muiltr' });

export function DirectionWrapper({ direction, className = undefined, ...props }) {
    const dir = ['rtl', 'ltr'].includes(direction) ? direction : 'ltr';

    useEffect(() => {
        document.body.dir = dir;
    }, [dir]);

    return (
        <StyledEngineProvider injectFirst>
            <CacheProvider value={dir === 'rtl' ? cacheRTL : cacheLRT}>
                <div className={className}>{props.children}</div>
            </CacheProvider>
        </StyledEngineProvider>
    );
}

import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { ADAPTER_LOCALE, LOCALE } from '../../locales';
import('dayjs/locale/en');
import('dayjs/locale/he');

interface LocalizationProviderProps {
    dateAdapter?: any;
    locale?: LOCALE;
    adapterLocale?: ADAPTER_LOCALE;
    [key: string]: any;
}

const loadLanguage = async (locale?: LOCALE): Promise<boolean> => {
    if (['en', 'he'].includes(locale)) return true;

    return false;
    // const path = `dayjs/locale/${locale}`;
    // await import(path)
    //     .then((_x: number) => {
    //         console.log('loaded locale file', path);
    //     })
    //     .catch((error) => {
    //         console.error('failed to load locale file', path);
    //     });
};

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
    adapterLocale,
    dateAdapter,
    locale,
    ...props
}): any => {
    const [localeLoaded, setLocaleLoaded] = useState(false);
    const [error, setError] = useState(null);
    const children = props.children;

    useEffect(() => {
        setLocaleLoaded(false);
        loadLanguage(locale)
            .then((isLoaded) => setLocaleLoaded(isLoaded))
            .catch((error) => {
                console.error('failed to load locale adapter file dynamically', error);
                setError(error.message);
            });
    }, [adapterLocale, locale]);

    return localeLoaded && dateAdapter ? (
        <MuiLocalizationProvider dateAdapter={dateAdapter}>{children}</MuiLocalizationProvider>
    ) : (
        <>
            <p>Failed to load adapter and locale for date input</p>
            <p>{error}</p>
        </>
    );
};

LocalizationProvider.defaultProps = {
    dateAdapter: AdapterDayjs,
    adapterLocale: 'he-IL',
    locale: 'he',
};

export default LocalizationProvider;

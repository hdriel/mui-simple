import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface LocalizationProviderProps {
    dateAdapter?: any;
    adapterLocale?: string;
}

const loadLanguage = async (locale?: string): Promise<void> => {
    if (!locale || locale === 'en-us') return;
    const localePath = `dayjs/locale/${locale}`;
    await import(localePath).then((data) => console.log(`loaded ${localePath} data`, data));
};

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ adapterLocale, dateAdapter, ...props }): any => {
    const [localeLoaded, setLocaleLoaded] = useState(false);
    // @ts-expect-error
    const children = props.children;

    useEffect(() => {
        setLocaleLoaded(false);
        loadLanguage(adapterLocale)
            .then(() => setLocaleLoaded(true))
            .catch((error) => console.error('failed to load locale adapter file dynamically', error));
    }, [adapterLocale]);

    return localeLoaded && dateAdapter ? (
        <MuiLocalizationProvider dateAdapter={dateAdapter}>{children}</MuiLocalizationProvider>
    ) : (
        <p>Failed to load adapter and locale for date input</p>
    );
};

LocalizationProvider.defaultProps = {
    dateAdapter: AdapterDayjs,
    adapterLocale: 'en-us',
};

export default LocalizationProvider;

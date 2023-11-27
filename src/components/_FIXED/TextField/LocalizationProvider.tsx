import React, { useEffect, useMemo, useState } from 'react';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

type DateAdapterType = 'date-fns' | 'dayjs' | 'luxon' | 'moment';

async function getAdapterDate(dateAdapter: DateAdapterType): Promise<any> {
    switch (dateAdapter) {
        case 'date-fns':
            return await import('@mui/x-date-pickers/AdapterDateFns').then(({ AdapterDateFns }) => AdapterDateFns);
        case 'dayjs':
            return await import('@mui/x-date-pickers/AdapterDayjs').then(({ AdapterDayjs }) => AdapterDayjs);
        case 'luxon':
            return await import('@mui/x-date-pickers/AdapterLuxon').then(({ AdapterLuxon }) => AdapterLuxon);
        case 'moment':
            return await import('@mui/x-date-pickers/AdapterMoment').then(({ AdapterMoment }) => AdapterMoment);
        default:
            console.warn(`invalid date adapter for mui localization provider: '${dateAdapter as string}'`);
            return null;
    }
}

interface LocalizationProviderProps {
    dateAdapterType?: DateAdapterType;
}

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ dateAdapterType, ...props }): any => {
    const [dateAdapter, setDateAdapter] = useState(null);

    useEffect(() => {
        getAdapterDate(dateAdapterType)
            .then((data) => {
                setDateAdapter(data);
            })
            .catch((error) => console.error(error));
    }, [dateAdapterType]);

    // @ts-expect-error
    const children = props.children;

    return dateAdapter ? (
        <MuiLocalizationProvider dateAdapter={dateAdapter}>{children}</MuiLocalizationProvider>
    ) : (
        children
    );
};

LocalizationProvider.defaultProps = {
    dateAdapterType: 'dayjs',
};

export default LocalizationProvider;

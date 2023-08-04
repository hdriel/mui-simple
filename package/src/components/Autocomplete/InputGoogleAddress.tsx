import React, { useMemo, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash-es';
import parse from 'autosuggest-highlight/parse';
import { Box, Grid, Typography } from '@mui/material';
import { LocationOn as LocationOnIcon } from '@mui/icons-material';

import { Autocomplete as MuiAutocomplete } from './InputAutocomplete.styled';
import TextField from '../_FIXED/TextField/TextField';
import { loadScript } from '../../utils/helpers';

const autocompleteService = { current: null };

const renderMapAddressOption = (props, option) => {
    const matches = option.structured_formatting.main_text_matched_substrings;
    const parts = parse(
        option.structured_formatting.main_text,
        matches.map((match) => [match.offset, match.offset + match.length])
    );

    return (
        <li {...props}>
            <Grid container alignItems="center">
                <Grid item>
                    <Box component={LocationOnIcon} sx={{ color: 'text.secondary', mr: 2 }} />
                </Grid>
                <Grid item xs>
                    {parts.map((part, index) => (
                        <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                            {part.text}
                        </span>
                    ))}
                    <Typography variant="body2" color="text.secondary">
                        {option.structured_formatting.secondary_text}
                    </Typography>
                </Grid>
            </Grid>
        </li>
    );
};

export default function InputGoogleAddress({
    id,
    value: inputValue,
    label,
    onInputChange,
    onChange,
    GOOGLE_MAPS_API_KEY,
    ...props
}) {
    const [optionValue, setOptionValue] = useState(null);
    const [options, setOptions] = useState([]);
    const loaded = useRef(false);

    const fetch = useMemo(
        () =>
            throttle((request, callback) => {
                autocompleteService.current.getPlacePredictions(request, callback);
            }, 200),
        []
    );

    useEffect(() => {
        let active = true;

        if (!autocompleteService.current && window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }

        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(optionValue ? [optionValue] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];
                if (optionValue) newOptions = [optionValue];
                if (results) newOptions = [...newOptions, ...results];

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [optionValue, inputValue, fetch]);

    useEffect(() => {
        if (typeof window !== 'undefined' && !loaded.current && GOOGLE_MAPS_API_KEY) {
            if (!document.querySelector('#google-maps')) {
                loadScript(
                    `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
                    document.querySelector('head'),
                    'google-maps'
                );
            }

            loaded.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [GOOGLE_MAPS_API_KEY]);

    return (
        <MuiAutocomplete
            {...props}
            id={id}
            getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={optionValue}
            onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setOptionValue(newValue);
            }}
            onInputChange={(event, newInputValue) => onInputChange(newInputValue)}
            renderInput={(params) => <TextField {...params} label={label} fullWidth />}
            renderOption={renderMapAddressOption}
        />
    );
}

InputGoogleAddress.propTypes = {
    GOOGLE_MAPS_API_KEY: PropTypes.string.isRequired,
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    inputValue: PropTypes.string,
    onInputChange: PropTypes.func,
    onChange: PropTypes.func,
};

InputGoogleAddress.defaultProps = {
    // This key was created specifically for the demo in mui.com.
    // You need to create a new one for your application.
    GOOGLE_MAPS_API_KEY: 'AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE',
    id: 'google-map-demo',
    label: 'Add a location',
};

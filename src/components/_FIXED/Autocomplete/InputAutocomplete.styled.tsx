import React from 'react';
import { styled, lighten, darken } from '@mui/material/styles';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import { Autocomplete as MuiAutocomplete, Box as MuiBox, Stack as MuiStack } from '@mui/material';

export const Autocomplete = MuiAutocomplete;

export const Box = MuiBox;

export const Stack = MuiStack;

export const GroupHeader = styled('div')(({ theme, color }) => ({
    position: 'sticky',
    zIndex: 1,
    top: '-8px',
    padding: '4px 10px',
    color,
    backgroundColor: theme.palette.mode === 'light' ? color && lighten(color, 0.85) : color && darken(color, 0.8),
}));

export const GroupItems = styled('ul')`
    padding: 0;
`;

export type RenderOptionCB = (
    props: any,
    option: string,
    input: { index: number; inputValue: string; selected: boolean }
) => React.ReactNode;
export const renderHighlightOptionCB = (fieldValue: any): RenderOptionCB => {
    const HighlightOption: RenderOptionCB = (
        props,
        option,
        { inputValue, index, selected } = { inputValue: '', index: 0, selected: false }
    ) => {
        const optionValue = typeof fieldValue === 'function' ? fieldValue(option) : fieldValue;
        const matches = match(optionValue, inputValue?.toLowerCase());
        const parts = parse(optionValue, matches);

        return (
            // todo: change to ListItem
            <li {...props}>
                <div
                    style={{
                        display: 'inline-block',
                        alignItems: 'center',
                    }}
                >
                    {parts.map((part, index) => (
                        <span key={index} style={{ fontWeight: selected || part.highlight ? 700 : 400 }}>
                            {part.text}
                        </span>
                    ))}
                </div>
            </li>
        );
    };

    return HighlightOption;
};

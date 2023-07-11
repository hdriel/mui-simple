import React, { useState } from 'react';
import InputSelect from '../InputSelect';
import { Stack } from '@mui/material';
import { FormatColorFill as FormatColorFillIcon, Airplay as AirplayIcon } from '@mui/icons-material';
import Button from '../../FIXED/Button/Button';

export default {
    title: 'Inputs/Inputs/InputSelect',
    component: InputSelect,
    decorators: [
        (Story) => (
            <div style={{ width: '450px', padding: '1em', border: '1px dashed black' }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    return <InputSelect />;
};

export const Select = () => {
    const options = ['javascript', 'python', 'C#', 'C++'];
    const [value, setValue] = useState('');

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant, index) => (
                <InputSelect
                    key={variant}
                    label="Favorite language"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    variant={variant}
                    options={options}
                    nullable={index === 1 ? 'None Selection' : !!index}
                    placeholderOption={index !== 0 ? 'Choose from list:' : ''}
                    startCmp={<Button icon={<AirplayIcon />} onClick={(e) => e.stopPropagation()} />}
                    startCmpExternal={<Button icon={<AirplayIcon />} onClick={(e) => e.stopPropagation()} />}
                    endCmp={<Button icon={<FormatColorFillIcon />} onClick={(e) => e.stopPropagation()} />}
                    endCmpExternal={<Button icon={<FormatColorFillIcon />} onClick={(e) => e.stopPropagation()} />}
                />
            ))}
        </Stack>
    );
};

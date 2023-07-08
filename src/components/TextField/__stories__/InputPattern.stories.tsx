import React, { useReducer } from 'react';
import InputPattern from '../InputPattern';
import { Stack } from '@mui/material';
import { IMask } from 'react-imask';

export default {
    title: 'Inputs/Inputs/InputPattern',
    component: InputPattern,
    decorators: [
        (Story) => (
            <div style={{ width: '450px', padding: '1em', border: '1px dashed black' }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    return <InputPattern />;
};

export const Mask = () => {
    const [value, dispatch] = useReducer(
        (state, action) => {
            state[action.type] = action.value;
            return state;
        },
        { phone: '', time: '', id: '' }
    );

    return (
        <Stack spacing={3}>
            <InputPattern
                label="Phone"
                value={value.phone}
                onChange={(e) => dispatch({ type: 'phone', value: e.target.value })}
                mask="(#00) 000-0000"
                definitions={{ '#': /[1-9]/ }}
            />
            <InputPattern
                label="Time"
                value={value.time}
                onChange={(e) => dispatch({ type: 'time', value: e.target.value })}
                mask="HH:MM"
                blocks={{
                    HH: {
                        mask: IMask.MaskedRange,
                        placeholderChar: 'HH',
                        from: 0,
                        to: 23,
                        maxLength: 2,
                    },
                    MM: {
                        mask: IMask.MaskedRange,
                        placeholderChar: 'MM',
                        from: 0,
                        to: 59,
                        maxLength: 2,
                    },
                }}
            />
            <InputPattern
                label="ID"
                value={value.id}
                onChange={(e) => dispatch({ type: 'id', value: e.target.value })}
                mask="0 0000000 0"
                definitions={{ '#': /[1-9]/ }}
            />
        </Stack>
    );
};

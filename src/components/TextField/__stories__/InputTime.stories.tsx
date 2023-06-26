import React, { useState } from 'react';
import InputTime from '../InputTime';

export default {
    title: 'Inputs/Inputs/InputTime',
    component: InputTime,
    decorators: [
        (Story) => (
            <div style={{ width: '450px', padding: '1em', border: '1px dashed black' }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    return <InputTime />;
};

export const Time = () => {
    const [value, setValue] = useState(new Date());

    return <InputTime label="Time" value={value} onChange={(e) => setValue(e.target.value)} />;
};

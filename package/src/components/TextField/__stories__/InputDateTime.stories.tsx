import React, { useState } from 'react';
import InputDateTime from '../InputDateTime';

export default {
    title: 'Inputs/Inputs/InputDateTime',
    component: InputDateTime,
    decorators: [
        (Story) => (
            <div style={{ width: '450px', padding: '1em', border: '1px dashed black' }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    return <InputDateTime />;
};

export const DateTime = () => {
    const [value, setValue] = useState(new Date());

    return <InputDateTime label="Date time" value={value} onChange={(e) => setValue(e.target.value)} />;
};

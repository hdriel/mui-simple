/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import InputPhone from '../InputPhone';
import Checkbox from '../../Checkbox/Checkbox';
import Typography from '../../Typography/Typography';
import InputPattern from '../InputPattern';

const meta: Meta<typeof InputPhone> = {
    title: 'Inputs/Inputs/InputPhone',
    component: InputPhone,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputPhone>;

const render = (args) => {
    const [value, setValue] = useState(args.value);

    return (
        <InputPhone
            {...args}
            value={value}
            copyAction
            onChange={(e) => {
                args.onChange?.(e);
                setValue(e.target.value);
            }}
            // OR
            // onAccept={(value, mask) => {
            //     args.onAccept?.(value, mask);
            //     setValue(value);
            // }}
        />
    );
};

const value = '0512345678';

export const Default: Story = {
    args: {},
    render,
};

export const TextAlign: Story = {
    args: {
        label: 'Text Align',
        textAlign: 'center',
        value,
    },
    render,
};

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value,
    },
    render,
};

export const LetterSpacing: Story = {
    args: {
        label: 'Letter Spacing',
        letterSpacing: '5px',
        value,
    },
    render,
};

export const ShowMaskAsPlaceholder: Story = {
    args: {
        label: 'Show Mask As Placeholder',
        letterSpacing: '5px',
        value,
        showMaskAsPlaceholder: true,
    },
    render,
};

export const AlignActions: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Phone',
        endCmp: 'Fingerprint',
        multiline: true,
        label: 'Align Actions',
        value,
    },
    render,
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Phone',
        endCmpExternal: 'Fingerprint',
        multiline: true,
        label: 'Align Actions External',
        value,
    },
    render,
};

export const AutoComplete: Story = {
    args: {
        autoComplete: 'phone',
        name: 'phone',
        label: 'Auto Complete',
    },
    render,
};

export const CmpSpacing: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Phone',
        endCmp: 'Fingerprint',
        cmpSpacing: 6,
        label: 'Cmp Spacing',
        value,
    },
    render,
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value,
    },
    render,
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value,
    },
    render,
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value,
    },
    render,
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        disabled: true,
        value,
    },
    render,
};

export const EndCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPhone {...args} endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputPhone
            {...args}
            endCmp={<SendIcon />}
            label="End Cmp"
            value="endCmp with mui icon name or mui icon element"
        />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPhone
            {...args}
            endCmpExternal="Send"
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
        <InputPhone
            {...args}
            endCmpExternal={<SendIcon />}
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
    </Stack>
);

export const Error: Story = {
    args: {
        error: true,
        label: 'With Error',
        value,
    },
    render,
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value,
    },
    render,
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value,
    },
    render,
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value,
    },
    render,
};

export const HideStartActionsOnEmpty_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPhone
            {...args}
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputPhone
            {...args}
            hideStartActionsOnEmpty={false}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Not Hide Start Actions OnEmpty"
        />
    </Stack>
);

export const Label: Story = {
    args: {
        label: 'Some Label Input',
    },
    render,
};

export const Margin_ = (args): ReactElement | React.ReactNode => (
    <Stack>
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPhone {...args} label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPhone {...args} margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPhone {...args} margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const OnChangeText: Story = {
    args: {
        label: 'text field state',
    },
    render,
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
        value: 'some text for show only',
    },
    render,
};

export const Required: Story = {
    args: {
        required: true,
        label: 'Required field',
    },
    render,
};

export const StartCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPhone {...args} startCmp="Send" label="Start Cmp" value="with string mui icon name" />
        <InputPhone {...args} startCmp={<SendIcon />} label="Start Cmp" value="with mui icon element" />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPhone {...args} startCmpExternal="Send" label="Start Cmp External" value="with string mui icon name" />
        <InputPhone
            {...args}
            startCmpExternal={<SendIcon />}
            label="Start Cmp External"
            value="with mui icon element"
        />
    </Stack>
);

export const Value: Story = {
    args: {
        value: '0501234567',
    },
    render,
};

export const Variant_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPhone {...args} variant="filled" label="filled variant" value="some text here" />
        <InputPhone {...args} variant="outlined" label="outlined variant" value="some text here" />
        <InputPhone {...args} variant="standard" label="standard variant" value="some text here" />
    </Stack>
);

export const CopyAction: Story = {
    args: {
        value: '0501234567',
        copyAction: true,
        copyMessage: 'COPIED!',
        copyTooltip: 'copy tooltip',
    },
    render,
};

export const Formik_ = (args): React.ReactElement | React.ReactNode => {
    return (
        <Formik
            initialValues={{ phone: '050-000-0124', unmask: false }}
            validate={(values) => (!values.phone.length ? { error: 'Required!' } : {})}
            onSubmit={(values) => alert(values.phone)}
        >
            {({ values, touched, errors, handleChange, handleSubmit }: any) => {
                action('formikRender')(values);
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <InputPhone
                            {...args}
                            name="phone"
                            label="Phone"
                            helperText={touched.error && errors.phone ? errors.phone : ''}
                            error={!!(touched.error && errors.phone)}
                            value={values.phone}
                            unmask={values.unmask}
                            onChange={handleChange}
                            showMaskAsPlaceholder={touched.phone}
                            onEnterKeyPress={handleSubmit}
                        />
                        <Checkbox name="unmask" label="unmask value" checked={values.unmask} onChange={handleChange} />
                        <Typography>VALUE: {values.phone}</Typography>
                    </Box>
                );
            }}
        </Formik>
    );
};

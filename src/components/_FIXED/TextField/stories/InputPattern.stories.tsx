/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { Formik } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';

import InputPattern from '../InputPattern';
import { IMask } from 'react-imask';
import { action } from '@storybook/addon-actions';
import { values } from 'lodash-es';
import Typography from '../../Typography/Typography';
import Checkbox from '../../Checkbox/Checkbox';

const meta: Meta<typeof InputPattern> = {
    title: 'Inputs/Inputs/InputPattern',
    component: InputPattern,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputPattern>;

export const Default: Story = {
    args: {},
};

export const TextAlign: Story = {
    args: {
        label: 'Text Align',
        textAlign: 'center',
        value: 'center text',
    },
};

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value: 'right to left direction',
    },
};

export const LetterSpacing: Story = {
    args: {
        label: 'Letter Spacing',
        letterSpacing: '5px',
        value: 'letter spacing',
    },
};

export const AlignActions: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Phone',
        endCmp: 'Fingerprint',
        multiline: true,
        label: 'Align Actions',
        value: 'text...\ntext...\ntext...',
    },
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Phone',
        endCmpExternal: 'Fingerprint',
        multiline: true,
        label: 'Align Actions External',
        value: 'text...\ntext...\ntext...',
    },
};

export const AutoComplete: Story = {
    args: {
        autoComplete: 'email',
        name: 'email',
        label: 'Auto Complete',
    },
};

export const CmpSpacing: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Phone',
        endCmp: 'Fingerprint',
        cmpSpacing: 6,
        label: 'Cmp Spacing',
        value: 'some text to see spacing...',
    },
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: 'color active with palette and custom color',
    },
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: 'color label with palette and custom color',
    },
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: 'color text with palette and custom color',
    },
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: 'disabled text',
        disabled: true,
    },
};

export const EndCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPattern endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputPattern endCmp={<SendIcon />} label="End Cmp" value="endCmp with mui icon name or mui icon element" />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPattern
            endCmpExternal="Send"
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
        <InputPattern
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
        value: 'some text with error',
    },
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: 'focused text',
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: 'text field is default with fullWidth',
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: 'some text...',
    },
};

export const HideStartActionsOnEmpty_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPattern
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputPattern
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
};

export const Margin_ = (args): ReactElement => (
    <Stack>
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPattern label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPattern margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPattern margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const OnChangeText: Story = {
    args: {
        label: 'text field state',
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <InputPattern
                {...args}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    action('onChange')(e.target.value);
                }}
            />
        );
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
    },
    render: (args) => {
        const [value, setValue] = useState('some text for show only');
        return <InputPattern {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Required: Story = {
    args: {
        required: true,
        label: 'Required field',
    },
};

export const StartCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPattern startCmp="Send" label="Start Cmp" value="with string mui icon name" />
        <InputPattern startCmp={<SendIcon />} label="Start Cmp" value="with mui icon element" />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPattern startCmpExternal="Send" label="Start Cmp External" value="with string mui icon name" />
        <InputPattern startCmpExternal={<SendIcon />} label="Start Cmp External" value="with mui icon element" />
    </Stack>
);

export const Value: Story = {
    args: {
        value: 'some text without mask',
    },
};

export const Variant_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPattern variant="filled" label="filled variant" value="some text here" />
        <InputPattern variant="outlined" label="outlined variant" value="some text here" />
        <InputPattern variant="standard" label="standard variant" value="some text here" />
    </Stack>
);

export const MaskPhone: Story = {
    args: {
        label: 'Phone',
        mask: '+(972) 50-000-0000',
        definitions: { '#': /[1-9]/ },
        unmask: false,
        onChange: (e) => alert('mask value: ' + e.target.value),
    },
};

export const UnmaskPhoneValue: Story = {
    args: {
        label: 'Phone',
        mask: '+(972) 50-000-0000',
        definitions: { '#': /[1-9]/ },
        unmask: true,
        onChange: (e) => alert('unmask value: ' + e.target.value),
    },
};

export const ShowMaskAsPlaceholder: Story = {
    args: {
        label: 'Phone',
        mask: '+(972) 50-000-0000',
        definitions: { '#': /[1-9]/ },
        unmask: true,
        showMaskAsPlaceholder: false,
        onChange: (e) => alert('unmask value: ' + e.target.value),
    },
};

export const MaskTime: Story = {
    args: {
        label: 'Time',
        mask: 'HH:MM',
        unmask: true,
        blocks: {
            HH: {
                mask: IMask.MaskedRange,
                placeholderChar: 'H',
                from: 0,
                to: 23,
                maxLength: 2,
            },
            MM: {
                mask: IMask.MaskedRange,
                placeholderChar: 'M',
                from: 0,
                to: 59,
                maxLength: 2,
            },
        },
        onChange: (e) => alert(e.target.value),
    },
};

export const MaskID: Story = {
    args: {
        label: 'ID',
        mask: '0 0000000 0',
        definitions: { '#': /[1-9]/ },
        onChange: (e) => alert(e.target.value),
    },
};

export const Overwrite: Story = {
    args: {
        label: 'ID',
        mask: '0 0000000 0',
        definitions: { '#': /[1-9]/ },
        overwrite: true,
    },
};

export const Lazy_ = (args): React.ReactElement => (
    <Stack spacing={3}>
        <InputPattern label="ID default Lazy" mask="0 0000000 0" definitions={{ '#': /[1-9]/ }} />
        <InputPattern label="ID true Lazy" mask="0 0000000 0" definitions={{ '#': /[1-9]/ }} lazy />
        <InputPattern label="ID false Lazy" mask="0 0000000 0" definitions={{ '#': /[1-9]/ }} lazy={false} />
    </Stack>
);

export const Formik_ = (args): React.ReactElement => {
    return (
        <Formik initialValues={{ phone: '', unmask: false }} onSubmit={(values) => alert(values.phone)}>
            {({ values, touched, setFieldValue, handleChange }) => {
                action('formikRender')(values);
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <InputPattern
                            name="phone"
                            value={values.phone}
                            label="Phone"
                            mask="+(972) 50-000-0000"
                            definitions={{ '#': /[1-9]/ }}
                            unmask={values.unmask}
                            showMaskAsPlaceholder={touched.phone}
                            onChange={handleChange}
                        />
                        <Checkbox name="unmask" label="unmask value" checked={values.unmask} onChange={handleChange} />
                        <Typography>VALUE: {values.phone}</Typography>
                    </Box>
                );
            }}
        </Formik>
    );
};

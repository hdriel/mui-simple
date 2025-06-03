/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { Formik } from 'formik';
import { IMask } from 'react-imask';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Send as SendIcon } from '@mui/icons-material';
import { action } from 'storybook/actions';
import { Box, Stack } from '@mui/material';
import InputPattern from '../InputPattern';
import Typography from '../../Typography/Typography';
import Checkbox from '../../Checkbox/Checkbox';

const meta: Meta<typeof InputPattern> = {
    title: 'Inputs/Inputs/InputPattern',
    component: InputPattern,
    tags: ['autodocs'],
};

export default meta;

const onChangeAction = action('onChange');

type Story = StoryObj<typeof InputPattern>;

const render = (args) => {
    const [value, setValue] = useState(args.value);

    return (
        <InputPattern
            {...args}
            value={value}
            onChange={(e) => {
                args.onChange?.(e);
                setValue(e.target.value);
            }}
        />
    );
};

export const Default: Story = {
    args: {
        onChange: onChangeAction,
    },
    render,
};

export const TextAlign: Story = {
    args: {
        label: 'Text Align',
        textAlign: 'center',
        value: 'center text',
        onChange: onChangeAction,
    },
    render,
};

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value: 'right to left direction',
        onChange: onChangeAction,
    },
    render,
};

export const LetterSpacing: Story = {
    args: {
        label: 'Letter Spacing',
        letterSpacing: '5px',
        value: 'letter spacing',
        onChange: onChangeAction,
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
        value: 'text...\ntext...\ntext...',
        onChange: onChangeAction,
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
        value: 'text...\ntext...\ntext...',
        onChange: onChangeAction,
    },
    render,
};

export const AutoComplete: Story = {
    args: {
        autoComplete: 'email',
        name: 'email',
        label: 'Auto Complete',
        onChange: onChangeAction,
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
        value: 'some text to see spacing...',
        onChange: onChangeAction,
    },
    render,
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: 'color active with palette and custom color',
        onChange: onChangeAction,
    },
    render,
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: 'color label with palette and custom color',
        onChange: onChangeAction,
    },
    render,
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: 'color text with palette and custom color',
        onChange: onChangeAction,
    },
    render,
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: 'disabled text',
        disabled: true,
        onChange: onChangeAction,
    },
    render,
};

export const EndCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPattern {...args} endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputPattern
            {...args}
            endCmp={<SendIcon />}
            label="End Cmp"
            value="endCmp with mui icon name or mui icon element"
        />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPattern
            {...args}
            endCmpExternal="Send"
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
        <InputPattern
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
        value: 'some text with error',
        onChange: onChangeAction,
    },
    render,
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: 'focused text',
        onChange: onChangeAction,
    },
    render,
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: 'text field is default with fullWidth',
        onChange: onChangeAction,
    },
    render,
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: 'some text...',
        onChange: onChangeAction,
    },
    render,
};

export const HideStartActionsOnEmpty_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPattern
            {...args}
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputPattern
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
        onChange: onChangeAction,
    },
    render,
};

export const Margin_ = (args): ReactElement | React.ReactNode => (
    <Stack>
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPattern {...args} label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPattern {...args} margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPattern {...args} margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const OnChangeText: Story = {
    args: {
        label: 'text field state',
        onChange: onChangeAction,
    },
    render,
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
        value: 'some text for show only',
        onChange: onChangeAction,
    },
    render,
};

export const Required: Story = {
    args: {
        required: true,
        label: 'Required field',
        onChange: onChangeAction,
    },
    render,
};

export const StartCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPattern {...args} startCmp="Send" label="Start Cmp" value="with string mui icon name" />
        <InputPattern {...args} startCmp={<SendIcon />} label="Start Cmp" value="with mui icon element" />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPattern {...args} startCmpExternal="Send" label="Start Cmp External" value="with string mui icon name" />
        <InputPattern
            {...args}
            startCmpExternal={<SendIcon />}
            label="Start Cmp External"
            value="with mui icon element"
        />
    </Stack>
);

export const Value: Story = {
    args: {
        value: 'some text without mask',
        onChange: onChangeAction,
    },
    render,
};

export const Variant_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPattern {...args} variant="filled" label="filled variant" value="some text here" />
        <InputPattern {...args} variant="outlined" label="outlined variant" value="some text here" />
        <InputPattern {...args} variant="standard" label="standard variant" value="some text here" />
    </Stack>
);

export const MaskPhone: Story = {
    args: {
        label: 'mask Phone',
        mask: '+(972) 50-000-0000',
        definitions: { '#': /[1-9]/ },
        unmask: false,
        onChange: onChangeAction,
    },
    render,
};

export const UnmaskPhoneValue: Story = {
    args: {
        label: 'unmask Phone',
        mask: '+(972) 50-000-0000',
        definitions: { '#': /[1-9]/ },
        unmask: true,
        onChange: onChangeAction,
    },
    render,
};

export const ShowMaskAsPlaceholder: Story = {
    args: {
        label: 'unmask Phone',
        mask: '+(972) 50-000-0000',
        definitions: { '#': /[1-9]/ },
        unmask: true,
        showMaskAsPlaceholder: false,
        onChange: onChangeAction,
    },
    render,
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
        onChange: onChangeAction,
    },
    render,
};

export const MaskID: Story = {
    args: {
        label: 'ID',
        mask: '0 0000000 0',
        definitions: { '#': /[1-9]/ },
        onChange: onChangeAction,
    },
    render,
};

export const Overwrite: Story = {
    args: {
        label: 'ID',
        mask: '0 0000000 0',
        definitions: { '#': /[1-9]/ },
        overwrite: true,
        onChange: onChangeAction,
    },
    render,
};

export const Lazy_ = (args): React.ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPattern {...args} label="ID default Lazy" mask="0 0000000 0" definitions={{ '#': /[1-9]/ }} />
        <InputPattern {...args} label="ID true Lazy" mask="0 0000000 0" definitions={{ '#': /[1-9]/ }} lazy />
        <InputPattern {...args} label="ID false Lazy" mask="0 0000000 0" definitions={{ '#': /[1-9]/ }} lazy={false} />
    </Stack>
);

export const Formik_ = (args): React.ReactElement | React.ReactNode => {
    return (
        <Formik initialValues={{ phone: '050-000-0000', unmask: false }} onSubmit={(values) => alert(values.phone)}>
            {({ values, touched, setFieldValue, handleChange, errors, handleSubmit }: any) => {
                action('formikRender')(values);
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <InputPattern
                            {...args}
                            name="phone"
                            value={values.phone}
                            label="Phone"
                            mask="+(972) 50-000-0000"
                            definitions={{ '#': /[1-9]/ }}
                            unmask={values.unmask}
                            showMaskAsPlaceholder={touched.phone}
                            onChange={handleChange}
                            onEnterKeyPress={handleSubmit}
                            helperText={touched.error && errors.phone ? errors.phone : ''}
                            error={!!(touched.error && errors.phone)}
                        />
                        <Checkbox name="unmask" label="unmask value" checked={values.unmask} onChange={handleChange} />
                        <Typography>VALUE: {values.phone}</Typography>
                    </Box>
                );
            }}
        </Formik>
    );
};

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import InputNumber from '../InputNumber';
import { Stack } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

const meta: Meta<typeof InputNumber> = {
    title: 'Inputs/Inputs/InputNumber',
    component: InputNumber,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
    args: {},
};

export const AlignActions: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        label: 'Align Actions',
        value: 15548789,
    },
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Email',
        endCmpExternal: 'Fingerprint',
        label: 'Align Actions External',
        value: 5080484,
    },
};

export const CmpSpacing: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        cmpSpacing: 6,
        label: 'Cmp Spacing',
        value: 10550,
    },
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: 99708,
    },
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: 880015,
    },
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: 200303,
    },
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: 6650480,
        disabled: true,
    },
};

export const EndCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputNumber endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputNumber endCmp={<SendIcon />} label="End Cmp" value="endCmp with mui icon name or mui icon element" />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputNumber endCmpExternal="Send" label="End Cmp External" value={808080} />
        <InputNumber endCmpExternal={<SendIcon />} label="End Cmp External" value={840840} />
    </Stack>
);

export const Error: Story = {
    args: {
        error: true,
        label: 'With Error',
        value: 0,
    },
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: 58000,
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: 998989,
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: 770807,
    },
};

export const HideStartActionsOnEmpty_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputNumber
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputNumber
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
        <InputNumber label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputNumber margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputNumber margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const OnChangeText: Story = {
    args: {
        label: 'text field state',
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
    },
    render: (args) => {
        const [value, setValue] = useState(15050);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
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
        <InputNumber startCmp="Send" label="Start Cmp" value={10005} />
        <InputNumber startCmp={<SendIcon />} label="Start Cmp" value={10005} />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputNumber startCmpExternal="Send" label="Start Cmp External" value={4804} />
        <InputNumber startCmpExternal={<SendIcon />} label="Start Cmp External" value={4804} />
    </Stack>
);

export const Type: Story = {
    args: {
        type: 'number',
        label: 'Type Password',
        value: 50,
    },
};

export const Value: Story = {
    args: {
        value: 1e5,
    },
};

export const Variant_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputNumber variant="filled" label="filled variant" value={54407} />
        <InputNumber variant="outlined" label="outlined variant" value={54407} />
        <InputNumber variant="standard" label="standard variant" value={54407} />
    </Stack>
);

export const Min: Story = {
    args: {
        label: 'min 100',
        value: 150,
        min: 100,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Max: Story = {
    args: {
        label: 'max 200',
        value: 150,
        max: 200,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Range: Story = {
    args: {
        label: '[100,200]',
        value: 150,
        min: 100,
        max: 200,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const StepRange: Story = {
    args: {
        label: '[100,200] step: 20',
        value: 150,
        min: 100,
        max: 200,
        step: 20,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Prefix: Story = {
    args: {
        label: 'USD',
        prefix: '$',
        value: 50,
    },
};

export const Suffix: Story = {
    args: {
        label: 'Weight',
        suffix: ' KG',
        value: 60,
    },
};

export const ThousandSeparator_ = (args) => (
    <Stack spacing={3}>
        <InputNumber label="without thousand separator" thousandSeparator={false} value={4054407} />
        <InputNumber label="with thousand separator" thousandSeparator={true} value={4054407} />
        <InputNumber label="... thousand separator" thousandSeparator={'...'} value={4054407} />
    </Stack>
);

export const DecimalSeparator_ = (args) => (
    <Stack spacing={3}>
        <InputNumber label="without decimal separator" decimalSeparator={false} value={407.458} />
        <InputNumber label="with decimal separator" decimalSeparator={true} value={407.458} />
        <InputNumber label="# decimal separator" decimalSeparator={'#'} value={407.458} />
    </Stack>
);

export const Decimal_ = (args) => (
    <Stack spacing={3}>
        <InputNumber label="without decimal separator" value={407.458897} decimal={5} />
        <InputNumber label="with decimal separator" value={407.458897} />
        <InputNumber label="# decimal separator" value={407.458897} decimal={0} />
    </Stack>
);

export const ValueIsNumericString: Story = {
    args: {
        label: 'String value',
        value: '155',
        valueIsNumericString: true,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Mask: Story = {
    args: {
        label: 'Mask',
        value: 1223334444,
        mask: '# ## ### ####',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Format: Story = {
    args: {
        label: 'Format',
        value: 1555008877,
        format: '+1 (###) ###-####',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const PatternChar: Story = {
    args: {
        label: 'Format',
        value: 1555008877,
        format: '+1 (@@@) @@@-@@@@',
        patternChar: '@',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const FixedDecimalScale: Story = {
    args: {
        label: 'Format',
        value: 155.1051,
        fixedDecimalScale: false,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const AllowEmptyFormatting: Story = {
    args: {
        label: 'Not Allow Empty Formatting',
        value: 155.1051,
        allowEmptyFormatting: false,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const EmptyFormatPlaceholder: Story = {
    args: {
        label: 'Format',
        value: 1555008877,
        format: '+1 (###) ###-####',
        emptyFormatPlaceholder: 'phone number in format: +1 (###) ###-####',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Slider: Story = {
    args: {
        label: 'without slider',
        value: 150,
        min: 100,
        max: 200,
        slider: false,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const SliderTooltip: Story = {
    args: {
        label: 'Slider label',
        value: 150,
        min: 100,
        max: 200,
        slider: true,
        sliderTooltip: 'slider tooltip here',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const SliderLabel: Story = {
    args: {
        label: 'Slider label',
        value: 150,
        min: 100,
        max: 200,
        slider: true,
        sliderLabel: (n) => `Slider Label '${n}' value`,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const SelectAllOnFocus: Story = {
    args: {
        label: 'not Select All On Focus',
        value: 150,
        selectAllOnFocus: false,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputNumber {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

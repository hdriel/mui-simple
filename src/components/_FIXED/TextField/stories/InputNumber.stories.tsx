/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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

const render = (args) => {
    const [value, setValue] = useState(args.value);
    return (
        <InputNumber
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
    args: {},
    render,
};

export const TextAlign: Story = {
    args: {
        label: 'Text Align',
        textAlign: 'center',
        value: 15453,
    },
    render,
};

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value: 15453,
    },
    render,
};

export const LetterSpacing: Story = {
    args: {
        label: 'Letter Spacing',
        letterSpacing: '5px',
        value: 111111,
    },
    render,
};

export const AlignActions: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        label: 'Align Actions',
        value: 15548789,
    },
    render,
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Email',
        endCmpExternal: 'Fingerprint',
        label: 'Align Actions External',
        value: 5080484,
    },
    render,
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
    render,
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: 99708,
    },
    render,
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: 880015,
    },
    render,
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: 200303,
    },
    render,
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: 6650480,
        disabled: true,
    },
    render,
};

export const EndCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputNumber {...args} endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputNumber
            {...args}
            endCmp={<SendIcon />}
            label="End Cmp"
            value="endCmp with mui icon name or mui icon element"
        />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputNumber {...args} endCmpExternal="Send" label="End Cmp External" value={808080} />
        <InputNumber {...args} endCmpExternal={<SendIcon />} label="End Cmp External" value={840840} />
    </Stack>
);

export const Error: Story = {
    args: {
        error: true,
        label: 'With Error',
        value: 0,
    },
    render,
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: 58000,
    },
    render,
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: 998989,
    },
    render,
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: 770807,
    },
    render,
};

export const HideStartActionsOnEmpty_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputNumber
            {...args}
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputNumber
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
        <InputNumber {...args} label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputNumber {...args} margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputNumber {...args} margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const OnChangeNumber: Story = {
    args: {
        label: 'text field state',
        value: 0,
    },
    render,
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
        value: 15050,
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
        <InputNumber {...args} startCmp="Send" label="Start Cmp" value={10005} />
        <InputNumber {...args} startCmp={<SendIcon />} label="Start Cmp" value={10005} />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputNumber {...args} startCmpExternal="Send" label="Start Cmp External" value={4804} />
        <InputNumber {...args} startCmpExternal={<SendIcon />} label="Start Cmp External" value={4804} />
    </Stack>
);

export const Type: Story = {
    args: {
        type: 'number',
        label: 'Type Password',
        value: 50,
    },
    render,
};

export const Value: Story = {
    args: {
        value: 1e5,
    },
    render,
};

export const Variant_ = (args): ReactElement | React.ReactNode => {
    const [value, setValue] = useState(1500);

    return (
        <Stack spacing={3}>
            {['filled', 'outlined', 'standard'].map((variant) => (
                <InputNumber
                    {...args}
                    key={variant}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min={1000}
                    max={2000}
                    variant={variant as any}
                    label={`${variant} variant`}
                />
            ))}
        </Stack>
    );
};

export const Min: Story = {
    args: {
        label: 'min 100',
        value: 150,
        min: 100,
    },

    render,
};

export const Max: Story = {
    args: {
        label: 'max 200',
        value: 150,
        max: 200,
    },

    render,
};

export const Range: Story = {
    args: {
        label: '[100,200]',
        value: 150,
        min: 100,
        max: 200,
    },

    render,
};

export const StepRange: Story = {
    args: {
        label: '[100,200] step: 20',
        value: 150,
        min: 100,
        max: 200,
        step: 20,
    },

    render,
};

export const Prefix: Story = {
    args: {
        label: 'USD',
        prefix: '$',
        value: 50,
    },
    render,
};

export const Suffix: Story = {
    args: {
        label: 'Weight',
        suffix: ' KG',
        value: 60,
    },
    render,
};

export const ThousandSeparator_ = (args) => (
    <Stack spacing={3}>
        <InputNumber {...args} label="without thousand separator" thousandSeparator={false} value={4054407} />
        <InputNumber {...args} label="with thousand separator" thousandSeparator={true} value={4054407} />
        <InputNumber {...args} label="space thousand separator" thousandSeparator={' '} value={4054407} />
        <InputNumber {...args} label="# thousand separator" thousandSeparator={'#'} value={4054407} />
    </Stack>
);

export const DecimalSeparator_ = (args) => (
    <Stack spacing={3}>
        <InputNumber
            {...args}
            label="without decimal separator"
            decimalSeparator={false}
            value={'50407.458'}
            valueIsNumericString
        />
        <InputNumber
            {...args}
            label="with decimal separator"
            decimalSeparator={true}
            value={'50407.458'}
            valueIsNumericString
        />
        <InputNumber
            {...args}
            label="space decimal separator"
            decimalSeparator={' '}
            value={'50407.458'}
            valueIsNumericString
        />
        <InputNumber
            {...args}
            label="# decimal separator"
            decimalSeparator={'#'}
            value={'50407.458'}
            valueIsNumericString
        />
    </Stack>
);

export const Decimal_ = (args) => (
    <Stack spacing={3}>
        <InputNumber {...args} label="without decimal separator" value={407.458897} decimal={5} />
        <InputNumber {...args} label="with decimal separator" value={407.458897} />
        <InputNumber {...args} label="# decimal separator" value={407.458897} decimal={0} />
    </Stack>
);

export const ValueIsNumericString: Story = {
    args: {
        label: 'String value',
        value: '155',
        valueIsNumericString: true,
    },

    render,
};

export const Mask: Story = {
    args: {
        label: 'Mask',
        value: 122333,
        mask: '#',
        format: '# ## ### ####',
    },

    render,
};

export const Format: Story = {
    args: {
        label: 'Format',
        value: 1555008877,
        valueIsNumericString: true,
        format: '#### #### #### ####',
        mask: '_',
    },

    render,
};

export const PatternChar: Story = {
    args: {
        label: 'Format',
        value: 1555008877,
        format: '+1 (@@@) @@@-@@@@',
        patternChar: '@',
    },

    render,
};

export const FixedDecimalScale: Story = {
    args: {
        label: 'Format',
        value: 155.1051,
        fixedDecimalScale: false,
    },

    render,
};

export const AllowEmptyFormatting: Story = {
    args: {
        label: 'Not Allow Empty Formatting',
        value: 155.1051,
        allowEmptyFormatting: false,
    },

    render,
};

export const EmptyFormatPlaceholder: Story = {
    args: {
        label: 'Format',
        value: 1555008877,
        format: '+1 (###) ###-####',
        emptyFormatPlaceholder: 'phone number in format: +1 (###) ###-####',
    },

    render,
};

export const Slider: Story = {
    args: {
        label: 'without slider',
        value: 150,
        min: 100,
        max: 200,
        slider: false,
    },

    render,
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

    render,
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

    render,
};

export const SelectAllOnFocus: Story = {
    args: {
        label: 'not Select All On Focus',
        value: 150,
        selectAllOnFocus: false,
    },

    render,
};

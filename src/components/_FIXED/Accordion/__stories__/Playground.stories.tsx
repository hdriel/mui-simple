import meta, { AccordionMetaType, Story } from './_meta';
import { SMALL_IPSUM } from '../../../../__stories__/consts';
import { IconName } from '../../../decs';

export default {
    ...meta,
    title: 'Data-Display/Accordion/Playground',
} as AccordionMetaType;

const expandedIcon: IconName = 'Abc';
const collapsedIcon: IconName = 'AccessTime';

export const Playground: Story = {
    args: {
        label: 'Playground Accordion',
        details: SMALL_IPSUM,
        expandedIcon,
        collapsedIcon,
        detailsMaxRows: 2,
        bgColor: '#f5f5f5',
        textColor: '#333',
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactively test Accordion props here.',
            },
        },
    },
};

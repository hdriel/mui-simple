import React from 'react';
import {
    Send as SendIcon,
    Phone as PhoneIcon,
    Drafts as DraftsIcon,
    Inbox as InboxIcon,
    StarBorder as StarBorderIcon,
} from '@mui/icons-material';
import { ListItemProps } from '../../../decs';

export const nestedList: ListItemProps[] = [
    {
        startIcon: <SendIcon />,
        title: 'Sent mail',
        items: ['Send1', 'Send2', 'Send3', 'Send4'],
        listItemsProps: {
            dragAndDropItems: true,
        },
    },
    {
        startIcon: <DraftsIcon />,
        title: 'Drafts',
        items: ['Draft1', 'Draft2', 'Draft3'],
        listItemsProps: {
            dragAndDropItems: true,
        },
    },
    {
        startIcon: <InboxIcon />,
        title: 'Inbox',
        component: 'div',
        listItemsProps: {
            dragAndDropItems: true,
        },
        items: [
            'Favorite',
            {
                startIcon: <StarBorderIcon />,
                title: 'Starred',
                items: [
                    {
                        startIcon: 'LooksOne',
                        title: 'Mail One',
                        inset: true,
                    },
                    {
                        startIcon: 'LooksTwo',
                        title: 'Mail Two',
                        inset: true,
                    },
                    {
                        startIcon: 'Looks3',
                        title: 'Mail 3',
                        inset: true,
                        items: [
                            {
                                startIcon: 'ThirtyFpsSelect',
                                title: 'something',
                                inset: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        startIcon: <PhoneIcon />,
        title: 'Recents',
        listItemsProps: {
            dragAndDropItems: true,
        },
    },
];

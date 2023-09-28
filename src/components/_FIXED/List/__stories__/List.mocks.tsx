import React from 'react';
import {
    Send as SendIcon,
    Phone as PhoneIcon,
    Drafts as DraftsIcon,
    Inbox as InboxIcon,
    StarBorder as StarBorderIcon,
} from '@mui/icons-material';
import { ListItemProps } from '../../../decs';

const listItemProps = {
    dragAndDropItems: true,
    // droppableId: 'id', // default value to id (title if not exists)
};

export const nestedList: ListItemProps[] = [
    {
        startIcon: <SendIcon />,
        title: 'Sent mail',
        items: ['Send1', 'Send2', 'Send3', 'Send4'],
        listItemsProps: listItemProps,
    },
    {
        startIcon: <DraftsIcon />,
        title: 'Drafts',
        items: ['Draft1', 'Draft2', 'Draft3'],
        listItemsProps: listItemProps,
    },
    {
        startIcon: <InboxIcon />,
        title: 'Inbox',
        component: 'div',
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
        listItemsProps: listItemProps,
    },
];

export const courseChapters = [
    {
        _id: '6403dc6f9575bec0486d3217',
        title: 'בסיס',
        order: 1,
        listItemsProps: listItemProps,
        items: [
            { _id: '6403dc6f9575bec0486d321a', title: 'משתנים', order: 1 },
            { _id: '6403dc6f9575bec0486d321b', title: 'אובייקטים', order: 2 },
            { _id: '6403dc6f9575bec0486d321c', title: 'פונקציות', order: 3 },
            { _id: '6403dc6f9575bec0486d321d', title: 'מערכים', order: 4 },
            { _id: '6403dc6f9575bec0486d321e', title: 'map array', order: 5 },
        ],
    },
    {
        _id: '6403dc6f9575bec0486d3216',
        title: 'מבוא',
        order: 2,
        listItemsProps: listItemProps,
        items: [
            { _id: '6403dc6f9575bec0486d3218', title: 'Hello JS', order: 1 },
            { _id: '6403dc6f9575bec0486d3219', title: 'דוגמה', order: 2 },
        ],
    },
];

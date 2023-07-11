import React from 'react';
import { action } from '@storybook/addon-actions';

import TreeView from '../TreeView';
import { Box } from '@mui/material';
import Button from '../../_FIXED/Button/Button';

import LabelIconTreeItem, { LabelIconTreeItemIcons } from '../TreeItemComponents/LabelIconTreeItem';
import IndentBorderTreeItem, { IndentBorderTreeItemIcons } from '../TreeItemComponents/IndentBorderTreeItem';

import SVGIcon from '../../SVGIcon/SVGIcon';
import Typography from '../../_FIXED/Typography/Typography';

export default {
    title: 'Lab/TreeView',
    component: TreeView,
};

const actions = {
    onClick: action('onClick'),
};

export const Default = () => {
    return <TreeView {...actions} />;
};

export const BasicTreeView = () => {
    const nodes = [
        {
            id: '1',
            label: 'Applications',
            children: [{ id: '2', label: 'Calendar' }],
        },
        {
            id: '5',
            label: 'Documents',
            children: [
                { id: '10', label: 'OSS' },
                { id: '6', label: 'MUI', children: [{ id: '8', label: 'index.js' }] },
            ],
        },
    ];
    return <TreeView nodes={nodes} />;
};

export const MultiSelection = () => {
    const nodes = [
        {
            id: '1',
            label: 'Applications',
            children: [
                { id: '2', label: 'Calendar' },
                { id: '3', label: 'Chrome' },
                { id: '4', label: 'Webstorm' },
            ],
        },
        {
            id: '5',
            label: 'Documents',
            children: [
                {
                    id: '6',
                    label: 'MUI',
                    children: [
                        {
                            id: '7',
                            label: 'src',
                            children: [
                                { id: '8', label: 'index.js' },
                                { id: '9', label: 'tree-view.js' },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleExpandClick = () => {
        setExpanded((oldExpanded) => (oldExpanded.length === 0 ? ['1', '5', '6', '7'] : []));
    };
    const handleSelectClick = () => {
        setSelected((oldSelected) => (oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : []));
    };

    return (
        <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
            <Box sx={{ mb: 1 }}>
                <Button onClick={handleExpandClick}>{expanded.length === 0 ? 'Expand all' : 'Collapse all'}</Button>
                <Button onClick={handleSelectClick}>{selected.length === 0 ? 'Select all' : 'Unselect all'}</Button>
            </Box>

            <TreeView
                nodes={nodes}
                expandedIds={expanded}
                selectedIds={selected}
                onExpended={setExpanded}
                onSelected={setSelected}
                multiSelect
            />
        </Box>
    );
};

export const GmailCloneStyles = () => {
    const nodes = [
        {
            id: '1',
            label: 'All Mail',
            icon: 'Mail',
        },
        {
            id: '2',
            label: 'Trash',
            icon: 'Delete',
        },
        {
            id: '3',
            label: 'Categories',
            icon: 'Label',
            children: [
                {
                    id: '5',
                    label: 'Social',
                    icon: 'SupervisorAccount',
                    info: '90',
                    color: '#1a73e8',
                    bgColor: '#e8f0fe',
                },
                {
                    id: '6',
                    label: 'Updates',
                    icon: 'Info',
                    info: '2,294',
                    color: '#e3742f',
                    bgColor: '#fcefe3',
                },
                {
                    id: '7',
                    label: 'Forums',
                    icon: 'Forum',
                    info: '3,566',
                    color: '#a250f5',
                    bgColor: '#f3e8fd',
                },
                {
                    id: '8',
                    label: 'Promotions',
                    icon: 'LocalOffer',
                    info: '733',
                    color: '#3c8039',
                    bgColor: '#e6f4ea',
                },
            ],
        },
        {
            id: '4',
            label: 'History',
            icon: 'Label',
        },
    ];

    const [expanded, setExpanded] = React.useState(['3']);
    const [selected, setSelected] = React.useState([]);

    return (
        <TreeView
            nodes={nodes}
            expandedIds={expanded}
            selectedIds={selected}
            onExpended={setExpanded}
            onSelected={setSelected}
            TreeItemComponent={LabelIconTreeItem}
            {...LabelIconTreeItemIcons}
        />
    );
};

export const IndentBorderStyles = () => {
    const nodes = [
        {
            id: '1',
            label: 'Main',
            children: [
                {
                    id: '2',
                    label: 'Hello',
                },
                {
                    id: '3',
                    label: 'Subtree with children',
                    children: [
                        {
                            id: '6',
                            label: 'Hello',
                        },
                        {
                            id: '7',
                            label: 'Sub-subtree with children',
                            children: [
                                {
                                    id: '9',
                                    label: 'Child 1',
                                },
                                {
                                    id: '10',
                                    label: 'Child 2',
                                },
                                {
                                    id: '11',
                                    label: 'Child 3',
                                },
                            ],
                        },
                        {
                            id: '8',
                            label: 'Hello',
                        },
                    ],
                },
                {
                    id: '4',
                    label: 'World',
                },
                {
                    id: '5',
                    label: 'Something something',
                },
            ],
        },
    ];

    const [expanded, setExpanded] = React.useState(['1']);
    const [selected, setSelected] = React.useState([]);

    return (
        <TreeView
            nodes={nodes}
            expandedIds={expanded}
            selectedIds={selected}
            onExpended={setExpanded}
            onSelected={setSelected}
            TreeItemComponent={IndentBorderTreeItem}
            {...IndentBorderTreeItemIcons}
        />
    );
};

const StyledTreeItemContent = (props) => {
    const { nodeId, icon: labelIcon, info: labelInfo, label: labelText, selected } = props ?? {};

    return (
        props && (
            <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                {labelIcon && (
                    <Box color="inherit" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                        <SVGIcon muiIconName={labelIcon}>{labelIcon}</SVGIcon>
                    </Box>
                )}
                {labelText && (
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 'inherit',
                            flexGrow: 1,
                            bgColor: selected ? 'red' : undefined,
                        }}
                    >
                        {labelText} ({nodeId})
                    </Typography>
                )}
                {labelInfo && (
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                )}
            </Box>
        )
    );
};

export const CustomItem = () => {
    const nodes = [
        {
            id: '1',
            label: 'Main',
            icon: 'Home',
            info: 'test',
            // color: "red",
            // bgColor: "yellow",
            children: [
                {
                    id: '2',
                    label: 'Hello',
                },
                {
                    id: '3',
                    label: 'Subtree with children',
                    children: [
                        {
                            id: '6',
                            label: 'Hello',
                        },
                        {
                            id: '7',
                            label: 'Sub-subtree with children',
                            children: [
                                {
                                    id: '9',
                                    label: 'Child 1',
                                },
                                {
                                    id: '10',
                                    label: 'Child 2',
                                },
                                {
                                    id: '11',
                                    label: 'Child 3',
                                },
                            ],
                        },
                        {
                            id: '8',
                            label: 'Hello',
                        },
                    ],
                },
                {
                    id: '4',
                    label: 'World',
                },
                {
                    id: '5',
                    label: 'Something something',
                },
            ],
        },
    ];

    const [expanded, setExpanded] = React.useState(['1']);
    const [selected, setSelected] = React.useState([]);

    return (
        <TreeView
            nodes={nodes}
            expandedIds={expanded}
            selectedIds={selected}
            onExpended={setExpanded}
            onSelected={setSelected}
            TransitionComponent={null}
            LabelComponent={StyledTreeItemContent}
        />
    );
};

import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
    ContentCut as ContentCutIcon,
    ContentCopy as ContentCopyIcon,
    ContentPaste as ContentPasteIcon,
    Cloud as CloudIcon,
} from '@mui/icons-material';

import Menu from '../Menu';
import Button from '../../_FIXED/Button/Button';
import ToggleButtonGroups from '../../ToggleButtonGroup/ToggleButtonGroups';
import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';
import { Stack } from '@mui/material';

export default {
    title: 'Navigation/Menu',
    component: Menu,
};

const actions = {
    onClose: action('onClose'),
    onClick: action('onClick'),
};

export const Default = () => {
    return <Menu {...actions} />;
};

export const ChildCmpBinding = () => {
    const anchorRef = useRef(null);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const onClickHandler = (bindAction) => bindAction(true);
    const options = [
        { id: 'o1', label: 'Profile', onClick: action('onClickOption') },
        { id: 'o2', label: 'My account', onClick: action('onClickOption') },
        {
            id: 'o3',
            label: 'Logout',
            onClick: action('onClickOption'),
        },
        {
            id: 'o3',
            label: 'return false',
            onClick: () => {
                action('onClickOption');
                return false;
            },
        },
    ];
    return (
        <Stack direction="row" spacing={5}>
            <Menu
                {...actions}
                options={options}
                open={open1}
                onClose={(event) => {
                    actions.onClose(event);
                    setOpen1(false);
                }}
            >
                <Button onClick={onClickHandler.bind(null, setOpen1)}>Default boundChildrenIndex=0</Button>
            </Menu>
            <Menu
                {...actions}
                options={options}
                open={open2}
                boundChildrenIndex={false}
                onClose={(event) => {
                    actions.onClose(event);
                    setOpen2(false);
                }}
            >
                <Button onClick={onClickHandler.bind(null, setOpen2)}>boundChildrenIndex false</Button>
            </Menu>
            <Menu
                {...actions}
                options={options}
                open={open3}
                boundChildrenIndex={false}
                anchorElementRef={anchorRef}
                onClose={(event) => {
                    actions.onClose(event);
                    setOpen3(false);
                }}
            >
                <Button ref={anchorRef} onClick={onClickHandler.bind(null, setOpen3)}>
                    anchorElementRef
                </Button>
            </Menu>
        </Stack>
    );
};

export const IconMenu = () => {
    const options = [
        {
            id: 'o1',
            label: 'Cut',
            icon: <ContentCutIcon />,
            onClick: action('onClickOption'),
            shortcut: 'Ctrl+X',
        },
        {
            id: 'o2',
            label: 'Copy',
            icon: <ContentCopyIcon />,
            onClick: action('onClickOption'),
            shortcut: 'Ctrl+C',
        },
        {
            id: 'o3',
            label: 'Logout',
            icon: <ContentPasteIcon />,
            onClick: action('onClickOption'),
            shortcut: 'Ctrl+V',
        },
        {
            divider: true,
        },
        {
            id: 'o4',
            label: 'Paste',
            icon: <CloudIcon />,
            onClick: () => {
                action('onClickOption');
                return false;
            },
        },
    ];
    const [boundChildrenId, setBoundChildrenId] = useState(null);
    const [boundChildrenIndex, setBoundChildrenIndex] = useState(null);

    return (
        <>
            <ToggleButtonGroups>
                <ToggleButtonGroup
                    value={String(boundChildrenIndex)}
                    onChange={(newValue) => {
                        setBoundChildrenIndex(+newValue);
                    }}
                    exclusive
                    data={[
                        { value: '0', component: <span>first child</span> },
                        { value: '1', component: <span>second child</span> },
                    ]}
                />
                <ToggleButtonGroup
                    value={boundChildrenId}
                    exclusive
                    onChange={(newValue) => {
                        setBoundChildrenId(newValue);
                    }}
                    data={[
                        { value: 'div-id-1', component: <span>first div</span> },
                        { value: 'div-id-2', component: <span>second div</span> },
                    ]}
                />
            </ToggleButtonGroups>

            <Menu
                {...actions}
                boundChildrenId={boundChildrenId}
                boundChildrenIndex={boundChildrenIndex}
                width={320}
                open
                options={options}
            >
                <div
                    id="div-id-1"
                    style={{
                        margin: '1em',
                        width: '100px',
                        height: '100px',
                        border: '1px solid black',
                    }}
                ></div>
                Text
                <div
                    id="div-id-2"
                    style={{
                        marginTop: '-135px',
                        marginLeft: '200px',
                        width: '100px',
                        height: '100px',
                        border: '1px solid black',
                    }}
                ></div>
            </Menu>
        </>
    );
};

import React, { useEffect, useState } from 'react';
import {
    Send as SendIcon,
    Inbox as InboxIcon,
    Drafts as DraftsIcon,
    Image as ImageIcon,
    Comment as CommentIcon,
    Work as WorkIcon,
    BeachAccess as BeachAccessIcon,
} from '@mui/icons-material';
import { Stack } from '@mui/material';
import Drawer from '../Drawer';
import Button from '../../Button/Button';
import List from '../../List/List';
import Divider from '../../Divider/Divider';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
    title: 'Navigation/Drawer',
    component: Drawer,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const list = () => (
    <div>
        <List
            items={[
                {
                    id: 'inbox',
                    startIcon: <InboxIcon />,
                    title: 'Inbox',
                },
                {
                    id: 'Drafts',
                    startIcon: <DraftsIcon />,
                    title: 'Drafts',
                },
                {
                    id: 'divider',
                    divider: true,
                },
                { id: 'Trash', title: 'Trash' },
                'Spam',
            ]}
        />
        <Divider variant="fullWidth" />
        <List
            items={[
                {
                    id: 'Photos',
                    title: 'Photos',
                    subtitle: 'Jan 9, 2014',
                    avatar: { icon: <ImageIcon /> },
                    actions: [<Button icon={<CommentIcon />} />],
                },
                {
                    id: 'Work',
                    title: 'Work',
                    subtitle: 'Jan 7, 2014',
                    avatar: { icon: <WorkIcon /> },
                    actions: [<Button icon={<SendIcon />} />],
                },
                {
                    id: 'Vacation',
                    title: 'Vacation',
                    subtitle: 'July 20, 2014',
                    avatar: { icon: <BeachAccessIcon /> },
                    actions: [<Button icon={<SendIcon />} />],
                },
            ]}
        />
    </div>
);

const DrawerState = ({ children }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <>
            <Button onClick={() => setOpen(true)} variant="contained">
                OPEN DRAWER
            </Button>
            {children?.({
                open,
                onOpen: () => setOpen(true),
                onToggle: () => setOpen(!open),
                onClose: () => setOpen(false),
            })}
        </>
    );
};

export const Default_ = (args) => {
    return (
        <DrawerState>
            {({ open, onClose, onToggle }) => (
                <Drawer open={open} onClose={onClose} toggleDrawer={onToggle} {...args}>
                    {list()}
                </Drawer>
            )}
        </DrawerState>
    );
};

export const Backdrop_ = (args) => {
    return (
        <DrawerState>
            {({ open, onClose, onToggle }) => (
                <Drawer backdrop open={open} onClose={onClose} variant="temporary" toggleDrawer={onToggle} {...args}>
                    {list()}
                </Drawer>
            )}
        </DrawerState>
    );
};

export const BgColor_ = (args) => {
    return (
        <DrawerState>
            {({ open, onClose, onToggle }) => (
                <Drawer
                    bgColor="primary"
                    open={open}
                    onClose={onClose}
                    variant="temporary"
                    toggleDrawer={onToggle}
                    {...args}
                >
                    {list()}
                </Drawer>
            )}
        </DrawerState>
    );
};

export const Width_ = (args) => {
    return (
        <DrawerState>
            {({ open, onClose, onToggle }) => (
                <Drawer width={600} open={open} onClose={onClose} variant="temporary" toggleDrawer={onToggle} {...args}>
                    {list()}
                </Drawer>
            )}
        </DrawerState>
    );
};

export const HideHeader_ = (args) => {
    return (
        <DrawerState>
            {({ open, onClose, onToggle }) => (
                <Drawer hideHeader open={open} onClose={onClose} variant="temporary" toggleDrawer={onToggle} {...args}>
                    {list()}
                </Drawer>
            )}
        </DrawerState>
    );
};

export const Swipeable_ = (args) => {
    return (
        <DrawerState>
            {({ open, onClose, onToggle }) => (
                <Drawer swipeable open={open} onClose={onClose} variant="temporary" toggleDrawer={onToggle} {...args}>
                    {list()}
                </Drawer>
            )}
        </DrawerState>
    );
};

export const Direction_ = (args) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        direction={anchor}
                        variant="temporary"
                        open={state[anchor]}
                        toggleDrawer={toggleDrawer(anchor, false)}
                        {...args}
                    >
                        {list()}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export const Variant_ = (args) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [state, setState] = React.useState({
        permanent: false,
        'mini-persistent': false,
        persistent: false,
        temporary: false,
    });

    const toggleDrawer = (variant, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setMenuOpen(open);
        setState({ ...state, [variant]: open });
    };

    return (
        <div>
            {['permanent', 'mini-persistent', 'persistent', 'temporary'].map((variant) => (
                <React.Fragment key={variant}>
                    <Button onClick={toggleDrawer(variant, true)}>{variant}</Button>
                    <Drawer
                        direction={'right'}
                        variant={variant}
                        open={menuOpen}
                        toggleDrawer={toggleDrawer(variant, false)}
                        {...args}
                    >
                        {list()}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

const ConsoleLog = () => {
    useEffect(() => console.log('Mounted'), []);
    return null;
};
export const KeepMounted = (args) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [keepMountedMenuOpen, setKeepMountedMenuOpen] = useState(false);

    return (
        <div>
            <Stack>
                <p>check your console log for each Mounted message</p>
                <Button onClick={() => setKeepMountedMenuOpen(true)}>Keep Mounted Menu</Button>
                <Button onClick={() => setMenuOpen(true)}>Menu Open</Button>
            </Stack>

            <React.Fragment>
                <Drawer
                    direction="right"
                    variant="temporary"
                    keepMounted={true}
                    open={menuOpen}
                    toggleDrawer={() => setKeepMountedMenuOpen(false)}
                    {...args}
                >
                    <ConsoleLog />
                    {list()}
                </Drawer>
                <Drawer
                    direction="left"
                    variant="persistent"
                    keepMounted={false}
                    open={menuOpen}
                    toggleDrawer={() => setMenuOpen(false)}
                    {...args}
                >
                    <ConsoleLog />
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import { Stack, Box, Container } from '@mui/material';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Send as SendIcon,
    Delete as DeleteIcon,
    Fingerprint as FingerprintIcon,
} from '@mui/icons-material';

import AppBarOld from '../AppBar.old';
import Button from '../../_FIXED/Button/Button';
import Avatar from '../../_FIXED/Avatar/Avatar';
import Typography from '../../_FIXED/Typography/Typography';
import Menu from '../../_FIXED/Menu/Menu';
import { action } from '@storybook/addon-actions';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default {
    title: 'Surfaces/AppBar',
    component: AppBarOld,
    decorators: [
        (Story) => (
            <div
                id="story"
                style={{
                    height: '800px',
                    backgroundColor: '#f5f2f2',
                    overflow: 'auto',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export const Default = (props) => {
    return <AppBarOld {...props} />;
};

export const MenuToolbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menu = (
        <Button color="inherit" icon={menuOpen ? <CloseIcon /> : <MenuIcon />} onClick={() => setMenuOpen(!menuOpen)} />
    );

    return (
        <Stack spacing={3}>
            <AppBarOld position="static" menu={menu} />
            <AppBarOld position="static" menu />
            <AppBarOld position="static" />
        </Stack>
    );
};

export const Title = () => {
    return (
        <Stack spacing={3}>
            <AppBarOld position="static" title="My Mui Component" />
            <AppBarOld
                position="static"
                menu
                title={
                    <>
                        <Avatar image={'1.jpg'} />
                        <Typography wrap={false}>Hello world</Typography>
                    </>
                }
            />
            <AppBarOld position="static" />
        </Stack>
    );
};

export const Dense = () => {
    return (
        <Stack spacing={3}>
            <AppBarOld
                position="static"
                menu
                dense
                title={
                    <>
                        <Avatar image={'1.jpg'} />
                        <Typography wrap={false}>With Dense</Typography>
                    </>
                }
            />
            <AppBarOld
                position="static"
                menu
                title={
                    <>
                        <Avatar image={'1.jpg'} />
                        <Typography wrap={false}>Without Dense</Typography>
                    </>
                }
            />
            <AppBarOld
                position="static"
                menu
                disablePadding
                title={
                    <>
                        <Avatar image={'1.jpg'} />
                        <Typography wrap={false}>Disable Padding</Typography>
                    </>
                }
            />
            <AppBarOld
                position="static"
                menu
                dense
                disablePadding
                title={
                    <>
                        <Avatar image={'1.jpg'} />
                        <Typography wrap={false}>Dense & Disable Padding</Typography>
                    </>
                }
            />
        </Stack>
    );
};

export const Actions = () => {
    return (
        <Stack spacing={3}>
            <AppBarOld
                position="static"
                menu
                title={
                    <>
                        <Avatar image={'1.jpg'} />
                        <Typography wrap={false}>Hello world</Typography>
                    </>
                }
                actions={[
                    <Button>Label only</Button>,
                    <Button startIcon={<SendIcon />}>Start Icon</Button>,
                    <Button color="error" endIcon={<DeleteIcon />}>
                        , End Icon
                    </Button>,
                    <Button color={'#D05010'} icon={<FingerprintIcon />} />,
                    <Button color="inherit">Login</Button>,
                ]}
            />
            <AppBarOld
                position="static"
                menu
                actions={[
                    <Button>Label only</Button>,
                    <Button startIcon={<SendIcon />}>Start Icon</Button>,
                    <Button color="error" endIcon={<DeleteIcon />}>
                        , End Icon
                    </Button>,
                    <Button color={'#D05010'} icon={<FingerprintIcon />} />,
                    <Button color="inherit">Login</Button>,
                ]}
            />

            <AppBarOld
                position="static"
                actions={[
                    <Button>Label only</Button>,
                    <Button startIcon={<SendIcon />}>Start Icon</Button>,
                    <Button color="error" endIcon={<DeleteIcon />}>
                        , End Icon
                    </Button>,
                    <Button color={'#D05010'} icon={<FingerprintIcon />} />,
                    <Button color="inherit">Login</Button>,
                ]}
            />
        </Stack>
    );
};

export const ActionMenu = () => {
    const [open, setOpen] = useState(false);

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
            onClick: (event) => {
                action('onClickOption')(event);
                return false;
            },
        },
    ];

    return (
        <AppBarOld
            menu
            title="Hello World"
            actions={
                <Menu options={options} open={open} onClose={() => setOpen(false)}>
                    <Avatar image={'1.jpg'} onClick={() => setOpen(true)} />
                </Menu>
            }
        />
    );
};

export const ThemedAndColored = () => {
    return (
        <Stack spacing={3}>
            <ThemeProvider theme={createTheme({ palette: { mode: 'light' } })}>
                <AppBarOld position="static" menu title="light primary" color="primary" />
            </ThemeProvider>
            <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
                <AppBarOld position="static" menu title="dark primary" color="primary" />
                <AppBarOld
                    position="static"
                    menu
                    title="dark primary with enableColorOnDark"
                    color="primary"
                    enableColorOnDark
                />
            </ThemeProvider>
            <AppBarOld position="static" menu title="#86950d" color={'#86950d'} />
            <AppBarOld position="static" menu title="default" />
            <AppBarOld position="static" />
        </Stack>
    );
};

export const Scroller = () => {
    const [scrollElement, setScrollElement] = useState();
    useEffect(() => {
        setScrollElement(document.getElementById('story'));
    }, []);

    return (
        scrollElement && (
            <>
                <AppBarOld title="Elevation Scroll" elevationScroll scrollElement={scrollElement} scrollToTop />
                <Container>
                    <Box sx={{ my: 2 }}>
                        {[...new Array(30)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                            )
                            .join('\n')}
                    </Box>
                </Container>
            </>
        )
    );
};

export const ElevationScroll = () => {
    const [scrollElement, setScrollElement] = useState();
    useEffect(() => {
        setScrollElement(document.getElementById('story'));
    }, []);

    return (
        scrollElement && (
            <>
                <AppBarOld title="Elevation Scroll" elevationScroll scrollElement={scrollElement} />
                <Container>
                    <Box sx={{ my: 2 }}>
                        {[...new Array(30)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                            )
                            .join('\n')}
                    </Box>
                </Container>
            </>
        )
    );
};

export const HideOnScroll = () => {
    const [scrollElement, setScrollElement] = useState();
    useEffect(() => {
        setScrollElement(document.getElementById('story'));
    }, []);

    return (
        scrollElement && (
            <>
                <AppBarOld title="hide On Scroll" hideOnScroll scrollElement={scrollElement} />
                <Container>
                    <Box sx={{ my: 2 }}>
                        {[...new Array(30)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                            )
                            .join('\n')}
                    </Box>
                </Container>
            </>
        )
    );
};

export const BottomAppBar = () => {
    const [scrollElement, setScrollElement] = useState();
    useEffect(() => {
        setScrollElement(document.getElementById('story'));
    }, []);

    return (
        scrollElement && (
            <>
                <AppBarOld
                    position="fixed-bottom"
                    title="Bottom App Bar"
                    elevationScroll
                    scrollElement={scrollElement}
                    scrollToTop
                />
                <Container>
                    <Box sx={{ my: 2 }}>
                        {[...new Array(30)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                            )
                            .join('\n')}
                    </Box>
                </Container>
            </>
        )
    );
};

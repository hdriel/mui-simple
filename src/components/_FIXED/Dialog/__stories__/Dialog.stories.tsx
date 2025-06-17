import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {
    Avatar,
    Box,
    FormControl,
    FormControlLabel,
    InputLabel,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import Dialog, { DialogContentText } from '../Dialog';
import Button from '../../Button/Button';
import { colors } from '@mui/material';
import { Add as AddIcon, Person as PersonIcon } from '@mui/icons-material';

const meta: Meta<typeof Dialog> = {
    title: 'Feedback/Dialog',
    component: Dialog,
    // tags: ['autodocs'], // hide because make page stack
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    args: {},
};

export const Actioned: Story = {
    args: {
        title: 'Subscribe actions',
        children: (
            <>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </>
        ),
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button variant="outlined" onClick={handleClickOpen} label="Open form dialog" />
                <Dialog
                    {...args}
                    title="Subscribe"
                    open={open}
                    onClose={handleClose}
                    actions={[
                        { label: 'Cancel', onClick: () => handleClose() },
                        { label: 'Subscribe', onClick: () => handleClose() },
                    ]}
                />
            </>
        );
    },
};

export const Draggable: Story = {
    args: {
        title: 'Draggable title section',
        titleId: 'my-dialog-id',
        contentId: 'my-content-id',
        children: 'To draggable dialog component click on title section and drag to anywhere',
        draggable: true,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button variant="outlined" onClick={handleClickOpen} label="Open Dialog" />
                <Dialog {...args} open={open} onClose={handleClose} />
            </>
        );
    },
};

export const Dividers: Story = {
    args: {
        title: 'Dividers between header, content and footer',
        children: <DialogContentText>See, there are dividers between title, content and actions</DialogContentText>,
        dividers: true,
        actions: [{ label: 'OK' }],
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button variant="outlined" onClick={handleClickOpen} label="Open Dialog" />
                <Dialog {...args} open={open} onClose={handleClose} />
            </>
        );
    },
};

export const FullWidth: Story = {
    args: {
        title: 'FullWidth',
        children: <DialogContentText>fullWidth</DialogContentText>,
        fullWidth: true,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button variant="outlined" onClick={handleClickOpen} label="Open Dialog" />
                <Dialog {...args} open={open} onClose={handleClose} />
            </>
        );
    },
};

export const Info: Story = {
    args: {
        titleId: 'alert-dialog-title',
        contentId: 'alert-dialog-description',
        title: "Use Google's location service?",
        autoContentPadding: true,
        children:
            'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button variant="outlined" onClick={handleClickOpen} label="Open Dialog" />
                <Dialog {...args} open={open} onClose={handleClose} />
            </>
        );
    },
};

export const AutoContentPadding: Story = {
    args: {
        titleId: 'alert-dialog-title',
        contentId: 'alert-dialog-description',
        title: 'Set backup account',
        autoContentPadding: false,
        children:
            'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button variant="outlined" onClick={handleClickOpen} label="Open Dialog" />
                <Dialog {...args} open={open} onClose={handleClose} />
            </>
        );
    },
};

export const MaxWidth_ = () => {
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState<false | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleMaxWidthChange = (event) => setMaxWidth(event.target.value);
    const handleFullWidthChange = (event) => setFullWidth(event.target.checked);

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen} label="Open max-width dialog" />
            <Dialog title="Optional sizes" fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
                <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
                <Box
                    noValidate
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        width: 'fit-content',
                    }}
                >
                    <FormControl sx={{ mt: 2, minWidth: 120 }}>
                        <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                        <Select
                            autoFocus
                            value={maxWidth as any}
                            onChange={handleMaxWidthChange}
                            label="maxWidth"
                            inputProps={{
                                name: 'max-width',
                                id: 'max-width',
                            }}
                        >
                            <MenuItem value={false as unknown as string}>false</MenuItem>
                            <MenuItem value="xs">xs</MenuItem>
                            <MenuItem value="sm">sm</MenuItem>
                            <MenuItem value="md">md</MenuItem>
                            <MenuItem value="lg">lg</MenuItem>
                            <MenuItem value="xl">xl</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        sx={{ mt: 1 }}
                        control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
                        label="Full width"
                    />
                </Box>
            </Dialog>
        </>
    );
};

export const FullScreen: Story = {
    args: {
        title: 'Set backup account',
        fullScreen: 'sm',
        children:
            'to see it in fullscreen you need to rich to sm size, you can change this breakpoint. small you screen to see this effect',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button variant="outlined" onClick={handleClickOpen} label="Open Dialog" />
                <Dialog {...args} open={open} onClose={handleClose} />
            </>
        );
    },
};

export const Title: Story = {
    args: {
        title: undefined,
        children:
            'to see it in fullscreen you need to rich to sm size, you can change this breakpoint. small you screen to see this effect',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button variant="outlined" onClick={handleClickOpen} label="Open Dialog" />
                <Dialog {...args} open={open} onClose={handleClose} />
            </>
        );
    },
};

export const SelectedValue_ = (args) => {
    const emails = ['username@gmail.com', 'user02@gmail.com'];
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(emails[1]);
    const handleClickOpen = () => setOpen(true);

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <Box>
            <Typography variant="subtitle1" component="div">
                Selected: {selectedValue}
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleClickOpen} label="Open simple dialog" />
            <Dialog
                {...args}
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                title="Set backup account"
                autoContentPadding={false}
            >
                <List sx={{ pt: 0 }}>
                    {emails.map((email) => (
                        <ListItem key={email} disableGutters>
                            <ListItemButton onClick={() => handleClose(email)} key={email}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: colors.blue[100], color: colors.blue[600] }}>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <ListItem disableGutters>
                        <ListItemButton autoFocus onClick={() => handleClose('addAccount')}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add account" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Dialog>
        </Box>
    );
};

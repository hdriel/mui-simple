import React, { useState } from "react";
import {
  Typography,
  Button,
  List,
  TextField,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Box,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Person as PersonIcon, Add as AddIcon } from "@mui/icons-material";

import Dialog, { DialogContentText } from "../Dialog";

export default {
  title: "base-components/Dialog",
  component: Dialog,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <Dialog />;
};

export const Draggabled = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        title="Draggable title section"
        open={open}
        onClose={handleClose}
        draggable
      >
        To draggable dialog component click on title section and drag to
        anywhere
      </Dialog>
    </div>
  );
};

export const Dividers = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        title="Dividers"
        open={open}
        dividers
        onClose={handleClose}
        actions={[{ label: "OK", onClick: () => handleClose() }]}
      >
        <DialogContentText>
          See, there are dividers between title, content and actions
        </DialogContentText>
      </Dialog>
    </>
  );
};

export const Fullscreen = () => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMaxWidthChange = (event) => setMaxWidth(event.target.value);
  const handleFullWidthChange = (event) => setFullWidth(event.target.checked);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        title="Optional sizes"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
        <Box
          noValidate
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
          }}
        >
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
            <Select
              autoFocus
              value={maxWidth}
              onChange={handleMaxWidthChange}
              label="maxWidth"
              inputProps={{
                name: "max-width",
                id: "max-width",
              }}
            >
              <MenuItem value={false}>false</MenuItem>
              <MenuItem value="xs">xs</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            sx={{ mt: 1 }}
            control={
              <Switch checked={fullWidth} onChange={handleFullWidthChange} />
            }
            label="Full width"
          />
        </Box>
      </Dialog>
    </>
  );
};

export const Actioned = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        title="Subscribe"
        open={open}
        onClose={handleClose}
        actions={[
          { label: "Cancel", onClick: () => handleClose() },
          { label: "Subscribe", onClick: () => handleClose() },
        ]}
      >
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
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
      </Dialog>
    </div>
  );
};

export const Info = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        titleId="alert-dialog-title"
        contentId="alert-dialog-description"
        title="Use Google's location service?"
        autoContentPadding
      >
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </Dialog>
    </>
  );
};

export const DisableAutoPadding = () => {
  const emails = ["username@gmail.com", "user02@gmail.com"];
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);
  const handleClickOpen = () => setOpen(true);

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog
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
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handleClose("addAccount")}>
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
    </div>
  );
};

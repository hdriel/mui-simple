import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";

import Chip from "../../Chip/Chip";
import Divider from "../Divider";

export default {
  title: "Data-Display/Divider",
  component: Divider,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Divider {...actions} />;
};

export const Variant = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-label="mailbox folders"
    >
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider variant="fullWidth" />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <Divider variant="middle" />
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider variant="inset" />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
};

export const Orientation = () => {
  return (
    <Box
      sx={{
        border: "1px dashed black",
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        p: 2,
      }}
    >
      <Box sx={{ my: 1, display: "flex" }}>
        <Typography sx={{ mr: 1 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Divider variant="fullWidth" orientation="vertical" flexItem />
        <Typography sx={{ ml: 2 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>
      <Divider variant="middle" orientation="horizontal" />
      <Box sx={{ my: 1, display: "flex" }}>
        <Typography sx={{ mr: 1 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Divider variant="fullWidth" orientation="vertical" flexItem />
        <Typography sx={{ ml: 2 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>
    </Box>
  );
};

export const Label = () => {
  return (
    <Box
      sx={{
        border: "1px dashed black",
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        p: 2,
      }}
    >
      <Box sx={{ my: 1, display: "flex" }}>
        <Typography sx={{ mr: 1 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Divider
          variant="fullWidth"
          orientation="vertical"
          label={"1st"}
          textAlign="center"
        />
        <Typography sx={{ ml: 2 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>
      <Divider
        variant="middle"
        orientation="horizontal"
        label={"left"}
        textAlign="left"
      />
      <Divider
        variant="middle"
        orientation="horizontal"
        label={<Chip label="center" />}
        textAlign="center"
      />
      <Divider
        variant="middle"
        orientation="horizontal"
        label={"right"}
        textAlign="right"
      />
      <Box sx={{ my: 1, display: "flex" }}>
        <Typography sx={{ mr: 1 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Divider variant="fullWidth" orientation="vertical" textAlign="left">
          2nd
        </Divider>
        <Typography sx={{ ml: 2 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>
    </Box>
  );
};

export const Colored = () => {
  return (
    <Box
      sx={{
        border: "1px dashed black",
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        p: 2,
      }}
    >
      <Box sx={{ my: 1, display: "flex" }}>
        <Typography sx={{ mr: 1 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Divider
          variant="fullWidth"
          orientation="vertical"
          label={"1st"}
          textAlign="center"
          color={"#2bce20"}
        />
        <Typography sx={{ ml: 2 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>

      <Divider
        variant="middle"
        orientation="horizontal"
        label={<Chip label="secondary" />}
        textAlign="center"
        muiColor={"secondary"}
      />

      <Box sx={{ my: 1, display: "flex" }}>
        <Typography sx={{ mr: 1 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Divider
          variant="fullWidth"
          orientation="vertical"
          textAlign="left"
          muiColor={"primary"}
        >
          2nd
        </Divider>
        <Typography sx={{ ml: 2 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>
    </Box>
  );
};

export const Thickness = () => {
  return (
    <Box
      sx={{
        border: "1px dashed black",
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        p: 2,
      }}
    >
      <Box sx={{ my: 1, display: "flex" }}>
        <Typography sx={{ mr: 1 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Divider
          variant="fullWidth"
          orientation="vertical"
          label={"#2bce20"}
          textAlign="center"
          color={"#2bce20"}
          thickness={2}
        />
        <Typography sx={{ ml: 2 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>

      <Divider
        variant="middle"
        orientation="horizontal"
        label={<Chip label="secondary" />}
        textAlign="center"
        muiColor={"secondary"}
        thickness={4}
      />
      <Divider
        variant="middle"
        orientation="horizontal"
        label={"secondary"}
        textAlign="left"
        muiColor={"secondary"}
        thickness={4}
      />
      <Divider
        variant="middle"
        orientation="horizontal"
        label={"default"}
        textAlign="right"
        light
        color={"#5019c9"}
        thickness={5}
      />

      <Box sx={{ my: 1, display: "flex" }}>
        <Typography sx={{ mr: 1 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Divider
          variant="fullWidth"
          orientation="vertical"
          textAlign="left"
          muiColor={"primary"}
          thickness={3}
        >
          primary
        </Divider>
        <Typography sx={{ ml: 2 }} color="text.secondary" variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>
    </Box>
  );
};

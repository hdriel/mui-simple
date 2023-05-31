import React from "react";
import { action } from "@storybook/addon-actions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import Card from "../Card";
import Avatar from "../../Avatar/Avatar";
import {
  Cloud as CloudIcon,
  ContentCopy as ContentCopyIcon,
  ContentCut as ContentCutIcon,
  ContentPaste as ContentPasteIcon,
} from "@mui/icons-material";
import CardContentExpended from "../CardContentExpended";
import Typography from "../../Typography/Typography";

export default {
  title: "Surfaces/Card",
  component: Card,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Card {...actions} />;
};

export const ComplexInteraction = () => {
  const options = [
    {
      id: "o1",
      label: "Cut",
      icon: <ContentCutIcon />,
      onClick: action("onClickOption"),
      shortcut: "Ctrl+X",
    },
    {
      id: "o2",
      label: "Copy",
      icon: <ContentCopyIcon />,
      onClick: action("onClickOption"),
      shortcut: "Ctrl+C",
    },
    {
      id: "o3",
      label: "Logout",
      icon: <ContentPasteIcon />,
      onClick: action("onClickOption"),
      shortcut: "Ctrl+V",
    },
    {
      divider: true,
    },
    {
      id: "o4",
      label: "Paste",
      icon: <CloudIcon />,
      onClick: () => {
        action("onClickOption");
        return false;
      },
    },
  ];
  return (
    <Card
      maxWidth={350}
      avatar={<Avatar username="R" />}
      title="Shrimp and Chorizo Paella"
      subtitle="September 14, 2016"
      optionsMenu={{ options, width: 320 }}
      image="/paella.jpg"
      actions={[{ icon: <FavoriteIcon /> }, { icon: <ShareIcon /> }]}
    >
      <Typography variant="body2" color="text.secondary" rows={3}>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>

      <CardContentExpended>
        <Typography paragraph wrap={false} component="p">
          Method:
        </Typography>
        <Typography paragraph wrap={false} component="p">
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          set aside for 10 minutes.
        </Typography>
        <Typography paragraph wrap={false} component="p">
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          over medium-high heat. Add chicken, shrimp and chorizo, and cook,
          stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
          shrimp to a large plate and set aside, leaving chicken and chorizo in
          the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about
          10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
          bring to a boil.
        </Typography>
        <Typography paragraph wrap={false} component="p">
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is
          absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
          shrimp and mussels, tucking them down into the rice, and cook again
          without stirring, until mussels have opened and rice is just tender, 5
          to 7 minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        <Typography wrap={false} component="p">
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContentExpended>
    </Card>
  );
};

export const Media = () => {
  return (
    <Card
      maxWidth={345}
      image={{
        src: "/contemplative-reptile.jpg",
        title: "green iguana",
        alt: "image",
        width: 151,
      }}
      actions={[
        { label: "Share", size: "small" },
        { label: "Learn More", size: "small" },
      ]}
    >
      <Typography gutterBottom variant="h5" component="div" wrap={false}>
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary" wrap={false}>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </Card>
  );
};

export const UIControls = () => {
  return (
    <Card image={{ src: "/live-from-space.jpg", width: 151 }} horizontalLayout>
      small
    </Card>
  );
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
import {
    Cloud as CloudIcon,
    ContentCopy as ContentCopyIcon,
    ContentCut as ContentCutIcon,
    ContentPaste as ContentPasteIcon,
    Favorite as FavoriteIcon,
    PlayArrow as PlayArrowIcon,
    Share as ShareIcon,
    SkipNext as SkipNextIcon,
    SkipPrevious as SkipPreviousIcon,
} from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import Card from '../Card';
import CardExpandedContent from '../CardExpandedContent';
import MyAvatar from '../../Avatar/Avatar';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
import SVGIcon from '../../../SVGIcon/SVGIcon';

const meta: Meta<typeof Card> = {
    title: 'Surfaces/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {},
};

export const Actions: Story = {
    args: {
        title: 'Actions card',
        actions: [{ icon: 'Fingerprint' }, { startIcon: 'Send', label: 'Send' }],
    },
};

export const Avatar: Story = {
    args: {
        title: 'Avatar card',
        avatar: <MyAvatar image="1.jpg" />,
    },
};

export const Image: Story = {
    args: {
        title: 'Image Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
            height: 150,
            onClick: () => alert('onClick image'),
        },
    },
};

export const ImageCmp: Story = {
    args: {
        title: 'Image Card',
        image: <SVGIcon muiIconName="Add" />,
    },
};

export const ImageStretch: Story = {
    args: {
        title: 'Image Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
            height: 150,
            stretch: 'fill',
            onClick: () => alert('onClick image'),
        },
    },
};

export const ImageBroken: Story = {
    args: {
        title: 'Image Card',
        image: {
            src: null,
            title: 'profile image',
            width: 300,
            onClick: () => alert('onClick image'),
        },
    },
};

export const MediaOnTop: Story = {
    args: {
        title: 'Image Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
            onClick: () => alert('onClick image'),
        },
        mediaOnTop: true,
    },
};

export const ContentPadding: Story = {
    args: {
        title: 'Content Padding Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
        },
        contentPadding: 0,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla iaculis, ultrices lorem non, porta nulla. Nunc viverra nulla vel consequat tincidunt. Maecenas imperdiet porttitor massa in bibendum. In hac habitasse platea dictumst. Sed vel elit et lectus semper egestas. Fusce eu felis nec arcu ultrices commodo eget scelerisque est. Morbi quis nulla est.',
    },
};

export const Width: Story = {
    args: {
        title: 'width 300 Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
        },
        width: 300,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla iaculis, ultrices lorem non, porta nulla. Nunc viverra nulla vel consequat tincidunt. Maecenas imperdiet porttitor massa in bibendum. In hac habitasse platea dictumst. Sed vel elit et lectus semper egestas. Fusce eu felis nec arcu ultrices commodo eget scelerisque est. Morbi quis nulla est.',
    },
};

export const MaxWidth: Story = {
    args: {
        title: 'maxWidth 400 Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
        },
        maxWidth: 400,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla iaculis, ultrices lorem non, porta nulla. Nunc viverra nulla vel consequat tincidunt. Maecenas imperdiet porttitor massa in bibendum. In hac habitasse platea dictumst. Sed vel elit et lectus semper egestas. Fusce eu felis nec arcu ultrices commodo eget scelerisque est. Morbi quis nulla est.',
    },
};

export const Titles: Story = {
    args: {
        title: 'title Card',
        subtitle: 'subtitle Card',
    },
};

export const FlexDirection: Story = {
    args: {
        title: 'flexDirection row Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
        },
        maxWidth: 600,
        flexDirection: 'row',
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla iaculis, ultrices lorem non, porta nulla. Nunc viverra nulla vel consequat tincidunt. Maecenas imperdiet porttitor massa in bibendum. In hac habitasse platea dictumst. Sed vel elit et lectus semper egestas. Fusce eu felis nec arcu ultrices commodo eget scelerisque est. Morbi quis nulla est.',
    },
};

export const OptionsMenu: Story = {
    args: {
        title: 'OptionsMenu Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
        },
        optionsMenu: [{ label: 'Option 1' }, { label: 'Option 2' }, { divider: true }, { label: 'Close' }],
    },
};

export const ExpandedContent: Story = {
    args: {
        title: 'CardContentExpended Card',
        image: {
            src: '1.jpg',
            title: 'profile image',
            width: 300,
        },
        maxWidth: 400,
        actions: [{ icon: 'Fingerprint' }, { startIcon: 'Send', label: 'Send', color: 'primary' }],
        children: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla iaculis, ultrices lorem non, porta nulla. Nunc viverra nulla vel consequat tincidunt. Maecenas imperdiet porttitor massa in bibendum. In hac habitasse platea dictumst. Sed vel elit et lectus semper egestas. Fusce eu felis nec arcu ultrices commodo eget scelerisque est. Morbi quis nulla est.',
            <CardExpandedContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla iaculis, ultrices lorem non,
                po
            </CardExpandedContent>,
        ],
    },
};

export const ComplexInteraction: Story = {
    args: {
        maxWidth: 350,
        avatar: <MyAvatar username="R" />,
        title: 'Shrimp and Chorizo Paella',
        subtitle: 'September 14, 2016',
        image: 'paella.jpg',
        actions: [{ icon: <FavoriteIcon /> }, { icon: <ShareIcon /> }],
        optionsMenu: {
            options: [
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
            ],
            width: 200,
        },
        children: [
            <Typography variant="body2" color="text.secondary" rows={3}>
                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                cup of frozen peas along with the mussels, if you like.
            </Typography>,
            <CardExpandedContent>
                <Typography paragraph wrap={false} component="p">
                    Method:
                </Typography>
                <Typography paragraph wrap={false} component="p">
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph wrap={false} component="p">
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
                    chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes.
                    Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until
                    thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
                    bring to a boil.
                </Typography>
                <Typography paragraph wrap={false} component="p">
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without
                    stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                    reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until
                    mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that
                    don&apos;t open.)
                </Typography>
                <Typography wrap={false} component="p">
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
            </CardExpandedContent>,
        ],
    },
};

export const Media_ = (args) => {
    return (
        <Card
            maxWidth={345}
            image={{
                src: 'contemplative-reptile.jpg',
                title: 'green iguana',
                alt: 'image',
            }}
            actions={[
                { label: 'Share', size: 'small' },
                { label: 'Learn More', size: 'small' },
            ]}
        >
            <Typography gutterBottom variant="h5" component="div" wrap={false}>
                Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary" wrap={false}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
            </Typography>
        </Card>
    );
};

export const UIControls_ = (args) => {
    const theme = useTheme();
    let [prevIcon, nextIcon] = [<SkipPreviousIcon />, <SkipNextIcon />];
    if (theme.direction === 'rtl') {
        [prevIcon, nextIcon] = [nextIcon, prevIcon];
    }
    const artist = (
        <>
            <Typography component="div" variant="h5">
                Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
            </Typography>
        </>
    );

    return (
        <Stack spacing={3}>
            <Card image={{ src: 'live-from-space.jpg', width: 151 }} flexDirection="row-reverse">
                <Box sx={{ height: 'inherit', display: 'flex', flexDirection: 'column' }}>
                    {artist}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mt: 'auto',
                        }}
                    >
                        <Button icon={prevIcon} />
                        <Button icon={<PlayArrowIcon sx={{ height: 38, width: 38 }} />} />
                        <Button icon={nextIcon} />
                    </Box>
                </Box>
            </Card>

            <Card
                image={{ src: 'live-from-space.jpg', width: 151 }}
                flexDirection="row-reverse"
                title="Live From Space"
                subtitle="Mac Miller"
                contentPadding={0}
            >
                <Box sx={{ height: 'inherit', display: 'flex', flexDirection: 'column' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            pl: 1,
                        }}
                    >
                        <Button icon={prevIcon} />
                        <Button icon={<PlayArrowIcon sx={{ height: 38, width: 38 }} />} />
                        <Button icon={nextIcon} />
                    </Box>
                </Box>
            </Card>
        </Stack>
    );
};

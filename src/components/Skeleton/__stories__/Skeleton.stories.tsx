import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Stack } from '@mui/material';

import Avatar from '../../_FIXED/Avatar/Avatar';
import Typography from '../../_FIXED/Typography/Typography';
import Button from '../../_FIXED/Button/Button';
import Skeleton from '../Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Feedback/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div
                style={{
                    width: '500px',
                    height: 'max-content',
                    padding: '0.5em',
                    border: '1px dashed black',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        loading: true,
    },
};

export const TextSkeleton_ = (args) => {
    return (
        <Stack spacing={3} direction={'row'}>
            <Skeleton {...args} loading>
                <Typography>Typography text</Typography>
            </Skeleton>
            <Skeleton {...args} loading>
                original text
            </Skeleton>
            <Skeleton {...args} loading>
                <span>span text</span>
            </Skeleton>
        </Stack>
    );
};

export const AvatarSkeleton_ = (args) => {
    return (
        <Stack spacing={3} direction={'row'}>
            <Skeleton {...args} loading>
                <Avatar size={'50px'} />
            </Skeleton>
            <Skeleton {...args} loading>
                <Avatar size={'100px'} />
            </Skeleton>
            <Skeleton {...args} loading>
                <Avatar />
            </Skeleton>
        </Stack>
    );
};

export const Dynamic_ = (args) => {
    const [loading, setLoading] = useState(false);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Button onClick={() => setLoading(!loading)}>{loading ? 'Hide' : 'Show'} Skeleton</Button>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs>
                    <Skeleton {...args} loading={loading}>
                        <Avatar size={'50px'} />
                    </Skeleton>
                </Grid>
                <Grid item xs={10}>
                    <Skeleton {...args} loading={loading}>
                        <Typography>Typography text</Typography>
                    </Skeleton>
                    <Skeleton {...args} loading={loading}>
                        <Typography>a long long long long text text text text text</Typography>
                    </Skeleton>
                </Grid>
            </Grid>
        </Grid>
    );
};

export const Timeout_ = (args) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000 * 1.5);
    }, []);

    return (
        <Grid container>
            <Grid item container xs={12}>
                <Grid item xs>
                    <Skeleton {...args} loading={loading}>
                        <Avatar size={'50px'} />
                    </Skeleton>
                </Grid>
                <Grid item xs={10}>
                    <Skeleton {...args} loading={loading}>
                        <Typography>Typography text</Typography>
                    </Skeleton>
                    <Skeleton {...args} loading={loading}>
                        <Typography>a long long long long text text text text text</Typography>
                    </Skeleton>
                </Grid>
            </Grid>
        </Grid>
    );
};

// export const FullCardExample_ = () => {
//     return (
//         <Box>
//             <CardExample loading />
//             <CardExample />
//         </Box>
//     );
// };

// const CardExample = ({ loading }) => (
//   <Skeleton animation="wave" width="100%" loading={loading}>
//     <CardMedia
//       component="img"
//       height="140"
//       image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
//       alt="Nicola Sturgeon on a TED talk stage"
//     />
//   </Skeleton>
// );
const CardExample_ = ({ loading, ...args }) => (
    <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardHeader
            avatar={
                <Skeleton {...args} animation="wave" loading={loading}>
                    <Avatar
                        alt="Ted talk"
                        src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                    />
                </Skeleton>
            }
            action={loading ? null : <Button icon={<MoreVertIcon />} />}
            title={
                <Skeleton
                    {...args}
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                    loading={loading}
                >
                    Ted
                </Skeleton>
            }
            subheader={
                <Skeleton {...args} animation="wave" height={10} width="40%" loading={loading}>
                    5 hours ago
                </Skeleton>
            }
        />
        <Skeleton {...args} animation="wave" width="100%" loading={loading}>
            <CardMedia
                component="img"
                height="140"
                image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                alt="Nicola Sturgeon on a TED talk stage"
            />
        </Skeleton>

        <CardContent>
            <React.Fragment>
                <Skeleton {...args} animation="wave" style={{ marginBottom: 6 }} width={'90%'} loading={loading}>
                    <Typography
                        variant="body2"
                        muiColor="text.secondary"
                        component="p"
                        wrap={false}
                        width={'95%'}
                        border
                    >
                        Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's
                        success
                    </Typography>
                </Skeleton>
                <Skeleton {...args} animation="wave" height={10} width="80%" />
            </React.Fragment>
        </CardContent>
    </Card>
);

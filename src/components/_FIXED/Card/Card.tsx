import React, { cloneElement, isValidElement, Children } from 'react';
import type { PropsWithChildren } from 'react';
import { MoreVert as MoreVertIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import {
    Card as MuiCard,
    Button,
    CardActions,
    CardMedia,
    CardHeader,
    CardContent,
    Collapse,
    ExpandMore,
    Box,
} from './Card.styled';
import Menu from '../../Menu/Menu';
import { useCardExpandedContent } from './Card.hooks';
import type { CardProps } from '../../decs';

const Card: React.FC<PropsWithChildren<CardProps>> = (props): React.ReactElement => {
    const {
        actions,
        avatar,
        children,
        contentPadding,
        flexDirection,
        image,
        maxWidth,
        minWidth,
        mediaOnTop,
        optionsMenu,
        subtitle,
        title,
        width,
        ...rest
    } = props;

    const { expanded, content, cardContentExpended, isMediaOnTop, handleExpandClick } = useCardExpandedContent({
        mediaOnTop,
        children,
        flexDirection,
    });

    const options = Array.isArray(optionsMenu) ? optionsMenu : optionsMenu?.options ?? [];
    const optionsProps = Array.isArray(optionsMenu) ? {} : optionsMenu;

    const imageSrc = typeof image === 'object' ? image.src : image;
    const imageProps = typeof image === 'object' ? image : {};

    return (
        <MuiCard {...rest} sx={{ maxWidth, minWidth, width }}>
            {!isMediaOnTop && title ? <CardHeader avatar={avatar} title={title} subheader={subtitle} /> : undefined}
            <Box sx={{ ...(flexDirection && { flexDirection, display: 'flex' }) }}>
                {image ? (
                    <CardMedia
                        component="img"
                        image={imageSrc}
                        alt={imageProps?.title ?? 'card image media'}
                        sx={{ width: imageProps?.width, objectFit: imageProps?.stretch ?? 'cover' }}
                        {...imageProps}
                    />
                ) : undefined}

                <Box>
                    {isMediaOnTop && title ? (
                        <CardHeader
                            avatar={avatar}
                            title={title}
                            subheader={subtitle}
                            action={
                                options?.length ? (
                                    <Menu options={options} {...optionsProps} open>
                                        <Button icon={<MoreVertIcon />} />
                                    </Menu>
                                ) : undefined
                            }
                        />
                    ) : undefined}
                    <CardContent
                        sx={{
                            height: isMediaOnTop && title ? 'auto' : '100%',
                            boxSizing: 'border-box',
                            padding: contentPadding,
                        }}
                    >
                        {Children.toArray(content)}
                    </CardContent>

                    <CardActions disableSpacing>
                        {[]
                            .concat(actions)
                            .filter((v) => v)
                            .map((action, index) => {
                                return isValidElement(action) ? (
                                    cloneElement(action, { key: index })
                                ) : action ? (
                                    <Button
                                        key={index}
                                        color="inherit"
                                        size="small"
                                        icon={action?.icon}
                                        tooltipProps={{ tooltip: action?.tooltip }}
                                        onClick={(event) => action?.onClick?.(event)}
                                        {...(typeof action === 'object' ? action : undefined)}
                                    >
                                        {typeof action === 'string' ? action : action?.label}
                                    </Button>
                                ) : undefined;
                            })}

                        {cardContentExpended ? (
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                icon={<ExpandMoreIcon />}
                            />
                        ) : undefined}
                    </CardActions>
                </Box>
            </Box>
            {cardContentExpended ? (
                <Collapse in={expanded} timeout="auto" unmountOnExit addEndListener={undefined}>
                    <CardContent>{cardContentExpended}</CardContent>
                </Collapse>
            ) : undefined}
        </MuiCard>
    );
};

Card.defaultProps = {
    actions: undefined,
    avatar: undefined,
    contentPadding: undefined,
    flexDirection: undefined,
    image: undefined,
    maxWidth: 'max-content',
    minWidth: undefined,
    mediaOnTop: undefined,
    optionsMenu: undefined,
    subtitle: undefined,
    title: undefined,
    width: 'auto',
};

export type { CardProps } from '../../decs';
export default Card;

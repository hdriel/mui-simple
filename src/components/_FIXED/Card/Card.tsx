import React, { cloneElement, isValidElement, Children } from 'react';
import { MoreVert as MoreVertIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import parser from 'html-react-parser';
import {
    Card as MuiCard,
    Button,
    CardActions,
    CardMedia,
    CardMediaWrapper,
    ContentWrapper,
    CardHeader,
    CardContent,
    Collapse,
    ExpandMore,
    Box,
} from './Card.styled';
import Menu from '../Menu/Menu';
import { useCardExpandedContent } from './Card.hooks';
import type { CardProps } from '../../decs';
import { useElementSize } from '../../../hooks/useElementSize';

const Card: React.FC<CardProps> = (props): React.ReactElement => {
    const {
        actions,
        avatar,
        children,
        contentPadding,
        flexDirection,
        justifyContent,
        contentStyle,
        height,
        image,
        maxHeight,
        maxWidth,
        mediaOnTop,
        minHeight,
        minWidth,
        optionsMenu,
        subtitle,
        title,
        width,
        onClick,
        innerRef,
        parseChildren,
        contentWrapperStyle,
        ...rest
    } = props;
    const [ref, { height: currCardHeight }] = useElementSize(image?.fullHeight ?? false);

    const { expanded, content, cardContentExpended, isMediaOnTop, handleExpandClick } = useCardExpandedContent({
        mediaOnTop,
        children,
        flexDirection,
    });

    const options = Array.isArray(optionsMenu) ? optionsMenu : optionsMenu?.options ?? [];
    const optionsProps = Array.isArray(optionsMenu) ? {} : optionsMenu;

    const imageSrc = typeof image === 'object' ? image.src : image;
    const {
        sx: imageStyle,
        title: imageTitle,
        height: imageHeight,
        maxHeight: imageMaxHeight,
        width: imageWidth,
        maxWidth: imageMaxWidth,
        stretch: objectFit,
        fullHeight,
        ...imageProps
    } = typeof image === 'object' ? image : {};
    const CardMediaCmp = isValidElement(image) ? image : undefined;

    const childrenContent = Children.toArray(content).map((text) => {
        if (typeof text === 'string' && parseChildren) {
            return parser(text.replaceAll(/\n/gi, '<br>'));
        }
        return text;
    });

    return (
        <MuiCard
            ref={innerRef}
            {...rest}
            sx={{ maxWidth, minWidth, width, maxHeight, height, minHeight, ...rest.sx }}
            onClick={onClick}
        >
            {!isMediaOnTop && title ? <CardHeader avatar={avatar} title={title} subheader={subtitle} /> : undefined}
            <Box
                sx={{
                    ...(flexDirection && {
                        flexDirection,
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent,
                        ...contentStyle,
                    }),
                }}
            >
                {image
                    ? CardMediaCmp || (
                          <CardMediaWrapper sx={{ maxWidth: imageMaxWidth, maxHeight: imageMaxHeight }}>
                              <CardMedia
                                  component="img"
                                  image={imageSrc}
                                  alt={imageTitle ?? 'card image media'}
                                  sx={{
                                      ...imageStyle,
                                      width: imageWidth,
                                      objectFit: objectFit ?? 'fill',
                                      cursor: imageProps.onClick ? 'pointer' : 'default',
                                      height: fullHeight
                                          ? currCardHeight
                                              ? `${currCardHeight}px`
                                              : '100%'
                                          : imageHeight,
                                  }}
                                  {...imageProps}
                              />
                          </CardMediaWrapper>
                      )
                    : undefined}

                <ContentWrapper sx={contentWrapperStyle} ref={ref}>
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
                        {childrenContent}
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
                </ContentWrapper>
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
    contentWrapperStyle: undefined,
    maxWidth: 'max-content',
    minWidth: undefined,
    mediaOnTop: undefined,
    optionsMenu: undefined,
    subtitle: undefined,
    title: undefined,
    onClick: undefined,
    parseChildren: true,
    width: 'auto',
};

export type { CardProps } from '../../decs';
export default Card;

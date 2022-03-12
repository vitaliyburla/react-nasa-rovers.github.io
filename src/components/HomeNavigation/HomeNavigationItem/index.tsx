import { Avatar, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

interface IHomeNavigationItemProps {
    title: string;
    reverse?: boolean;
    avatar?: any;
    route: string;
}

const HomeNavigationItem: FC<IHomeNavigationItemProps> = ({
    title,
    reverse,
    avatar,
    route,
}) => {
    const AvatarImage = avatar;

    const classes = useStyles();

    return (
        <Link to={route} className={classes.navLink}>
            <Stack
                className={classes.navListItem}
                direction={reverse ? 'row-reverse' : 'row'}>
                <span>
                    <AvatarImage className={classes.navListItemAvatar} />
                </span>
                <Typography component="h3" variant="h2" align="center">
                    {title}
                </Typography>
            </Stack>
        </Link>
    );
};

export default HomeNavigationItem;

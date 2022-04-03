import { Avatar, Stack, Typography, SvgIcon } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

interface IHomeNavigationItemProps {
    title: string;
    route: string;
}

const HomeNavigationItem: FC<IHomeNavigationItemProps> = ({ title, route }) => {
    const classes = useStyles();

    return (
        <Link to={route} className={classes.navLink}>
            <Stack className={classes.navListItem} direction="row" spacing={3}>
                <Typography component="h2" variant="h2">
                    {title}
                </Typography>
                <svg
                    width="64"
                    height="25"
                    viewBox="0 0 64 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 13.84H58.4052L49.9726 22.2726L51.8674 24.1674L63.5348 12.5L51.8674 0.832642L49.9726 2.7274L58.4052 11.16H0V13.84Z"
                        fill="white"
                    />
                </svg>
            </Stack>
        </Link>
    );
};

export default HomeNavigationItem;

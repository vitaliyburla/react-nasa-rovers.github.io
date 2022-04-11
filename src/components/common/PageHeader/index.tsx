import { Box, Container, Divider, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useStyles } from './styles';

interface IPageHeaderProps {
    title: string;
    subtitle: string;
}

const PageHeader: FC<IPageHeaderProps> = ({ title, subtitle }) => {
    const classes = useStyles();
    return (
        <Box className={classes.headerWrapper}>
            <Typography className={classes.title} variant="h2">
                {title}
            </Typography>
            <Typography className={classes.subtitle} variant="body1">
                {subtitle}
            </Typography>
        </Box>
    );
};

export default PageHeader;

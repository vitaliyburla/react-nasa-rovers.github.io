import { Container, Grid, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../routes';
import { useStyles } from './styles';

const Navbar: FC = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.navbar}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Link to={RouteNames.HOME} className={classes.link}>
                    <Typography variant={'body1'}>home</Typography>
                </Link>
                <Stack direction="row" spacing={10}>
                    <Link to={RouteNames.ROVERS} className={classes.link}>
                        <Typography variant={'body1'}>rovers</Typography>
                    </Link>
                    <Link to={RouteNames.ASTEROIDS} className={classes.link}>
                        <Typography variant={'body1'}>asteroids</Typography>
                    </Link>
                </Stack>
            </Grid>
        </Container>
    );
};

export default Navbar;

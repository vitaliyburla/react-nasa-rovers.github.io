import { Box, Divider, Stack, Typography } from '@mui/material';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import React, { FC } from 'react';
import HomeNavigationItem from './HomeNavigationItem';
import { RouteNames } from '../../routes';
import { useStyles } from './styles';
import { Container } from '@mui/material';
import Marquee from 'react-fast-marquee';
import photo from '../../assets/images/mars-main.png';

const HomeNavigation: FC = () => {
    const classes = useStyles();
    return (
        <>
            <Box
                component="img"
                src="/assets/images/mars-main.png"
                className={classes.mainPhoto}
            />
            <Typography variant={'h1'} className={classes.header}>
                let’s explore space
            </Typography>
            <Stack className={classes.homeNav} spacing={2}>
                <HomeNavigationItem title="rovers" route={RouteNames.ROVERS} />
                <HomeNavigationItem
                    title="asteroids"
                    route={RouteNames.ASTEROIDS}
                />
            </Stack>
            <Box className={classes.marqueeBox}>
                <Marquee gradient={false} speed={150}>
                    <Typography
                        variant={'body1'}
                        component="span"
                        className={classes.marqueeText}>
                        Here you can find up-to-date information from NASA open
                        sources about their expeditions on Mars, also
                        information about asteroids around the planet.&nbsp;
                    </Typography>
                </Marquee>
            </Box>
        </>
    );
};

export default HomeNavigation;

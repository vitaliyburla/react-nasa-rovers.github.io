import { Divider, Stack } from '@mui/material';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import React, { FC } from 'react';
import HomeNavigationItem from './HomeNavigationItem';
import { RouteNames } from '../../routes';
import { useStyles } from './styles';

const HomeNavigation: FC = () => {
    const classes = useStyles();
    return (
        <Stack spacing={2} className={classes.homeNav} divider={<Divider />}>
            <HomeNavigationItem
                title="Rovers"
                avatar={SatelliteAltIcon}
                route={RouteNames.ROVERS}
            />

            <HomeNavigationItem
                title="Asteroids"
                reverse
                avatar={ScatterPlotIcon}
                route={RouteNames.ASTEROIDS}
            />
        </Stack>
    );
};

export default HomeNavigation;

import React, { FC, useEffect } from 'react';
import RoverCard, { RoverCardSkeleton } from './RoverCard';
import { Box, Grid } from '@mui/material';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useStyles } from './styles';

const RoverList: FC = () => {
    const classes = useStyles();
    const { getAllRovers, setRovers } = useActions();
    const { rovers, isLoading, error } = useTypedSelector(
        (store) => store.roverReducer
    );

    useEffect(() => {
        getAllRovers();
        return () => {
            setRovers([]);
        };
    }, []);

    return (
        <>
            <Box
                component="img"
                src="/assets/images/rover.png"
                className={classes.roverPhoto}
            />
            <Box className={classes.roversList}>
                <Grid
                    container
                    rowSpacing={{ xs: 1, sm: 2, md: 3 }}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {isLoading
                        ? [...Array(4)].map((item, index) => (
                              <Grid item xs={12} md={12} lg={6} key={index}>
                                  <RoverCardSkeleton />
                              </Grid>
                          ))
                        : rovers?.map((rover) => (
                              <Grid item xs={12} md={12} lg={6} key={rover.id}>
                                  <RoverCard
                                      name={rover.name}
                                      status={rover.status}
                                      landing_date={rover.landing_date}
                                      total_photos={rover.total_photos}
                                      max_date={rover.max_date}
                                      max_sol={rover.max_sol}
                                  />
                              </Grid>
                          ))}
                </Grid>
            </Box>
        </>
    );
};

export default RoverList;

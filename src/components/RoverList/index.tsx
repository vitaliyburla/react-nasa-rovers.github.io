import React, { useEffect } from 'react';
import RoverCard from '../RoverCard';
import { Alert, AlertTitle, Container, Grid, Typography } from '@mui/material';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RoverList = () => {
    const { getAllRovers } = useActions();

    const { rovers, isLoading, error } = useTypedSelector(
        (store) => store.roverReducer
    );

    useEffect(() => {
        getAllRovers();
    }, []);

    return (
        <Container maxWidth="lg">
            {isLoading && (
                <Grid container justifyContent="center">
                    <Typography>Loading...</Typography>
                </Grid>
            )}
            {error && (
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
            )}
            <Grid
                container
                rowSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, md: 12 }}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {rovers &&
                    rovers.map((rover) => (
                        <Grid item xs={4} key={rover.id}>
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
        </Container>
    );
};

export default RoverList;

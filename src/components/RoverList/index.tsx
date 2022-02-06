import React, { FC, useEffect } from 'react';
import RoverCard from '../RoverCard';
import {
    Alert,
    AlertTitle,
    CircularProgress,
    Container,
    Grid,
} from '@mui/material';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RoverList: FC = () => {
    const { getAllRovers } = useActions();
    const { rovers, isLoading, error } = useTypedSelector(
        (store) => store.roverReducer
    );

    useEffect(() => {
        getAllRovers();
    }, []);

    if (isLoading)
        return (
            <Grid container justifyContent="center">
                <CircularProgress sx={{ p: 4 }} />
            </Grid>
        );
    if (error)
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>
        );
    return (
        <Container maxWidth="lg">
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

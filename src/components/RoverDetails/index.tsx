import {
    Alert,
    AlertTitle,
    CircularProgress,
    Container,
    Grid,
} from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IRover } from '../../models/IRover';
import CamerasDetails from './CamerasDetails';

const RoverDetails: FC = () => {
    const { name } = useParams<{ name: string }>();
    const { getRoverByName, setCurrentRover } = useActions();
    const { isLoading, error } = useTypedSelector(
        (store) => store.roverReducer
    );

    useEffect(() => {
        getRoverByName(name);
        return () => {
            setCurrentRover({} as IRover);
        };
    }, [name]);

    if (isLoading)
        return (
            <Grid container justifyContent="center">
                <CircularProgress />
            </Grid>
        );
    if (error)
        return (
            <Container maxWidth="lg">
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
            </Container>
        );

    return (
        <Container maxWidth="lg">
            <CamerasDetails />
        </Container>
    );
};
export default RoverDetails;

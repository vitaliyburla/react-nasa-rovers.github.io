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
import { useStyles } from './styles';

const RoverDetails: FC = () => {
    const classes = useStyles();
    const { name } = useParams<{ name: string }>();
    const { getRoverByName, setCurrentRover } = useActions();
    const { currentRover, isLoading, error } = useTypedSelector(
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
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>
        );

    return (
        <Container maxWidth="lg">
            <CamerasDetails />
        </Container>
    );
};
export default RoverDetails;

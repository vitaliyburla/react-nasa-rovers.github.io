import { Container, Grid, Input, Slider, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { getRoverPhotos } from '../../../api/RoverService';
import { useActions } from '../../../hooks/useActions';
import { useDebounce } from '../../../hooks/useDebouce';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IRoverPhoto } from '../../../models/IRover';
import { useStyles } from '../styles';
import CameraCard from './CameraCard';
import CameraPhotos from './CameraPhotos';
import CameraSlider from './CameraSlider';

const CamerasDetails: FC = () => {
    const classes = useStyles();
    const { getRoverPhotos, setCurrentRoverPhotos } = useActions();
    const { currentRover } = useTypedSelector((store) => store.roverReducer);

    const [sol, setSol] = React.useState<
        number | string | Array<number | string>
    >(currentRover.max_sol);
    const debouncedSol = useDebounce(sol, 500);
    const [selectedCamera, setSelectedCamera] = useState('');

    useEffect(() => {
        if (selectedCamera && debouncedSol) {
            getRoverPhotos(currentRover.name, debouncedSol, selectedCamera);
            console.log(selectedCamera, debouncedSol);
        }
        return () => {
            setCurrentRoverPhotos([]);
        };
    }, [selectedCamera, debouncedSol]);

    return (
        <Container maxWidth="md">
            {currentRover.cameras && (
                <>
                    <Typography variant="h5" sx={{ pb: 2 }}>
                        Cameras:
                    </Typography>
                    <Grid container spacing={2}>
                        {currentRover.cameras?.map((cam, index) => (
                            <Grid key={index} item xs={6} sm={4} md={2}>
                                <CameraCard
                                    camera={cam}
                                    selectedCamera={selectedCamera}
                                    setSelectedCamera={setSelectedCamera}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
            {selectedCamera && (
                <>
                    <Typography variant="h5" sx={{ pb: 2, pt: 5 }}>
                        Sol:
                    </Typography>
                    <CameraSlider
                        setValue={setSol}
                        value={sol}
                        maxValue={currentRover.max_sol}
                    />
                </>
            )}
            <CameraPhotos />
        </Container>
    );
};

export default CamerasDetails;

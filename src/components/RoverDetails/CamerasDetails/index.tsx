import {
    Alert,
    Container,
    Grid,
    Input,
    Slider,
    Typography,
} from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useDebounce } from '../../../hooks/useDebouce';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useStyles } from '../styles';
import CameraCard from './CameraCard';
import CameraPhotos from './CameraPhotos';
import CameraSlider from './CameraSlider';

const CamerasDetails: FC = () => {
    const classes = useStyles();
    const { setCurrentRoverPhotos, getRoverPhotos } = useActions();
    const { currentRover } = useTypedSelector((store) => store.roverReducer);

    const { currentRoverPhotos } = useTypedSelector(
        (store) => store.photoReducer
    );

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
                        Sol: {debouncedSol}{' '}
                        {currentRoverPhotos[0] &&
                            `(${currentRoverPhotos[0].earth_date}) Total photos: ${currentRoverPhotos.length}`}
                    </Typography>
                    <CameraSlider
                        setValue={setSol}
                        value={sol}
                        maxValue={currentRover.max_sol}
                    />
                    <CameraPhotos />
                </>
            )}
        </Container>
    );
};

export default CamerasDetails;

import { Container, Grid, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useDebounce } from '../../../hooks/useDebouce';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import CameraCard from './CameraCard';
import CameraPhotos from './CameraPhotos';
import CustomSlider from '../../controls/Slider';

const CamerasDetails: FC = () => {
    const { setCurrentRoverPhotos, getRoverPhotos } = useActions();

    const { currentRover } = useTypedSelector((store) => store.roverReducer);
    const { currentRoverPhotos } = useTypedSelector(
        (store) => store.photoReducer
    );

    const [sol, setSol] = useState<number | string | Array<number | string>>(
        currentRover.max_sol
    );
    const [selectedCamera, setSelectedCamera] = useState<string>('');

    const debouncedSol = useDebounce(sol, 500);

    useEffect(() => {
        if (selectedCamera && debouncedSol) {
            getRoverPhotos(currentRover.name, debouncedSol, selectedCamera);
        }
        return () => {
            setCurrentRoverPhotos([]);
        };
    }, [selectedCamera, debouncedSol]);

    return (
        <Container maxWidth="md">
            {currentRover.cameras && (
                <>
                    <Typography variant="subtitle1" sx={{ pb: 2 }}>
                        Cameras:
                    </Typography>
                    <Grid container spacing={2}>
                        {currentRover.cameras?.map((cam, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4}>
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
                    <Typography variant="subtitle1" sx={{ pb: 2, pt: 5 }}>
                        Sol: <strong>{debouncedSol}</strong>{' '}
                        {currentRoverPhotos[0] &&
                            `(${currentRoverPhotos[0].earth_date}) Total photos: ${currentRoverPhotos.length}`}
                    </Typography>
                    <CustomSlider
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

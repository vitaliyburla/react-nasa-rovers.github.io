import { Box, Container, Grid, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useDebounce } from '../../../hooks/useDebouce';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import CameraCard from './CameraCard';
import CameraPhotos from './CameraPhotos';
import CustomSlider from '../../controls/Slider';
import { useStyles } from './styles';

const CamerasDetails: FC = () => {
    const classes = useStyles();
    const { setCurrentRoverPhotos, getRoverPhotos } = useActions();

    const { currentRover } = useTypedSelector((store) => store.roverReducer);
    const { currentRoverPhotos } = useTypedSelector(
        (store) => store.photoReducer
    );

    const [sol, setSol] = useState<number | string | Array<number | string>>(
        currentRover.max_sol
    );
    const [selectedCamera, setSelectedCamera] = useState<string>('');

    const debouncedSol = useDebounce(sol, 300);

    useEffect(() => {
        if (selectedCamera && debouncedSol) {
            getRoverPhotos(currentRover.name, debouncedSol, selectedCamera);
        }
        return () => {
            setCurrentRoverPhotos([]);
        };
    }, [selectedCamera, debouncedSol]);

    return (
        <>
            {currentRover.cameras && (
                <Box className={classes.cameraCardsWrapper}>
                    <Grid container spacing={2}>
                        {currentRover.cameras?.map((cam, index) => (
                            <Grid key={index} item xs={12} sm={6}>
                                <CameraCard
                                    camera={cam}
                                    selectedCamera={selectedCamera}
                                    setSelectedCamera={setSelectedCamera}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
            {selectedCamera && (
                <>
                    <Box className={classes.sliderWrapper}>
                        <Typography
                            variant="body1"
                            className={classes.sliderText}>
                            Sol: <span>{sol}</span>&nbsp;
                            {currentRoverPhotos[0] && (
                                <>
                                    (
                                    <span>
                                        {currentRoverPhotos[0].earth_date}
                                    </span>
                                    )&nbsp;Total photos:&nbsp;
                                    <span>{currentRoverPhotos.length}</span>
                                </>
                            )}
                        </Typography>
                        <CustomSlider
                            setValue={setSol}
                            value={sol}
                            maxValue={currentRover.max_sol}
                        />
                    </Box>
                    <CameraPhotos />
                </>
            )}
        </>
    );
};

export default CamerasDetails;

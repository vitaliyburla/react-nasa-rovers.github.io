import { Grid, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useStyles } from '../styles';
import CameraCard from './CameraCard';

const CamerasDetails: FC = () => {
    const classes = useStyles();

    const { currentRover } = useTypedSelector((store) => store.roverReducer);

    const [selectedCamera, setSelectedCamera] = useState('');

    useEffect(() => {
        if (selectedCamera) {
            console.log(selectedCamera);
        }
    }, [selectedCamera]);

    return (
        <>
            <Typography variant="h5" sx={{ pb: 2 }}>
                Cameras:
            </Typography>
            <Grid container spacing={3}>
                {currentRover.cameras?.map((cam, index) => (
                    <Grid key={index} item xs={6} sm={4} md={3}>
                        <CameraCard
                            camera={cam}
                            setSelectedCamera={setSelectedCamera}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default CamerasDetails;

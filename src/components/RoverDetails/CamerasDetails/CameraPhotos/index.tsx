import {
    ImageListItem,
    ImageList,
    Alert,
    CircularProgress,
    Grid,
} from '@mui/material';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import CameraPhoto from './CameraPhoto';

const CameraPhotos: FC = () => {
    const { currentRoverPhotos, isLoading } = useTypedSelector(
        (store) => store.photoReducer
    );

    if (isLoading) {
        return (
            <Grid container justifyContent="center" sx={{ pt: 3 }}>
                <CircularProgress />
            </Grid>
        );
    }

    if (!currentRoverPhotos.length)
        return (
            <Alert severity="info" sx={{ m: 2 }}>
                Unfortunately no photo was taken that day...
            </Alert>
        );

    return (
        <ImageList
            sx={{ width: '100%', height: 'auto', maxHeight: 600 }}
            variant="quilted"
            cols={3}>
            {currentRoverPhotos.map((item) => (
                <CameraPhoto img_src={item.img_src} key={item.id} />
            ))}
        </ImageList>
    );
};

export default CameraPhotos;

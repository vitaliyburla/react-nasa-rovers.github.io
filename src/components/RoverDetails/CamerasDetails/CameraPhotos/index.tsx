import { ImageListItem, ImageList, Alert } from '@mui/material';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

const CameraPhotos: FC = () => {
    const { currentRoverPhotos } = useTypedSelector(
        (store) => store.roverReducer
    );

    if (!currentRoverPhotos.length)
        return (
            <Alert severity="info" sx={{ m: 2 }}>
                Unfortunately no photo was taken that day...
            </Alert>
        );

    return (
        <ImageList
            sx={{ width: '100%', height: 1000 }}
            variant="quilted"
            cols={1}>
            {currentRoverPhotos.map((item) => (
                <ImageListItem key={item.id} cols={1} rows={1}>
                    <img src={item.img_src} alt={item.img_src} loading="lazy" />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default CameraPhotos;

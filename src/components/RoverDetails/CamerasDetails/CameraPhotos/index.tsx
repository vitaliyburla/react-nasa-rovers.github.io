import {
    ImageList,
    Alert,
    CircularProgress,
    Grid,
    Skeleton,
    Box,
} from '@mui/material';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import CameraPhoto from './CameraPhoto';
import { useStyles } from './styles';

const CameraPhotos: FC = () => {
    const classes = useStyles();

    const { currentRoverPhotos, isLoading } = useTypedSelector(
        (store) => store.photoReducer
    );

    return (
        <Box className={classes.imageListWrapper}>
            {!currentRoverPhotos.length && !isLoading && (
                <Alert severity="info" sx={{ m: 2 }}>
                    Unfortunately no photo was taken that day...
                </Alert>
            )}
            <ImageList className={classes.imageList} variant="quilted" cols={3}>
                {isLoading
                    ? [...Array(6)].map(() => (
                          <Skeleton
                              variant="rectangular"
                              width={'50%'}
                              sx={{ bgcolor: 'grey.900', padding: '50%' }}
                          />
                      ))
                    : currentRoverPhotos.map((item) => (
                          <CameraPhoto img_src={item.img_src} key={item.id} />
                      ))}
            </ImageList>
        </Box>
    );
};

export default CameraPhotos;

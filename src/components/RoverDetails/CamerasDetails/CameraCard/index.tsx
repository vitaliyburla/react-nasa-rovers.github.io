import { Box, Card, CardHeader, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IRoverCamera } from '../../../../models/IRover';
import { useStyles } from './styles';

interface ICameraCardProps {
    camera: IRoverCamera;
    setSelectedCamera: (value: string) => void;
    selectedCamera: string;
}

const CameraCard: FC<ICameraCardProps> = ({
    camera,
    setSelectedCamera,
    selectedCamera,
}) => {
    const classes = useStyles();

    return (
        <Box
            className={[
                classes.cameraCard,
                selectedCamera === camera.name.toLowerCase() &&
                    classes.cameraCardActive,
            ].join(' ')}
            onClick={() => setSelectedCamera(camera.name.toLowerCase())}>
            <Box>
                <Typography variant="body2" className={classes.title}>
                    {camera.full_name}
                </Typography>
            </Box>
        </Box>
    );
};

export default CameraCard;

import { Card, CardHeader } from '@mui/material';
import React, { FC } from 'react';
import { IRoverCamera } from '../../../../models/IRover';
import { useStyles } from './styles';

interface ICameraCardProps {
    camera: IRoverCamera;
    setSelectedCamera: (value: string) => void;
}

const CameraCard: FC<ICameraCardProps> = ({ camera, setSelectedCamera }) => {
    const classes = useStyles();

    return (
        <Card onClick={() => setSelectedCamera(camera.name.toLowerCase())}>
            <CardHeader
                className={classes.cameraCard}
                title={camera.name}
                subheader={camera.full_name}
            />
        </Card>
    );
};

export default CameraCard;

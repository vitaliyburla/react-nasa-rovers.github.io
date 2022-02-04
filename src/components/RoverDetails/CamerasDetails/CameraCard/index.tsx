import { Card, CardHeader, Typography } from '@mui/material';
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
        <Card onClick={() => setSelectedCamera(camera.name.toLowerCase())}>
            <CardHeader
                className={
                    selectedCamera === camera.name.toLowerCase()
                        ? classes.cameraCardActive
                        : classes.cameraCard
                }
                title={
                    <Typography variant="body1" className={classes.title}>
                        {camera.name}
                    </Typography>
                }
                subheader={
                    <Typography variant="body2" className={classes.subheader}>
                        {camera.full_name}
                    </Typography>
                }
            />
        </Card>
    );
};

export default CameraCard;

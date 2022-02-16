import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';

interface IRoverCardProps {
    name: string;
    landing_date: string;
    status: string;
    total_photos: number;
    max_date: string;
    max_sol: number;
}

const RoverCard: FC<IRoverCardProps> = ({
    name,
    landing_date,
    status,
    total_photos,
    max_date,
    max_sol,
}) => {
    const classes = useStyles();
    const history = useHistory();

    const openRover = () => history.push(`/rovers/${name.toLowerCase()}`);

    return (
        <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardActionArea onClick={openRover}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        className={
                            status === 'active'
                                ? classes.statusActive
                                : classes.status
                        }
                        gutterBottom>
                        {status}
                    </Typography>
                    <Typography variant="h5" className={classes.nameLabel}>
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Landed: {landing_date}
                    </Typography>
                    <Typography variant="body1">
                        <Typography
                            component={'span'}
                            className={classes.totalPhotosLabel}>
                            {total_photos}
                        </Typography>{' '}
                        total photos
                    </Typography>
                    <Typography variant="body2">
                        Last photo {max_date} ({max_sol} sol)
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RoverCard;

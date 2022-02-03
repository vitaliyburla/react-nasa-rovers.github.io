import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import React, { FC } from 'react';

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
    return (
        <Card sx={{ minWidth: 275, bgcolor: '#DFE3E8' }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom>
                    {status}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Landed: {landing_date}
                </Typography>
                <Typography variant="body1">
                    {total_photos} total photos
                </Typography>
                <Typography variant="body2">
                    Last photo {max_date} ({max_sol} sol)
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
};

export default RoverCard;

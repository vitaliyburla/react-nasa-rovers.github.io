import { Container, Divider, Typography } from '@mui/material';
import React, { FC } from 'react';
import RoverList from '../../components/RoverList';

const Rovers: FC = () => {
    return (
        <>
            <Container
                maxWidth="sm"
                sx={{
                    pb: 4,
                }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom>
                    Rovers
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph>
                    Here you can find up-to-date information from the NASA
                    rovers
                </Typography>
                <Divider />
            </Container>
            <RoverList />
        </>
    );
};

export default Rovers;

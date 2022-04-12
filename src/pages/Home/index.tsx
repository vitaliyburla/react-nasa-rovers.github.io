import { Container } from '@mui/material';
import React, { FC } from 'react';
import HomeNavigation from '../../components/HomeNavigation';

const Home: FC = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                position: 'relative',
            }}>
            <HomeNavigation />
        </Container>
    );
};

export default Home;

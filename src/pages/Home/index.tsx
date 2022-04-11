import { Container } from '@mui/material';
import React, { FC } from 'react';
import HomeNavigation from '../../components/HomeNavigation';

const Home: FC = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                marginTop: '6rem',
                position: 'relative',
            }}>
            <HomeNavigation />
        </Container>
    );
};

export default Home;

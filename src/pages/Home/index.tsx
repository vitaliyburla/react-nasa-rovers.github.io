import { Container } from '@mui/material';
import React, { FC } from 'react';
import HomeNavigation from '../../components/HomeNavigation';

const Home: FC = () => {
    return (
        <>
            <Container maxWidth="xs">
                <HomeNavigation />
            </Container>
        </>
    );
};

export default Home;

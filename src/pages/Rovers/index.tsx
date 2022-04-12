import { Container } from '@mui/material';
import React, { FC } from 'react';
import PageHeader from '../../components/common/PageHeader';
import RoverList from '../../components/RoverList';

const Rovers: FC = () => {
    return (
        <Container maxWidth="xl" sx={{ position: 'relative' }}>
            <PageHeader
                title="rovers"
                subtitle="here you can find up-to-date information from the NASA
                rovers"
            />
            <RoverList />
        </Container>
    );
};

export default Rovers;

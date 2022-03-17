import React, { FC } from 'react';
import AsteroidsList from '../../components/AsteroidsList';
import PageHeader from '../../components/common/PageHeader';

const Asteroids: FC = () => {
    return (
        <>
            <PageHeader
                title="Asteroids"
                subtitle="Here you can find information about asteroids around the Earth"
            />
            <AsteroidsList />
        </>
    );
};

export default Asteroids;

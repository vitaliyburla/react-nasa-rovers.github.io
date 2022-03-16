import React, { useEffect } from 'react';
import PageHeader from '../../components/common/PageHeader';
import { useActions } from '../../hooks/useActions';
import { IAsteroidsData } from '../../models/IAsteroid';

const Asteroids = () => {
    const { getAsteroidsByPage, setAsteroids } = useActions();

    useEffect(() => {
        getAsteroidsByPage(0);
        return () => {
            setAsteroids({} as IAsteroidsData);
        };
    }, []);

    return (
        <PageHeader
            title="Asteroids"
            subtitle="Here you can find information about asteroids around the Earth"
        />
    );
};

export default Asteroids;

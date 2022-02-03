import React from 'react';
import { useParams } from 'react-router-dom';

const RoverPage = () => {
    const { name } = useParams<{ name?: string }>();
    return <div>Rover {name}</div>;
};

export default RoverPage;

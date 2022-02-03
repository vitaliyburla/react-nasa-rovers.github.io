import React, { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Home: FC = () => {
    const { getAllRovers } = useActions();

    const { rovers, isLoading, error } = useTypedSelector(
        (store) => store.roverReducer
    );

    useEffect(() => {
        getAllRovers();
    }, []);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {rovers &&
                rovers.map((rover) => <div key={rover.id}>{rover.name}</div>)}
        </div>
    );
};

export default Home;

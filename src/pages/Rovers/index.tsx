import React, { FC } from 'react';
import PageHeader from '../../components/common/PageHeader';
import RoverList from '../../components/RoverList';

const Rovers: FC = () => {
    return (
        <>
            <PageHeader
                title="Rovers"
                subtitle="Here you can find up-to-date information from the NASA
                rovers"
            />
            <RoverList />
        </>
    );
};

export default Rovers;

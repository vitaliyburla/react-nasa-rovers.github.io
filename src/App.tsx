import React from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import ThemeConfig from './theme/index';

const App = () => {
    return (
        <ThemeConfig>
            <Navbar />
            <AppRouter />
        </ThemeConfig>
    );
};

export default App;

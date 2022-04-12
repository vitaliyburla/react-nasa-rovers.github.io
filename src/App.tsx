import React from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import GlobalStyles from './theme/globalStyles';
import ThemeConfig from './theme/index';

const App = () => {
    return (
        <ThemeConfig>
            <GlobalStyles />
            <Navbar />
            <AppRouter />
        </ThemeConfig>
    );
};

export default App;

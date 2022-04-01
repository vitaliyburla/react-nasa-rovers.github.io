import { CssBaseline } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { FC } from 'react';

const ThemeConfig: FC = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFFFFF',
            },
            secondary: {
                main: '#BBBBBB',
            },
            background: {
                default: '#141414',
            },
            success: {
                main: '#83D382',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeConfig;

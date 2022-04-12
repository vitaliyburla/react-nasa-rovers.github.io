import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        transition: 'color 0.1s ease-in-out',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
    navbar: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        position: 'sticky',
        zIndex: '10',
        top: 0,
        backdropFilter: 'blur(5px)',
        '-webkit-backdrop-filter': 'blur(5px)',
    },
}));

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    navListItem: {
        alignItems: 'center',
        color: theme.palette.primary.main,
        transition: 'color 0.1s ease-in-out',
        '& svg': {
            transition: 'margin 0.1s ease-in-out',
        },
        '&:hover': {
            color: theme.palette.primary.dark,
            '& svg': {
                marginLeft: '2rem',
            },
        },
    },
    navLink: {
        textDecoration: 'none',
    },
}));

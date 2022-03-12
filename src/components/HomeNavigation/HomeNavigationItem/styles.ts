import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    navListItem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem',
        color: theme.palette.primary.dark,
        '&:hover': {
            '& span': {
                color: theme.palette.secondary.light,
            },
            color: theme.palette.primary.light,
        },
    },
    navListItemAvatar: {
        margin: '0 1rem',
    },
    navLink: {
        textDecoration: 'none',
    },
}));

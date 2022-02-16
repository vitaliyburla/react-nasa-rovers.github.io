import { Theme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    homeLink: {
        color: theme.palette.primary.dark,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    navbar: {
        background: `linear-gradient(45deg, ${blueGrey[100]} 50%, ${blueGrey[50]} 100% )`,
        boxShadow: theme.shadows[1],
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        marginBottom: '2rem',
    },
}));

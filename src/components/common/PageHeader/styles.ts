import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    title: {
        color: theme.palette.primary.main,
        textAlign: 'center',
    },
    subtitle: {
        color: theme.palette.primary.main,
        textAlign: 'center',
    },
    headerWrapper: {
        width: '40%',
        margin: '1rem auto 4rem auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

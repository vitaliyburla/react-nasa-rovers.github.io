import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 4rem)',
    },
    homeNavContainer: {
        paddingTop: '6rem',
    },
    homeNav: {
        marginTop: '5vh',
        width: 'max-content',
    },
    header: {
        color: theme.palette.primary.main,
    },
    marqueeText: {
        color: theme.palette.primary.main,
    },
    marqueeBox: {
        margin: 'auto auto 5vh auto',
    },
    mainPhoto: {
        position: 'absolute',
        zIndex: '-100',
        right: '0',
        top: '-1rem',
        maxHeight: '90vh',
    },
}));

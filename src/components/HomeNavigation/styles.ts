import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    homeNav: {
        marginTop: '3rem',
        width: 'max-content',
    },
    header: {
        color: theme.palette.primary.main,
    },
    marqueeText: {
        color: theme.palette.primary.main,
    },
    marqueeBox: {
        marginTop: '12rem',
        //bottom: 0,
    },
}));

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    sliderContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    slider: {
        color: theme.palette.primary.main,
        display: 'inline-block',
    },
}));

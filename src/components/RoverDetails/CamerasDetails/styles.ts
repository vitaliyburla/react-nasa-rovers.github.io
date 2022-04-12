import { Theme } from '@mui/material';
import { blueGrey, blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    cameraCardsWrapper: {
        width: '70%',
        margin: '0 auto',
    },
    sliderWrapper: {
        width: '90%',
        margin: '3rem auto',
    },
    sliderText: {
        color: theme.palette.primary.main,
        '& span': {
            color: theme.palette.secondary.main,
        },
    },
}));

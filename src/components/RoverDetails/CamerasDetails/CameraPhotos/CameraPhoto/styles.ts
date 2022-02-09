import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    photo: {
        '&:hover': {
            background: theme.palette.common.black,
            opacity: 0.8,
            cursor: 'pointer',
        },
    },
}));

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    main: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        '& img': {
            width: 'auto',
            height: 'auto',
            maxHeight: '95vh',
            maxWidth: '95vw',
        },
    },
}));

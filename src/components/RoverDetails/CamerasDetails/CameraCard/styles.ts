import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    cameraCard: {
        color: theme.palette.common.white,
        transition: 'opacity 0.05s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            opacity: 0.9,
        },
        padding: '1.5rem 1rem',
        background:
            'linear-gradient(120deg, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.05) 90%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
    },
    cameraCardActive: {
        background:
            'linear-gradient(120deg, rgba(131,211,130,0.5) 10%, rgba(131,211,130,0.3) 90%)',
        border: '1px solid rgba(131,211,130,0.1)',
        color: theme.palette.common.white,
    },
    title: {
        textAlign: 'center',
        color: theme.palette.common.white,
    },
}));

import { Theme } from '@mui/material';
import { blueGrey, blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    card: {
        minWidth: '18rem',
        background:
            'linear-gradient(120deg, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.05) 90%)',
        transition: 'opacity 0.05s ease-in-out',

        '&:hover': {
            cursor: 'pointer',
            opacity: 0.9,
        },
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '0.5rem',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    cardContent: {
        padding: '1rem',
        color: theme.palette.primary.main,
    },
    status: {
        color: theme.palette.secondary.main,
    },
    statusActive: {
        color: theme.palette.success.main,
    },
    secondaryLabel: {
        color: theme.palette.secondary.main,
    },
}));

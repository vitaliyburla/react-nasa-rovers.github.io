import { Theme } from '@mui/material';
import { blueGrey, blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    viewButton: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        paddingLeft: '1em',
        paddingRight: '1em',
    },
    card: {
        background: `linear-gradient(45deg, ${blueGrey[100]} 50%, ${blueGrey[50]} 100% )`,
    },
    status: {
        color: theme.palette.text.disabled,
    },
    statusActive: {
        color: blue[600],
    },
    totalPhotosLabel: {
        color: theme.palette.primary.main,
    },
    nameLabel: {
        color: theme.palette.primary.dark,
    },
}));

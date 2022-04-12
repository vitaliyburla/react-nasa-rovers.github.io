import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    tablePagination: {
        background: theme.palette.primary.main,
        borderRadius: '4px 4px 0 0',
    },
    table: {
        background: theme.palette.primary.main,
        borderRadius: '0 0 4px 4px !important',
    },
}));

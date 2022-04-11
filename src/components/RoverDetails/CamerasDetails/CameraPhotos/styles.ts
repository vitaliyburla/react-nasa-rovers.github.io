import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    imageListWrapper: {
        width: '100%',
        height: 600,
    },
    imageList: {
        width: '100%',
        height: 'auto',
        maxHeight: 600,
    },
}));

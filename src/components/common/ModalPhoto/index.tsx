import { Card, CardMedia, Modal } from '@mui/material';
import React, { FC } from 'react';
import { useStyles } from './styles';

interface IModalPhotoProps {
    open: boolean;
    handleClose: () => void;
    img_src: string;
}

const ModalPhoto: FC<IModalPhotoProps> = ({ open, handleClose, img_src }) => {
    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Card className={classes.main}>
                <CardMedia component="img" image={img_src} alt={img_src} />
            </Card>
        </Modal>
    );
};

export default ModalPhoto;

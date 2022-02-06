import { ImageListItem } from '@mui/material';
import React, { FC, useState } from 'react';
import ModalPhoto from '../../../../ModalPhoto';

interface ICameraPhotoProps {
    img_src: string;
}

const CameraPhoto: FC<ICameraPhotoProps> = ({ img_src }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {open && (
                <ModalPhoto
                    open={open}
                    handleClose={handleClose}
                    img_src={img_src}
                />
            )}
            <ImageListItem cols={1} onClick={handleOpen}>
                <img src={img_src} alt={img_src} loading="lazy" />
            </ImageListItem>
        </>
    );
};

export default CameraPhoto;

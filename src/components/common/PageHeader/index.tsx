import { Container, Divider, Typography } from '@mui/material';
import React, { FC } from 'react';

interface IPageHeaderProps {
    title: string;
    subtitle: string;
}

const PageHeader: FC<IPageHeaderProps> = ({ title, subtitle }) => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                pb: 4,
            }}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom>
                {title}
            </Typography>
            <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph>
                {subtitle}
            </Typography>
            <Divider />
        </Container>
    );
};

export default PageHeader;

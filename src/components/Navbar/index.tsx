import { Container } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import { RouteNames } from '../../routes';
import { useStyles } from './styles';

const Navbar: FC = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.navbar}>
            <Link to={RouteNames.HOME} className={classes.homeLink}>
                <PublicSharpIcon fontSize="large" />
            </Link>
        </Container>
    );
};

export default Navbar;

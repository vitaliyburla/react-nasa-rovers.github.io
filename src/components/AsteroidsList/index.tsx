import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Container,
    Alert,
    AlertTitle,
    CircularProgress,
    Grid,
    TablePagination,
    Skeleton,
} from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { IAsteroidsData } from '../../models/IAsteroid';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Row, { SkeletonRow } from './Row';

const AsteroidsList: FC = () => {
    const { getAsteroidsByPage, setAsteroids } = useActions();
    const { asteroids, isLoading, error } = useTypedSelector(
        (store) => store.asteroidsReducer
    );

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
        getAsteroidsByPage(newPage, rowsPerPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        getAsteroidsByPage(page, parseInt(event.target.value, 10));
    };

    useEffect(() => {
        getAsteroidsByPage(page, rowsPerPage);
        return () => {
            setAsteroids({} as IAsteroidsData);
        };
    }, []);

    if (error)
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>
        );

    return (
        <Container maxWidth="md">
            <TablePagination
                component="div"
                count={asteroids?.page?.total_pages | 0}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 15, 20]}
            />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell align="right">
                                Estimated&nbsp;diameter&nbsp;(km)
                            </TableCell>
                            <TableCell align="right">Hazardous</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading
                            ? [...Array(rowsPerPage)].map((e, i) => (
                                  <SkeletonRow key={i} />
                              ))
                            : asteroids?.near_earth_objects?.map((asteroid) => (
                                  <Row key={asteroid.id} row={asteroid} />
                              ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AsteroidsList;

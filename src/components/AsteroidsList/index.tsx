import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box,
    Collapse,
    IconButton,
    Typography,
    Container,
    Alert,
    AlertTitle,
    CircularProgress,
    Grid,
} from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import {
    IAsteroid,
    IAsteroidDiameter,
    IAsteroidsData,
} from '../../models/IAsteroid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AsteroidsList: FC = () => {
    const { getAsteroidsByPage, setAsteroids } = useActions();
    const { asteroids, isLoading, error } = useTypedSelector(
        (store) => store.asteroidsReducer
    );

    useEffect(() => {
        getAsteroidsByPage(0);
        return () => {
            setAsteroids({} as IAsteroidsData);
        };
    }, []);

    if (isLoading)
        return (
            <Grid container justifyContent="center">
                <CircularProgress sx={{ p: 4 }} />
            </Grid>
        );
    if (error)
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>
        );

    function Row(props: { row: IAsteroid }) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}>
                            {open ? (
                                <KeyboardArrowUpIcon />
                            ) : (
                                <KeyboardArrowDownIcon />
                            )}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">
                        {
                            row.estimated_diameter.kilometers
                                .estimated_diameter_min
                        }
                        -
                        {
                            row.estimated_diameter.kilometers
                                .estimated_diameter_max
                        }
                    </TableCell>
                    <TableCell align="right">
                        {row.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div">
                                    Close approaches
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Miss distance</TableCell>
                                            <TableCell>Velocity</TableCell>
                                            <TableCell>Orbiting body</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.close_approach_data.map(
                                            (historyRow) => (
                                                <TableRow
                                                    key={
                                                        historyRow.close_approach_date
                                                    }>
                                                    <TableCell>
                                                        {
                                                            historyRow.close_approach_date
                                                        }
                                                    </TableCell>
                                                    <TableCell
                                                        component="th"
                                                        scope="row">
                                                        {
                                                            historyRow
                                                                .miss_distance
                                                                .kilometers
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            historyRow
                                                                .relative_velocity
                                                                .kilometers_per_hour
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            historyRow.orbiting_body
                                                        }
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        );
    }

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell align="right">
                                Diameter&nbsp;(km)
                            </TableCell>
                            <TableCell align="right">Hazardous</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {asteroids?.near_earth_objects?.map((asteroid) => (
                            <Row key={asteroid.id} row={asteroid} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AsteroidsList;

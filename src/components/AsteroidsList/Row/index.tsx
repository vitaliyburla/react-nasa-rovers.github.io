import {
    TableRow,
    TableCell,
    IconButton,
    Collapse,
    Box,
    Typography,
    Table,
    TableHead,
    TableBody,
    Skeleton,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { IAsteroid, ICloseApproachData } from '../../../models/IAsteroid';
import { sortDateDESC, formatDate } from '../../../utils/formatDate';
import { numberWithCommas } from '../../../utils/formatValue';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface IRowProps {
    row: IAsteroid;
}

const Row: FC<IRowProps> = ({ row }) => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('date');

    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };

    const withSort = (closeApproach: ICloseApproachData[]) => {
        switch (sort) {
            case 'date':
                return closeApproach.sort((a, b) =>
                    sortDateDESC(a.close_approach_date, b.close_approach_date)
                );
            case 'miss_distance':
                return closeApproach.sort((a, b) =>
                    b.miss_distance.kilometers > a.miss_distance.kilometers
                        ? 1
                        : -1
                );
            case 'velocity':
                return closeApproach.sort((a, b) =>
                    b.relative_velocity.kilometers_per_hour >
                    a.relative_velocity.kilometers_per_hour
                        ? 1
                        : -1
                );
            default:
                return closeApproach;
        }
    };

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
                    {Math.round(
                        row.estimated_diameter.kilometers
                            .estimated_diameter_min * 10
                    ) / 10}
                    &nbsp;-&nbsp;
                    {Math.round(
                        row.estimated_diameter.kilometers
                            .estimated_diameter_max * 10
                    ) / 10}
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
                            <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">
                                    Sort
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={sort}
                                    onChange={handleChange}
                                    label="Sort">
                                    <MenuItem value={'date'}>Date</MenuItem>
                                    <MenuItem value={'miss_distance'}>
                                        Miss distance
                                    </MenuItem>
                                    <MenuItem value={'velocity'}>
                                        Velocity
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>
                                            Miss&nbsp;distance&nbsp;(km)
                                        </TableCell>
                                        <TableCell>
                                            Velocity&nbsp;(km/h)
                                        </TableCell>
                                        <TableCell>
                                            Orbiting&nbsp;body
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {withSort(row.close_approach_data).map(
                                        (historyRow) => (
                                            <TableRow
                                                key={
                                                    historyRow.close_approach_date
                                                }>
                                                <TableCell>
                                                    {formatDate(
                                                        historyRow.close_approach_date
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {numberWithCommas(
                                                        parseInt(
                                                            historyRow
                                                                .miss_distance
                                                                .kilometers
                                                        )
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {numberWithCommas(
                                                        parseInt(
                                                            historyRow
                                                                .relative_velocity
                                                                .kilometers_per_hour
                                                        )
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {historyRow.orbiting_body}
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
};

export default Row;

export const SkeletonRow = () => {
    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">
                <Skeleton variant="text" />
            </TableCell>
            <TableCell align="right">
                <Skeleton variant="text" />
            </TableCell>
            <TableCell align="right">
                <Skeleton variant="text" />
            </TableCell>
        </TableRow>
    );
};

import { Grid, IconButton, Input, InputAdornment, Slider } from '@mui/material';
import React, { FC } from 'react';
import { useStyles } from './styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface ICustomSliderProps {
    value: number | string | Array<number | string>;
    setValue: (value: number | string | Array<number | string>) => void;
    maxValue: number;
}

const CustomSlider: FC<ICustomSliderProps> = ({
    setValue,
    value,
    maxValue,
}) => {
    const classes = useStyles();

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    return (
        <Grid
            container
            columnSpacing={{ xs: 2 }}
            alignItems="center"
            className={classes.sliderContainer}>
            <Grid item xs>
                <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    min={1}
                    max={maxValue}
                    step={1}
                    className={classes.slider}
                />
            </Grid>
            <Grid item>
                <IconButton
                    aria-label="back"
                    color="primary"
                    onClick={() => setValue(+value - 1)}>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                    aria-label="forward"
                    color="primary"
                    onClick={() => setValue(+value + 1)}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default CustomSlider;

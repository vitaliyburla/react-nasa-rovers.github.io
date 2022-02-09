import { Grid, Input, Slider } from '@mui/material';
import React, { FC } from 'react';
import { useStyles } from './styles';

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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    return (
        <Grid container spacing={2} alignItems="center">
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
                <Input
                    value={value}
                    size="small"
                    onChange={handleInputChange}
                    inputProps={{
                        step: 1,
                        min: 1,
                        max: maxValue,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default CustomSlider;
